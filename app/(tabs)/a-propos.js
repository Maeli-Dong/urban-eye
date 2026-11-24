import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { couleurs, espace, polices, tailles } from '../../src/theme';

// Bonus : le deuxième onglet. Son adresse : /a-propos
export default function APropos() {
  return (
    <SafeAreaView style={styles.ecran}>
      <View style={styles.contenu}>
        <Text style={styles.titre}>À propos</Text>
        <Text style={styles.texte}>
          Urban Eye capture la ville : stickers, enseignes, graffs et curiosités.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  ecran: {
    flex: 1,
    backgroundColor: couleurs.fond,
  },
  contenu: {
    gap: espace.m,
    padding: espace.m,
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
});
