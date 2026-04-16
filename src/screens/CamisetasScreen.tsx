import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

export default function EntidadesScreen() {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.title}>CAMISETAS</Text>
        <Text style={styles.subtitle}>dark • underground • expression</Text>
      </View>

   <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 20 }}>
  
  <Image
    source={{ uri: "https://i.pinimg.com/1200x/c7/2e/da/c72eda6314679aaa6a27885c9fb44da4.jpg" }}
    style={{
      width: 150,
      height: 200,
    }}
  />

  <Image
    source={{ uri: "https://i.pinimg.com/1200x/28/a2/9f/28a29f12313e6dc68488e839f3a0391a.jpg" }}
    style={{
      width: 150,
      height: 200,
    }}
  />

  <Image
    source={{ uri: "https://i.pinimg.com/736x/8a/92/8c/8a928c2667d0f9025e5c8f1b1cf13db3.jpg" }}
    style={{
      width: 150,
      height: 200,
    }}
  />

<Image
    source={{ uri: "https://i.pinimg.com/736x/8c/68/1a/8c681a75dd25ef212ca4bc17644f6030.jpg" }}
    style={{
      width: 150,
      height: 200,
    }}
  />

  <Image
    source={{ uri: "https://i.pinimg.com/736x/41/ac/5b/41ac5b89f330fb8b8aa06000da69d202.jpg" }}
    style={{
      width: 150,
      height: 200,
    }}
  />

    <Image
    source={{ uri: "https://i.pinimg.com/1200x/27/72/a5/2772a52226ec6732d5faf2244931a097.jpg" }}
    style={{
      width: 150,
      height: 200,
    }}
  />


</View>
      <View style={styles.section}>
        <Text style={styles.text}>
         Estilos Variados
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