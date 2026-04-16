import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>

      {/* Logo / Marca */}
      <View style={styles.header}>
        <Text style={styles.logo}>VOID</Text>
        <Text style={styles.subtitle}>alt • gothic • emo</Text>
      </View>

      {/* Hero Section */}
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>
            SE EXPRESSE COM MODA
        </Text>

        <Text style={styles.heroText}>
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Explorar coleção</Text>
        </TouchableOpacity>
      </View>

      {/* Seções de estilo */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Nosso estilo</Text>

        <View style={styles.cards}>
          <View style={styles.card}>
            <Text style={styles.cardText}>Gótico</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardText}>Emo</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardText}>Alt</Text>
          </View>
        </View>
      </View>

      {/* Frase final */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Vista-se como quiser.
        </Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0a0a0a",
  },

  header: {
    alignItems: "center",
    padding: 30,
  },

  logo: {
    color: "#a020f0",
    fontSize: 36,
    fontWeight: "bold",
    letterSpacing: 4,
  },

  subtitle: {
    color: "#777",
    marginTop: 5,
  },

  hero: {
    padding: 25,
    alignItems: "center",
  },

  heroTitle: {
    color: "#fff",
    fontSize: 28,
    textAlign: "center",
    fontWeight: "bold",
  },

  heroText: {
    color: "#aaa",
    marginTop: 10,
    textAlign: "center",
  },

  button: {
    marginTop: 20,
    backgroundColor: "#a020f0",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  section: {
    marginTop: 30,
    paddingHorizontal: 20,
  },

  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 15,
  },

  cards: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  card: {
    backgroundColor: "#1a1a1a",
    padding: 20,
    borderRadius: 10,
    width: "30%",
    alignItems: "center",
  },

  cardText: {
    color: "#fff",
  },

  footer: {
    marginTop: 40,
    padding: 30,
    alignItems: "center",
  },

  footerText: {
    color: "#a020f0",
    fontStyle: "italic",
  },
});