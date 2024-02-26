import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState, useMemo } from "react";

import Colors from "./constants/colors";
import HomeScreen from "./Screens/HomeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import OrderReviewScreen from "./Screens/OrderReviewScreen";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useCallback } from "react";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    font: require("./assets/fonts/TitilliumWeb-Light.ttf"),
    boldfont: require("./assets/fonts/TitilliumWeb-SemiBoldItalic.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  const [currentScreen, setCurrentScreen] = useState("");
  const [currentPrice, setCurrentPrice] = useState(0);

  const repairTimeRadioButtons = useMemo(
    () => [
      {
        id: "0",
        label: "Standard",
        value: "Standard",
        price: 0,
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
      {
        id: "1",
        label: "Expedited",
        value: "Expedited",
        price: 50,
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
      {
        id: "2",
        label: "Next Day",
        value: "Next Day",
        price: 100,
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
    ],
    []
  );

  const [repairTimeId, setRepairTimeId] = useState(0);
  const [services, setServices] = useState([
    { id: 0, name: "Basic Tune-Up", value: false, price: 50 },
    { id: 1, name: "Comprehensive Tune-Up", value: false, price: 75 },
    { id: 2, name: "Flat Tire Repair", value: false, price: 20 },
    { id: 3, name: "Brake Servicing", value: false, price: 50 },
    { id: 4, name: "Gear Servicing", value: false, price: 40 },
    { id: 5, name: "Chain Servicing", value: false, price: 15 },
    { id: 6, name: "Frame Repair", value: false, price: 35 },
    { id: 7, name: "Safety Check", value: false, price: 25 },
    { id: 8, name: "Accessory Install", value: false, price: 10 },
  ]);

  const [newsletter, setNewsletter] = useState(false);
  const [rentalMembership, setRentalMembership] = useState(false);

  function setServicesHandler(id) {
    setServices((prevServices) =>
      prevServices.map((item) =>
        item.id === id ? { ...item, value: !item.value } : item
      )
    );
  }

  function setNewsletterHandler(id) {
    setNewsletter((previous) => !previous);
  }

  function setRentalMembershipHandler(id) {
    setRentalMembership((previous) => !previous);
  }
  
  function homeScreenHandler() {
    resetChoices();
    setCurrentPrice(0);
    setCurrentScreen("home");
  }

  function orderReviewHandler() {
    let price = 0;
    for (let i = 0; i < services.length; i++){
      if(services[i].value){
        price = price + services[i].price
      }
    }

    if (rentalMembership) {
      price = price + 100
    }

    price = price + repairTimeRadioButtons[repairTimeId].price

    setCurrentPrice(price);
    setCurrentScreen("review")
  }

  let screen = (
    <HomeScreen
    repairTimeId={repairTimeId}
    services={services}
    newsletter={newsletter}
    rentalMembership={rentalMembership}
    onSetNewsletter={setNewsletter}
    onSetRentalMembership={setRentalMembershipHandler}
    onSetRepairTimeId={setRepairTimeId}
    onSetServices={setServicesHandler}
    onNext={orderReviewHandler}
    repairTimeRadioButtons={repairTimeRadioButtons}
    
    />
  )

  if (currentScreen == "review") {
    screen = (
      <OrderReviewScreen
      repairTime={repairTimeRadioButtons[repairTimeId].value}
      services={services}
      newsletter={newsletter}
      rentalMembership={rentalMembership}
      price={currentPrice}
      onNext={homeScreenHandler}
      />
    )
  }
  function resetChoices() {
    setRepairTimeId(0);
    setServices((prevServices) =>
      prevServices.map((item) => ({ ...item, value: false }))
    );
    setNewsletter(false);
    setRentalMembership(false);
  };

  if (!fontsLoaded && !fontError) {
    return null;
  } else {
    return (
      <>
        <StatusBar style="auto" />
        <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
      </>
    )
  }
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  titleContainer: {
    marginBottom: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: Colors.primary500,
    paddingHorizontal: 30,
    paddingVertical: 5,
  },
  scrollContainer: {
    flex: 1,
  },
  radioContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  radioHeader: {
    fontSize: 30,
    fontFamily: "font",
    color: Colors.primary500,
  },
  radioGroup: {
    paddingBottom: 20,
  },
  radioGroupLabels: {
    fontSize: 15,
    fontFamily: "font",
    color: Colors.primary500,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingBottom: 20,
  },
  checkBoxContainer: {},
  checkboxHeader: {
    fontSize: 20,
    fontFamily: "font",
    color: Colors.primary500,
  },
  checkBoxSubContainer: {
    padding: 2,
  },
  cheeseContainer: {
    alignItems: "center",
  },
  addOnsContainer: {
    justifyContent: "space-between",
  },
  addOnsSubContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addOnsLabel: {
    color: Colors.primary500,
    fontSize: 20,
    fontFamily: "font",
  },
  buttonContainer: {
    alignItems: "center",
  },
});
