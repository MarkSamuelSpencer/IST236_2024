import { Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

function Title(props) {
    return <Text style={styles.title}>{props.children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
    title: {
    fontSize: 50,
    color: Colors.primary300,
    textShadowColor: Colors.accent800,
    textShadowRadius: 25,
    fontFamily: "IndieFlower",
    textAlign: "center",
    },
})