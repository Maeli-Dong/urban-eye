import { StyleSheet, Text } from 'react-native';

// La pastille affiche ce qu'on place entre ses balises : children.
// couleur : le fond ; encre : le texte. Par défaut, le rouge et le blanc de la maquette.
// Toute View est déjà en position relative : pas besoin de le dire au parent.
const Badge = ({ children, couleur = '#ff3d1f', encre = '#ffffff' }) => {
  // Dans un tableau de styles, le dernier l'emporte
  return (
    <Text style={[styles.badge, { backgroundColor: couleur, color: encre }]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    top: 0,
    left: 0,
    paddingVertical: 6,
    paddingHorizontal: 10,
    fontSize: 10,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});

export default Badge;
