import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useState } from 'react';
import HomeScreen from './screens/HomeScreen';
import Title from './components/Title';
import Colors from './constants/colors';
import MenuScreen from './screens/MenuScreen'
import { useFonts } from 'expo-font';

export default function App() {
  // set up our custom fonts
  const [fontsLoaded] = useFonts({
    "merienda": require("./assets/fonts/Merienda-VariableFont_wght.ttf"),
  })

  // set state variable for the current screen
  const [currentScreen, setCurrentScreen] = useState("home");

  // function to change screen
  function menuScreenHandler() {
    setCurrentScreen("menu")
  }

  function homeScreenHandler() {
    setCurrentScreen("home")
  }

  // determine which screen to be on
  let screen = <HomeScreen onNext={menuScreenHandler}/>;

  if (currentScreen === "menu"){
    screen = <MenuScreen onNext={homeScreenHandler}/>;
  }

  return (
    <>
      <StatusBar style = 'auto' />
      <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent500,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
