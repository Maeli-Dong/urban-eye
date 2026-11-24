# Journal de pilotage - Urban Eye

Une entrée par séance. Quelques lignes par rubrique : des faits, pas des phrases toutes faites.

## Mercredi 18 novembre 2026 - Jalon 1 : la grille filtrable

### Ce que mon application fait de plus qu'au début de la séance

- L'apparence est dans un seul fichier, theme.js ; captures.js ne contient plus que des données.
- Les huit captures s'affichent en grille de deux colonnes (FlatList), sous un en-tête avec leur nombre.
- Chaque carte a une pastille dont la couleur et la forme viennent du thème.
- Une barre de filtres (Tout, Stickers, Enseignes, Graff, WTF) : la grille et le compte suivent le choix.

### Ce que j'ai demandé à l'assistant

(Le but que je lui ai donné, pas le texte mot pour mot.)

- Vérifier ma copie du kit (exercice 1).
- Faire les exercices 2, 3 et 4 à partir des consignes : il a recopié le code du cours et testé le résultat.
- Faire l'exercice 5 : il a rédigé une partie de ce journal et fait le commit.

### Ce que j'ai corrigé ou refusé, et pourquoi

- Rien de corrigé ni de refusé dans le code des exercices 2 à 4 : c'est celui du cours, tel quel.
- L'assistant ne trouvait pas le kit : je l'ai copié moi-même et j'ai renommé src en src-avant.
- Après ce renommage, App.js cherchait encore les anciens composants et l'application ne démarrait plus. Réglé à l'exercice 2, où App.js est remplacé.

### Ce que je ne sais pas encore expliquer

- (à compléter)

## Mardi 24 novembre 2026 - Jalon 2 : la fiche d'une capture

### Ce que mon application fait de plus qu'au début de la séance

- Elle a deux écrans (Expo Router, dossier app/) : la grille et la fiche d'une capture.
- Toucher une carte ouvre sa fiche : grande image, catégorie, titre, lieu et date. La flèche ramène à la grille.
- L'écran ne reçoit que l'id (/capture/3) et retrouve la capture dans les données.
- Une adresse inconnue (/capture/999) affiche « Capture introuvable » et un lien de retour.

### Ce que j'ai demandé à l'assistant

(Le but que je lui ai donné, pas le texte mot pour mot.)

- Faire les exercices 1, 2 et 3 à partir des consignes : il a recopié le code du cours et testé le résultat dans un navigateur.
- Faire l'exercice 4 : il a rédigé une partie de cette entrée, fait le commit et le push.

### Ce que j'ai corrigé ou refusé, et pourquoi

- Rien de corrigé ni de refusé dans le code : c'est celui du cours, tel quel.
- L'effet au toucher de la carte (bonus de la séance 14) a disparu avec le Carte.js de l'exercice 2. Pas remis pour l'instant.

### Ce que je ne sais pas encore expliquer

- (à compléter)

## Mardi 24 novembre 2026 - Applications multimédia, séance 17 : l'API de la classe

- Adresse : https://api-amorce.techniques-graphiques.be/public/contributions?page=1 (JSON : items, total, pages ; 24 captures par page).
- Champs utiles : id, thumb_url (la grille), photo_url (la fiche), category (la pastille), author_pseudo, taken_at (la date), note, lat et lng.
- Ce qui manque : le titre (note est souvent null) et le nom du lieu (seulement lat et lng) ; taken_at est à remettre au format jour/mois/année, et l'id est un texte, pas un nombre.
