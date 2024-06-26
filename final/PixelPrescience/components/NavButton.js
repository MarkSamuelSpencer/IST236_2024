import { StyleSheet, Text, Pressable, View } from "react-native";
import Colors from "../constants/colors";

// create navbutton for homescreen
function NavButton(props) {
  return (
    <Pressable
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
    backgroundColor: Colors.primary800,
    borderColor: Colors.primary300,
    borderWidth: 3,
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
    fontSize: 45,
    fontFamily: "rainyhearts",
    textAlign: "center",
    color: Colors.primary300,

  },
});
