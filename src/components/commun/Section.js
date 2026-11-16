import { StyleSheet, View } from 'react-native';
import SectionHeader from './SectionHeader';

// Une section : son en-tête, puis la grille des cartes qu'on place entre ses balises.
const Section = ({ label, title, linkText, children }) => {
  return (
    <View style={styles.section}>
      <SectionHeader label={label} title={title} linkText={linkText} />
      <View style={styles.grid}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingTop: 40,
    paddingHorizontal: 24,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 32,
  },
});

export default Section;