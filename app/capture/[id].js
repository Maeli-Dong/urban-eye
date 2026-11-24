import { Link, Stack, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { captures } from '../../src/captures';
import { couleurs, espace, polices, tailles } from '../../src/theme';
import Fiche from '../../src/components/Fiche';

// L'écran d'une capture. Son adresse : /capture/3
// On ne reçoit que l'id ; on retrouve la capture dans les données.
export default function EcranCapture() {
  const { id } = useLocalSearchParams();

  // id arrive en texte ('3'), celui des données est un nombre (3) :
  // on compare les deux en texte.
  const capture = captures.find(c => String(c.id) === String(id));

  // Une adresse qui ne correspond à aucune capture : /capture/999
  if (!capture) {
    return (
      <View style={styles.ecran}>
        <Stack.Screen options={{ title: 'Introuvable' }} />
        <Text style={styles.titre}>Capture introuvable</Text>
        <Text style={styles.texte}>Aucune capture ne porte le numéro {id}.</Text>
        <Link href="/" style={styles.lien}>Retour à la grille</Link>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen options={{ title: capture.titre }} />
      <Fiche capture={capture} />
    </>
  );
}

const styles = StyleSheet.create({
  ecran: {
    flex: 1,
    gap: espace.m,
    padding: espace.m,
    backgroundColor: couleurs.fond,
  },
  titre: {
    color: couleurs.texte,
    fontFamily: polices.titre,
    fontSize: tailles.grand,
  },
  texte: {
    color: couleurs.texteDoux,
    fontFamily: polices.texte,
    fontSize: tailles.texte,
  },
  lien: {
    color: couleurs.accent,
    fontFamily: polices.texteGras,
    fontSize: tailles.texte,
  },
});
