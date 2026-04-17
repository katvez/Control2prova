import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

export default function CalcasScreenScreen() {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.title}>CALÇAS / SHORTS</Text>
        <Text style={styles.subtitle}>dark • underground • expression</Text>
      </View>

      {/* ROW COM PREÇO EMBAIXO */}
      <View style={styles.row}>

        <View style={styles.item}>
          <Image
            source={{ uri: "https://i.pinimg.com/1200x/a0/0f/20/a00f2031b63611ab24e4486ab86c39e0.jpg" }}
            style={styles.image}
          />
          <Text style={styles.price}>R$ 89,90</Text>
        </View>

        <View style={styles.item}>
          <Image
            source={{ uri: "https://i.pinimg.com/736x/16/74/53/1674530584ab761db1b492cd90ccb97d.jpg" }}
            style={styles.image}
          />
          <Text style={styles.price}>R$ 100,00</Text>
        </View>

        <View style={styles.item}>
          <Image
            source={{ uri: "https://i.pinimg.com/736x/63/78/31/63783127694da672fe617058869ee24d.jpg" }}
            style={styles.image}
          />
          <Text style={styles.price}>R$ 100,00</Text>
        </View>

        <View style={styles.item}>
          <Image
            source={{ uri: "https://i.pinimg.com/736x/b5/17/b5/b517b5f67096f8daeb1f0a001112282f.jpg" }}
            style={styles.image}
          />
          <Text style={styles.price}>R$110,90</Text>
        </View>

        <View style={styles.item}>
          <Image
            source={{ uri: "https://i.pinimg.com/736x/55/8d/3d/558d3d926da3ee7e9625ed73d0bb5bab.jpg" }}
            style={styles.image}
          />
          <Text style={styles.price}>R$ 109,90</Text>
        </View>

        <View style={styles.item}>
          <Image
            source={{ uri: "https://i.pinimg.com/736x/1e/38/3f/1e383f79b1c71139ae768e706cc06c2e.jpg" }}
            style={styles.image}
          />
          <Text style={styles.price}>R$ 119,90</Text>
        </View>

        
        <View style={styles.item}>
          <Image
            source={{ uri: "https://i.pinimg.com/1200x/f0/2b/7f/f02b7fbd879121ea047b7eceae377a27.jpg" }}
            style={styles.image}
          />
          <Text style={styles.price}>R$ 80,90</Text>
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