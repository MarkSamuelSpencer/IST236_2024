import { Ionicons } from '@expo/vector-icons';
import { Pressable } from "react-native";
import Colors from "../constants/colors";

// FavoriteButton component
function FavoriteButton(props) {
  // render bookmark icon based on pressed state
  if (props.pressed) {
    return (
      <Pressable onPress={props.onPress}>
        <Ionicons name="bookmark" size={30} color={Colors.accent500} />
      </Pressable>
    );
  } else {
    return (
      <Pressable onPress={props.onPress}>
        <Ionicons name="bookmark-outline" size={30} color={Colors.accent500} />
      </Pressable>
    );
  }
}

export default FavoriteButton;
