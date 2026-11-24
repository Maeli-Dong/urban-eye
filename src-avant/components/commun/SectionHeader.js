import { Pressable, StyleSheet, Text, View } from 'react-native';

// En-tête de section réutilisable : petit label, grand titre, lien.
const SectionHeader = ({ label, title, linkText }) => {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
      <Pressable
        onPress={() => {}}
        style={({ pressed }) => [styles.link, pressed && styles.pressed]}
      >
        <Text style={styles.linkText}>{linkText}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'flex-start',
    gap: 16,
    marginBottom: 32,
  },
  label: {
    marginBottom: 12,
    color: '#6b6b6b',
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 4,
  },
  title: {
    color: '#121212',
    fontSize: 56,
    fontWeight: '900',
    lineHeight: 56,
    textTransform: 'uppercase',
  },
  link: {
    paddingBottom: 4,
    borderBottomWidth: 2,
    borderBottomColor: '#ff3d1f',
  },
  linkText: {
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

export default SectionHeader;
