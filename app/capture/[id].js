import { useEffect, useState } from 'react';
import { Link, Stack, useLocalSearchParams } from 'expo-router';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { lireCapture } from '../../src/api';
import { couleurs, espace, polices, tailles } from '../../src/theme';
import Fiche from '../../src/components/Fiche';

// L'écran d'une capture. Son adresse : /capture/<id>
// On ne reçoit que l'id ; api.js retrouve la capture.
export default function EcranCapture() {
  const { id } = useLocalSearchParams();

  // undefined : pas encore de réponse ; null : aucune capture avec cet id
  const [capture, setCapture] = useState(undefined);

  // À l'ouverture de l'écran, et si l'id change
  useEffect(() => {
    lireCapture(id)
      .then(setCapture)
      .catch(() => setCapture(null));
  }, [id]);

  // 1. En attendant la réponse
  if (capture === undefined) {
    return (
      <View style={styles.ecran}>
        <Stack.Screen options={{ title: '' }} />
        <ActivityIndicator size="large" color={couleurs.accent} />
      </View>
    );
  }

  // 2. Aucune capture avec cet id : /capture/999
  if (capture === null) {
    return (
      <View style={styles.ecran}>
        <Stack.Screen options={{ title: 'Introuvable' }} />
        <Text style={styles.titre}>Capture introuvable</Text>
        <Text style={styles.texte}>Aucune capture ne porte le numéro {id}.</Text>
        <Link href="/" style={styles.lien}>Retour à la grille</Link>
      </View>
    );
  }

  // 3. La capture est là
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
