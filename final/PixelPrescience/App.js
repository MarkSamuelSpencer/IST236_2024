import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Colors from "./constants/colors";
import FavoritesScreen from "./screens/FavoritesScreen";
import MorningScreen from "./screens/MorningScreen";
import SleepScreen from "./screens/SleepScreen";
import FocusScreen from "./screens/FocusScreen";
import HomeScreen from "./screens/Homescreen";
import MeditationPlayerScreen from "./screens/MeditationPlayerScreen";

import { Entypo, Feather } from "@expo/vector-icons";
import { useCallback } from "react";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();

function DrawerNavigator() {
  // Drawer navigation
  return (
    <Drawer.Navigator
      initialRouteName="MeditationItems"
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        headerTitleStyle: {
          fontFamily: "rainyhearts",
          fontSize: 40,
          color: Colors.accent800,
        },
        sceneContainerStyle: {
          backgroundColor: Colors.accent800,
        },
        drawerContentStyle: { backgroundColor: Colors.primary500 },
        drawerInactiveTintColor: Colors.primary300,
        drawerActiveTintColor: Colors.accent500,
        drawerActiveBackgroundColor: Colors.primary800,
      }}
    >
      <Drawer.Screen
        name="MeditationItems"
        component={TabsNavigator}
        options={{
          title: "Meditations",
          drawerLabel: "Meditations",
          drawerIcon: ({ color, size }) => (
            <Entypo name="list" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: "Favorites",
          drawerLabel: "Favorites",
          drawerIcon: ({ color, size }) => (
            <Entypo name="bookmark" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

function TabsNavigator() {
  // Bottom tab navigation
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveBackgroundColor: Colors.primary800,
        tabBarActiveTintColor: Colors.accent500,
        tabBarInactiveBackgroundColor: Colors.primary500,
        tabBarInactiveTintColor: Colors.primary300,
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "rainyhearts",
        },
        tabBarStyle: {
          backgroundColor: Colors.primary500,
        },
      }}
    >
      <Tabs.Screen
        name="Morning"
        component={MorningScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="sun" size={size} color={color} />
          ),
          tabBarLabel: "Morning",
        }}
      />
      <Tabs.Screen
        name="Sleep"
        component={SleepScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="moon" size={size} color={color} />
          ),
          tabBarLabel: "Sleep",
        }}
      />
      <Tabs.Screen
        name="Focus"
        component={FocusScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="magnifying-glass" size={size} color={color} />
          ),
          tabBarLabel: "Focus",
        }}
      />
    </Tabs.Navigator>
  );
}

// main app component
export default function App() {
  // load and wait for fonts
  const [fontsLoaded, fontError] = useFonts({
    rainyhearts: require("./assets/fonts/rainyhearts.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  });

  if (!fontsLoaded && !fontError) {
    return null;
  } else {
    return (
      <>
        <StatusBar style="auto" />
        <Provider store={store}>
          {/* initialize NavigationContainer */}

          <NavigationContainer>
            {/* define stack navigation */}
            <Stack.Navigator
              initialRouteName="HomeScreen"
              screenOptions={{
                headerTintColor: Colors.primary300,
                headerStyle: { backgroundColor: Colors.primary500 },
                contentStyle: { backgroundColor: "white" },
              }}
            >
              <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="DrawerScreen"
                component={DrawerNavigator}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="MeditationPlayer"
                component={MeditationPlayerScreen}
                options={{
                  headerBackTitleVisible: false,
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
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
