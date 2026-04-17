import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";

export default function HomeScreen({ navigation }: any) {
  return (
    <ScrollView style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.logo}>VOID</Text>
        <Text style={styles.subtitle}>alt • gothic • emo</Text>

        {/* LOGO REAL FUNCIONANDO */}
        <Image 
          source={require("../../assets/voidlogo.png")}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>

      {/* HERO */}
      <View style={styles.hero}>
        <Text style={styles.heroBadge}>NOVA COLEÇÃO</Text>

        <Text style={styles.heroTitle}>
          SE EXPRESSE{"\n"}COM MODA ALTERNATIVA
        </Text>

        <Text style={styles.heroText}>
          Roupas que não seguem padrões.{"\n"}
          Criadas para quem não quer se encaixar.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Camisetas/Blusas")}
        >
          <Text style={styles.buttonText}>Explorar coleção</Text>
        </TouchableOpacity>
      </View>

      {/* ESTILOS */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Nosso estilo</Text>

        <View style={styles.cards}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>GÓTICO</Text>
            <Text style={styles.cardText}>escuro • intenso</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>EMO</Text>
            <Text style={styles.cardText}>emoção • expressão</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>ALT</Text>
            <Text style={styles.cardText}>livre • urbano</Text>
          </View>
        </View>
      </View>

      {/* FOOTER */}
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
    fontSize: 40,
    fontWeight: "bold",
    letterSpacing: 6,
  },

  subtitle: {
    color: "#777",
    marginTop: 5,
  },

  logoImage: {
    width: 80,
    height: 80,
    position: "absolute",
    top: 20,
    right: 20,
  },

  hero: {
    padding: 25,
    alignItems: "center",
  },

  heroBadge: {
    color: "#a020f0",
    borderWidth: 1,
    borderColor: "#a020f0",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    fontSize: 12,
    marginBottom: 15,
  },

  heroTitle: {
    color: "#fff",
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    letterSpacing: 1,
  },

  heroText: {
    color: "#aaa",
    marginTop: 12,
    textAlign: "center",
    fontSize: 14,
    lineHeight: 20,
  },

  button: {
    marginTop: 25,
    backgroundColor: "#a020f0",
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 30,
    shadowColor: "#a020f0",
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    letterSpacing: 1,
  },

  section: {
    marginTop: 30,
    paddingHorizontal: 20,
  },

  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 15,
    fontWeight: "bold",
  },

  cards: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  card: {
    backgroundColor: "#141414",
    padding: 18,
    borderRadius: 12,
    width: "30%",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#222",
  },

  cardTitle: {
    color: "#a020f0",
    fontWeight: "bold",
    marginBottom: 5,
  },

  cardText: {
    color: "#aaa",
    fontSize: 12,
    textAlign: "center",
  },

  footer: {
    marginTop: 50,
    padding: 30,
    alignItems: "center",
  },

  footerText: {
    color: "#a020f0",
    fontStyle: "italic",
    letterSpacing: 1,
  },
});