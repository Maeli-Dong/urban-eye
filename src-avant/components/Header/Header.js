// EXEMPLE FOURNI : l'en-tête de M. Jamoulle, traduit en React Native.
// Même découpage, mêmes données, mêmes props : seules les balises et le style changent.
import { StyleSheet, View } from 'react-native';
import { siteInfo, navLinks } from '../../data';
import Logo from './Logo';
import MainNav from './MainNav';

const Header = () => {
  return (
    <View style={styles.header}>
      {/* Les données viennent de data.js et sont passées aux enfants par les props */}
      <Logo icon={siteInfo.logo.icon} text={siteInfo.logo.text} />
      <MainNav links={navLinks} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    gap: 16,
    paddingVertical: 18,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#121212',
  },
});

export default Header;
