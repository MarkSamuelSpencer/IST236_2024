import { StyleSheet, Text, Pressable, View } from "react-native";
import Colors from "../constants/colors";

function NavButton(props) {
    return (
      <Pressable 
      onPress={props.onNext}
      style={({ pressed}) => pressed && styles.pressedItem}
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
          height: 85,
          width: 160,
          margin: 8,
          borderRadius: 12,
          backgroundColor: Colors.accent800,
      },
      pressedItem: {
          opacity: 0.8,
      },
      text: {
          padding: 5,
          fontSize: 25,
          textAlign: "center",
          color: Colors.primary300,
          fontFamily: "IndieFlower"
      },
  });