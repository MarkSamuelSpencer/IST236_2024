import { View, StyleSheet, ImageBackground, useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from "../constants/colors";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import { useNavigation } from '@react-navigation/native';

// HomeScreen component
function HomeScreen(props) {
  // get safe area insets and navigation object
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  // navigate to DrawerScreen
  function onNext() {
    navigation.navigate('DrawerScreen');
  }

  // get window dimensions
  const { width, height} = useWindowDimensions();

  // render HomeScreen
  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      resize="stretch"
      style={styles.rootContainer}
      imageStyle={styles.backgroundImage}
    >
      <View
        style={[
          styles.rootContainer,
          {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
          },
        ]}
        supportedOrientations={["portrait", "landscape"]}
      >
        {/* Title */}
        <View style={styles.titleContainer}>
          <Title>Pixel Prescience </Title>
        </View>

        {/* Navigation Button */}
        <View style={styles.navButtonContainer}>
          <NavButton onPress={onNext}>Start Now</NavButton>
        </View>
      </View>
    </ImageBackground>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    color: Colors.accent200o10
  },
  backgroundImage: {
    opacity: 0.55
  },
  titleContainer: {
    marginBottom: 10,
    backgroundColor: Colors.accent200o10,
    paddingHorizontal: 30,
    marginTop: 100,
    paddingVertical: 5,
    flex: 2,
  },
  navButtonContainer: {
    flex: 2,
    alignItems: "center",
  },
});
