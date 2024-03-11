import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import CountryOverviewScreen from "./screens/CountryOverviewScreen"
import Colors from "./constants/colors";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    hotel: require("./assets/fonts/TheHotelio.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);
  if (!fontsLoaded && !fontError) {
    return null;
  } else {
    return (
      <>
        <StatusBar style="light" />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
              headerStyle: {backgroundColor: Colors.primary500},
              headerTintColor: Colors.primary300,
              headerTitleStyle: {fontFamily: "hotel", fontSize: 40},
              contentStyle: {backgroundColor: Colors.primary800},
            }}
          
          >
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                title: "Country Locations",
              }}
            />
            <Stack.Screen 
              name="CountryOverviewScreen"
              component={CountryOverviewScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
