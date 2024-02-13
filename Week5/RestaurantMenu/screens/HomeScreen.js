import { View, StyleSheet, Text, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import Colors from "../constants/colors";

function HomeScreen(props) {
  // set safe area screen boundaries
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.rootContainer,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingRight: insets.right,
          paddingLeft: insets.left,
        },
      ]}
    >
      <View style={styles.titleContainer}>
        <Title style={styles.title}>Odori Japanese Steakhouse</Title>
      </View>

      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/images/odori.jpg")} />
      </View>

      <View style={styles.infoContainer}>
        <Text
        style={styles.infoText}
        onPress={() => Linking.openURL("tel:8436630630")}
        >
        843-663-0630</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text
        style={styles.infoText}
        onPress={() => Linking.openURL("https://maps.app.goo.gl/sEzHmohPzvMuN5Ux9")}
        >
        627 Main St{"\n"} North Myrtle Beach {"\n"} SC 29582</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text
        style={styles.infoText}
        onPress={() => Linking.openURL("https://www.odorijapanese.com/")}
        >
        www.odorijapanese.com</Text>
      </View>
      <View style={styles.buttonContainer}>
        <NavButton onPress={props.onNext}>View Menu</NavButton>
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  imageContainer: {
    flex: 2,
    paddingTop: 10
  },
  image: {
    resizeMode: "cover",
    height: "100%",
    width: 380,
    borderWidth: 3,
    borderRadius: 50
  },
  infoContainer: {
    flex: 1,
    justifyContent: "center",
  },
  infoText: {
    fontSize: 25,
    textAlign: "center",
    color: Colors.primary500,
    fontFamily: "merienda"
  },
  buttonContainer: {
    flex: 1,
  }
});

