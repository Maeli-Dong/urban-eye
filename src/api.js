// Urban Eye : le SEUL fichier qui parle au serveur.
// Les écrans ne connaissent ni son adresse ni la forme de ses réponses :
// ils appellent lireCaptures() et lireCapture(id), et reçoivent des captures
// dans la forme de l'application (id, titre, lieu, date, categorie, image).
// Le jour où vous changez de serveur, seul ce fichier change.

const BASE = 'https://api-amorce.techniques-graphiques.be';

// La dernière liste reçue : la fiche y retrouve sa capture.
let memoire = [];

// Une contribution d'Amorce devient une capture de l'application.
const traduire = (c) => ({
  id: c.id,
  titre: c.note || 'Sans titre',
  lieu: `${c.lat.toFixed(3)}, ${c.lng.toFixed(3)}`,
  // taken_at : '2026-11-19 12:30:35' ; on garde le jour : 19/11/2026
  date: `${c.taken_at.slice(8, 10)}/${c.taken_at.slice(5, 7)}/${c.taken_at.slice(0, 4)}`,
  categorie: c.category,
  image: { uri: c.thumb_url },
  photo: { uri: c.photo_url },
  auteur: c.author_pseudo,
  lat: c.lat,
  lng: c.lng,
});

// Toutes les captures (la première page : 24 au plus).
export const lireCaptures = async () => {
  const reponse = await fetch(`${BASE}/public/contributions?page=1`);
  if (!reponse.ok) {
    throw new Error(`Le serveur a répondu ${reponse.status}`);
  }
  const donnees = await reponse.json();
  memoire = donnees.items.map(traduire);
  return memoire;
};

// Une capture, par son id. Amorce n'a pas de route pour une seule capture :
// on la cherche dans la liste déjà reçue, et on la charge si elle est vide.
export const lireCapture = async (id) => {
  if (memoire.length === 0) {
    await lireCaptures();
  }
  return memoire.find(c => String(c.id) === String(id)) ?? null;
};

// Bonus : la page suivante (Amorce en sert 24 par page).
// Les nouvelles captures s'ajoutent à la mémoire ; derniere dit s'il en reste.
export const lirePage = async (page) => {
  const reponse = await fetch(`${BASE}/public/contributions?page=${page}`);
  if (!reponse.ok) {
    throw new Error(`Le serveur a répondu ${reponse.status}`);
  }
  const donnees = await reponse.json();
  const nouvelles = donnees.items.map(traduire);
  memoire = [...memoire, ...nouvelles];
  return { captures: nouvelles, derniere: page >= donnees.pages };
};
