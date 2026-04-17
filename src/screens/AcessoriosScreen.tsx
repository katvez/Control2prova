import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

export default function AcessoriosScreen() {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.title}>ACESSÓRIOS</Text>
        <Text style={styles.subtitle}>dark • underground • expression</Text>
      </View>

      {/* IMAGENS EM LINHA COM PREÇO ABAIXO */}
      <View style={styles.row}>

        <View style={styles.item}>
          <Image
            source={{ uri: "https://i.pinimg.com/736x/6e/bf/5e/6ebf5efcca789fc61066ced9cd6f8519.jpg" }}
            style={styles.image}
          />
          <Text style={styles.price}>R$ 49,90</Text>
        </View>

        <View style={styles.item}>
          <Image
            source={{ uri: "https://i.pinimg.com/736x/4b/21/b9/4b21b964cab33c7e57b718d14cad5015.jpg" }}
            style={styles.image}
          />
          <Text style={styles.price}>R$ 59,90</Text>
        </View>

        <View style={styles.item}>
          <Image
            source={{ uri: "https://i.pinimg.com/736x/91/93/af/9193afdf6e4d68dcea61192ee61e0544.jpg" }}
            style={styles.image}
          />
          <Text style={styles.price}>R$ 90,00</Text>
        </View>

        <View style={styles.item}>
          <Image
            source={{ uri: "https://i.pinimg.com/736x/9d/c4/0c/9dc40cdb1885f7c34c7c6cb84a44bdcc.jpg" }}
            style={styles.image}
          />
          <Text style={styles.price}>R$ 69,90</Text>
        </View>

        <View style={styles.item}>
          <Image
            source={{ uri: "https://i.pinimg.com/736x/27/db/0a/27db0a76021dfdebecf8a7ee197ea21a.jpg" }}
            style={styles.image}
          />
          <Text style={styles.price}>R$ 30,90</Text>
        </View>

        <View style={styles.item}>
          <Image
            source={{ uri: "https://i.pinimg.com/736x/37/ee/0a/37ee0ac633219e43419bbfea2830d2b0.jpg" }}
            style={styles.image}
          />
          <Text style={styles.price}>R$ 89,90</Text>
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