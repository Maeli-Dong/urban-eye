import { Image, StyleSheet, Text, View } from 'react-native';
import Badge from './Badge';

// Une carte, quelles que soient les données : un concert ou une capture.
// infos : une liste de textes, séparés par des triangles.
// vedette : la carte prend toute la largeur (la tête d'affiche).
const Carte = ({ image, alt, surtitre, titre, infos, pastille, couleur, encre, vedette }) => {
  return (
    <View style={[styles.card, vedette && styles.cardVedette]}>
      <View style={styles.imageFrame}>
        <Image source={image} alt={alt} style={styles.image} />
        {pastille && <Badge couleur={couleur} encre={encre}>{pastille}</Badge>}
      </View>
      <View style={styles.content}>
        {surtitre && <Text style={styles.surtitre}>{surtitre}</Text>}
        <Text style={[styles.titre, vedette && styles.titreVedette]}>{titre}</Text>
        <View style={styles.infos}>
          {infos.map((info, index) => (
            <Text key={info} style={styles.info}>
              {index > 0 && <Text style={styles.triangle}>△ </Text>}
              {info}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '48%',
  },
  // La carte vedette prend toute la largeur
  cardVedette: {
    width: '100%',
  },
  imageFrame: {
    aspectRatio: 4 / 5,
    backgroundColor: '#121212',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  content: {
    paddingTop: 16,
  },
  surtitre: {
    marginBottom: 8,
    color: '#ff3d1f',
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 3,
  },
  titre: {
    marginBottom: 10,
    fontSize: 24,
    fontWeight: '900',
    lineHeight: 24,
    textTransform: 'uppercase',
  },
  titreVedette: {
    fontSize: 40,
    lineHeight: 40,
  },
  infos: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  info: {
    color: '#6b6b6b',
    fontSize: 12,
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  triangle: {
    color: '#ff3d1f',
  },
});

export default Carte;