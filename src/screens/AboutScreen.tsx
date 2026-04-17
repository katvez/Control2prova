import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from "react-native";

export default function AboutScreen() {

  const openWhatsApp = () => {
    Linking.openURL("https://wa.me/5599999999999"); // TROQUE PELO SEU NÚMERO
  };

  const openInstagram = () => {
    Linking.openURL("https://instagram.com"); // TROQUE PELO SEU @
  };

  return (
    <ScrollView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>VOID</Text>
        <Text style={styles.subtitle}>alt • gothic • emo</Text>
      </View>

      {/* Conteúdo */}
      <View style={styles.content}>
    

        <Text style={styles.text}>
      A VOID não segue tendências — ela nasce da recusa de segui-las.

Somos uma loja de moda alternativa feita para quem encontra identidade no que foge do comum. Aqui, o estilo gótico, emo e underground não são apenas referências visuais, mas formas de expressão pessoal, emoção e atitude.

Acreditamos que vestir-se é mais do que aparência: é linguagem. É uma forma silenciosa — e ao mesmo tempo intensa — de dizer ao mundo quem você é, sem precisar se explicar.

Cada peça da VOID carrega um fragmento dessa ideia. Não buscamos perfeição, buscamos presença. O escuro não é ausência de luz, é profundidade. O diferente não é erro, é identidade.

Criamos para quem nunca se encaixou, para quem transformou o próprio contraste em força, e para quem entende que autenticidade vale mais do que aprovação.

A VOID é um espaço para existir sem moldes.
        </Text>
      </View>

      {/* CONTATO */}
      <View style={styles.contact}>
        <Text style={styles.contactTitle}>Contato</Text>

        <TouchableOpacity style={styles.button} onPress={openWhatsApp}>
          <Text style={styles.buttonText}>WhatsApp</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonOutline} onPress={openInstagram}>
          <Text style={styles.buttonOutlineText}>Instagram</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
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
    flex: 1,
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

  content: {
    paddingHorizontal: 25,
  },

  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },

  text: {
    color: "#aaa",
    fontSize: 15,
    lineHeight: 22,
    textAlign: "center",
  },

  contact: {
    marginTop: 40,
    paddingHorizontal: 25,
  },

  contactTitle: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 15,
    textAlign: "center",
  },

  button: {
    backgroundColor: "#a020f0",
    padding: 14,
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 10,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  buttonOutline: {
    borderWidth: 1,
    borderColor: "#a020f0",
    padding: 14,
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 10,
  },

  buttonOutlineText: {
    color: "#a020f0",
    fontWeight: "bold",
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