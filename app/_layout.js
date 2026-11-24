import { Stack } from 'expo-router';

// Le cadre de tous les écrans : une pile (Stack). Un écran ouvert se pose
// sur le précédent ; le bouton retour le retire.
export default function Layout() {
  return <Stack />;
}
