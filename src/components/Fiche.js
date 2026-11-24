import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { couleurs, espace, polices, tailles } from '../theme';
import Pastille from './Pastille';

// La fiche d'une capture : la grande photo, puis sa catégorie, son titre,
// son lieu et sa date. Elle défile si l'écran est petit.
const Fiche = ({ capture }) => {
  return (
    <ScrollView style={styles.ecran} contentContainerStyle={styles.contenu}>
      <View style={styles.cadre}>
        <Image source={capture.image} style={styles.image} />
      </View>
      <View style={styles.texte}>
        <Pastille categorie={capture.categorie} />
        <Text style={styles.titre}>{capture.titre}</Text>
        <Text style={styles.infos}>{capture.lieu}</Text>
        <Text style={styles.infos}>{capture.date}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ecran: {
    flex: 1,
    backgroundColor: couleurs.fond,
  },
  contenu: {
    paddingBottom: espace.l,
  },
  cadre: {
    width: '100%',
    aspectRatio: 4 / 5,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  texte: {
    gap: espace.s,
    padding: espace.m,
  },
  titre: {
    color: couleurs.texte,
    fontFamily: polices.titre,
    fontSize: tailles.grand,
  },
  infos: {
    color: couleurs.texteDoux,
    fontFamily: polices.texte,
    fontSize: tailles.texte,
  },
});

export default Fiche;
