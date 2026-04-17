import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

export default function SapatosScreen() {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.title}>SAPATOS</Text>
        <Text style={styles.subtitle}>dark • underground • expression</Text>
      </View>

      {/* ROW COM PREÇO ABAIXO */}
      <View style={styles.row}>

        <View style={styles.item}>
          <Image
            source={{ uri: "https://i.pinimg.com/736x/50/38/90/5038908fb1c6093550763c8bbf625cab.jpg" }}
            style={styles.image}
          />
          <Text style={styles.price}>R$ 149,90</Text>
        </View>

        <View style={styles.item}>
          <Image
            source={{ uri: "https://i.pinimg.com/1200x/60/18/56/601856b55f9461996ddb20a8c24a8015.jpg" }}
            style={styles.image}
          />
          <Text style={styles.price}>R$ 199,90</Text>
        </View>

        <View style={styles.item}>
          <Image
            source={{ uri: "https://i.pinimg.com/736x/9b/00/8a/9b008ac59dd96a77bba9bcfe160e9e92.jpg" }}
            style={styles.image}
          />
          <Text style={styles.price}>R$ 179,90</Text>
        </View>

        <View style={styles.item}>
          <Image
            source={{ uri: "https://i.pinimg.com/736x/48/e4/00/48e40001ae07ee7b2708ea2b81649b21.jpg" }}
            style={styles.image}
          />
          <Text style={styles.price}>R$ 159,90</Text>
        </View>

        <View style={styles.item}>
          <Image
            source={{ uri: "https://i.pinimg.com/1200x/0d/0f/fa/0d0ffad3ac71238180e88d6f0c301a5e.jpg" }}
            style={styles.image}
          />
          <Text style={styles.price}>R$ 189,90</Text>
        </View>

        <View style={styles.item}>
          <Image
            source={{ uri: "https://i.pinimg.com/736x/27/12/7a/27127a4b0470feba28a71594b05f81dd.jpg" }}
            style={styles.image}
          />
          <Text style={styles.price}>R$ 209,90</Text>
        </View>

      </View>

      <View style={styles.section}>
        <Text style={styles.text}>Estilos Variados</Text>
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

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },

  item: {
    alignItems: "center",
  },

  image: {
    width: 150,
    height: 200,
  },

  price: {
    color: "#a020f0",
    marginTop: 6,
    fontWeight: "bold",
    fontSize: 12,
  },

  section: {
    padding: 20,
  },

  text: {
    color: "#aaa",
    textAlign: "center",
  },
});