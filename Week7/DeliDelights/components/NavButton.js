import { StyleSheet, Text, Pressable, View } from "react-native";
import Colors from "../constants/colors";

function NavButton(props) {
  return (
    <Pressable
      android_ripple={{ color: Colors.primary500 }}
      onPress={props.onPress}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.buttonContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{props.children}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default NavButton;

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary500,
    width: 300,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 300,
  },
  pressedItem: {
    opacity: 0.8,
  },
  text: {
    padding: 8,
    fontSize: 25,
    fontFamily: "font",
    textAlign: "center",
    color: Colors.accent500,
    overflow: "hidden"
  },
});
