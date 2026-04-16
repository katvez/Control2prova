import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "../screens/HomeScreen";
import EntidadesScreen from "../screens/CamisetasScreen";
import ContasPagarScreen from "../screens/CalcasScreen";
import ContasReceberScreen from "../screens/SapatosScreen";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        // 🔝 Header (topo)
        headerStyle: {
          backgroundColor: "#0a0a0a",
        },
        headerTintColor: "#a020f0",
        headerTitleStyle: {
          fontWeight: "bold",
          letterSpacing: 2,
        },

        // 📱 Drawer (menu lateral)
        drawerStyle: {
          backgroundColor: "#0a0a0a",
        },

        drawerActiveBackgroundColor: "#1a1a1a",
        drawerActiveTintColor: "#a020f0",
        drawerInactiveTintColor: "#888",

        drawerLabelStyle: {
          fontSize: 15,
          letterSpacing: 1,
        },

        // Overlay escuro quando abre
        overlayColor: "rgba(0,0,0,0.8)",
      }}
    >

      <Drawer.Screen name="Home" component={HomeScreen} />

      <Drawer.Screen name="Camisetas" component={EntidadesScreen} />

      <Drawer.Screen name="Calças" component={ContasPagarScreen} />

      <Drawer.Screen name="Sapatos" component={ContasReceberScreen} />
      
    </Drawer.Navigator>
  );
}