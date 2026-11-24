import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { couleurs, espace, polices, rayon, tailles } from '../theme';
import Pastille from './Pastille';

// La carte d'une capture : sa photo, sa catégorie, son titre, son lieu et sa date.
const Carte = ({ capture }) => {
  return (
    <Pressable style={({ pressed }) => [styles.carte, pressed && styles.carteTouchee]}>
      <View style={styles.cadre}>
        <Image source={capture.image} style={styles.image} />
      </View>
      <View style={styles.contenu}>
        <Pastille categorie={capture.categorie} />
        <Text style={styles.titre}>{capture.titre}</Text>
        <Text style={styles.infos}>
          {capture.lieu} · {capture.date}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  carte: {
    width: '48%',
    overflow: 'hidden',
    borderRadius: rayon,
    backgroundColor: couleurs.surface,
  },
  carteTouchee: {
    opacity: 0.8,
    transform: [{ scale: 0.97 }],
  },
  cadre: {
    aspectRatio: 4 / 5,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  contenu: {
    gap: espace.s,
    padding: espace.s,
  },
  titre: {
    color: couleurs.texte,
    fontFamily: polices.titre,
    fontSize: tailles.titre,
  },
  infos: {
    color: couleurs.texteDoux,
    fontFamily: polices.texte,
    fontSize: tailles.petit,
  },
});

export default Carte;
