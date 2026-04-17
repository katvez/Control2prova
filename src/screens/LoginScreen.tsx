import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function LoginScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      
      <View style={styles.center}>
        
        {/* Logo / Marca */}
        <Text style={styles.logo}>VOID</Text>
        <Text style={styles.subtitle}>alt • gothic • emo</Text>

        {/* Inputs */}
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

        {/* Botão */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        {/* Link cadastro */}
        <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
          <Text style={styles.link}>
            Não tem uma conta? Criar conta
          </Text>
        </TouchableOpacity>

      </View>

      {/* Sobre */}
      <TouchableOpacity
        style={styles.aboutButton}
        onPress={() => navigation.navigate("Sobre")}
      >
        <Text style={styles.aboutText}>Sobre o aplicativo</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0a0a",
    padding: 20,
  },

  center: {
    flex: 1,
    justifyContent: "center",
  },

  logo: {
    color: "#a020f0",
    fontSize: 36,
    fontWeight: "bold",
    letterSpacing: 4,
    textAlign: "center",
  },

  subtitle: {
    color: "#777",
    textAlign: "center",
    marginBottom: 30,
    marginTop: 5,
  },

  input: {
    backgroundColor: "#1a1a1a",
    color: "#fff",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
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

  aboutButton: {
    alignItems: "center",
    marginBottom: 20,
  },

  aboutText: {
    color: "#777",
    fontSize: 14,
  },
});