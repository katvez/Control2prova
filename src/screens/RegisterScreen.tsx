import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

export default function RegisterScreen({ navigation }: any) {
  return (
    <ScrollView style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.logo}>VOID</Text>
        <Text style={styles.subtitle}>alt • gothic • emo</Text>
      </View>

      {/* FORM */}
      <View style={styles.form}>

        <Text style={styles.title}>Criar conta</Text>

        <TextInput
          placeholder="Nome"
          placeholderTextColor="#777"
          style={styles.input}
        />

        <TextInput
          placeholder="E-mail"
          placeholderTextColor="#777"
          style={styles.input}
        />

        <TextInput
          placeholder="Senha"
          placeholderTextColor="#777"
          secureTextEntry
          style={styles.input}
        />

        <TextInput
          placeholder="Confirmar senha"
          placeholderTextColor="#777"
          secureTextEntry
          style={styles.input}
        />

        {/* BOTÃO CADASTRO */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Criar conta</Text>
        </TouchableOpacity>

        {/* LINK LOGIN */}
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.link}>
            Já tem uma conta? Entrar
          </Text>
        </TouchableOpacity>

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

  form: {
    paddingHorizontal: 25,
    marginTop: 10,
  },

  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  input: {
    backgroundColor: "#1a1a1a",
    color: "#fff",
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#222",
  },

  button: {
    marginTop: 10,
    backgroundColor: "#a020f0",
    padding: 14,
    borderRadius: 25,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  link: {
    marginTop: 15,
    textAlign: "center",
    color: "#a020f0",
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