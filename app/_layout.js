import { Stack } from 'expo-router';
import { couleurs, polices } from '../src/theme';

// Le cadre de tous les écrans : une pile (Stack).
// screenOptions règle la barre de navigation de TOUS les écrans,
// avec les valeurs de theme.js : aucune couleur en dur ici non plus.
export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: couleurs.fond },
        headerTintColor: couleurs.texte,
        headerTitleStyle: { fontFamily: polices.titre },
        headerShadowVisible: false,
        headerBackTitle: 'Captures',
      }}
    >
      {/* La grille est dans le groupe d'onglets et a déjà son en-tête (EnTete) : pas de barre au-dessus */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
