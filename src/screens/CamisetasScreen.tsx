import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

export default function EntidadesScreen() {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.title}>CAMISETAS</Text>
        <Text style={styles.subtitle}>dark • underground • expression</Text>
      </View>

      {/* IMAGEM ONLINE (não dá erro) */}
      <Image
        source={{ uri: "https://i.pinimg.com/1200x/c7/2e/da/c72eda6314679aaa6a27885c9fb44da4.jpg" }}
        style={{
    width: 150,
    height: 200,
    alignSelf: "center", // proporção 3:4
  }}
      />

      <Image
        source={{ uri: "https://i.pinimg.com/1200x/28/a2/9f/28a29f12313e6dc68488e839f3a0391a.jpg" }}
        style={{
    width: 150,
    height: 200,
     alignSelf: "flex-start",
     marginTop: 0, // proporção 3:4
  }}
      />

      <View style={styles.section}>
        <Text style={styles.text}>
          Peças criadas para quem vive fora do padrão.
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
    padding: 25,
    alignItems: "center",
  },

  title: {
    color: "#a020f0",
    fontSize: 28,
    fontWeight: "bold",
  },

  subtitle: {
    color: "#777",
  },

  banner: {
    width: "100%",
    height: 180,
  },

  section: {
    padding: 20,
  },

  text: {
    color: "#aaa",
    textAlign: "center",
  },
});