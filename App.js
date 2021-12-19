import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { Text } from "react-native";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { AppSafeArea } from "./src/components/utility/safe-area.component";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  // if (!oswaldLoaded || latoLoaded) {
  //   return null;
  // }

  const SettingsScreen = () => (
    <AppSafeArea>
      <Text>Settings Tab</Text>
    </AppSafeArea>
  );
  const MapScreen = () => (
    <AppSafeArea>
      <Text>Map Tab</Text>
    </AppSafeArea>
  );

  const Tab = createBottomTabNavigator();

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "Restaurant") {
                  iconName = "md-restaurant";
                } else if (route.name === "Settings") {
                  iconName = "md-settings";
                } else if (route.name === "MapScreen") {
                  iconName = "md-map";
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: "tomato",
              tabBarInactiveTintColor: "gray",
            })}
          >
            <Tab.Screen name="Restaurant" component={RestaurantsScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
            <Tab.Screen name="MapScreen" component={MapScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
