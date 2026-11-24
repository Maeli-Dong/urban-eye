import { Pressable, StyleSheet, Text, View } from 'react-native';

// .map() crée un lien par élément de la liste ;
// chaque élément reçoit une key unique (ici le href, différent pour chaque lien)
const MainNav = ({ links }) => {
  return (
    <View style={styles.nav}>
      {links.map(link => (
        <Pressable
          key={link.href}
          // onPress : ce que fait le lien. Rien pour l'instant : un seul écran.
          onPress={() => {}}
          style={({ pressed }) => pressed && styles.pressed}
        >
          <Text style={styles.label}>{link.label}</Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    rowGap: 12,
    columnGap: 20,
  },
  label: {
    color: '#121212',
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  pressed: {
    opacity: 0.4,
  },
});

export default MainNav;
