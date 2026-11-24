import { Tabs } from 'expo-router/tabs';
import { couleurs } from '../../src/theme';

// Bonus : deux onglets en bas de l'écran. Le dossier (tabs) est entre
// parenthèses : il groupe des écrans sans apparaître dans l'adresse.
export default function LayoutOnglets() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: couleurs.accent,
        tabBarInactiveTintColor: couleurs.texteDoux,
        tabBarStyle: { backgroundColor: couleurs.surface },
      }}
    >
      <Tabs.Screen name="index" options={{ title: 'Captures' }} />
      <Tabs.Screen name="a-propos" options={{ title: 'À propos' }} />
    </Tabs>
  );
}
