import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../constants/colors";

function MeditationItem(props) {
  const navigation = useNavigation();

  function selectedMeditationHandler() {
    navigation.navigate("MeditationPlayer", {
      meditationId: props.id,
    });
  }
  return (
    <View
      style={[
        styles.itemContainer,
        { backgroundColor: props.listIndex % 2 == 0 ? "#ccc" : "#fff" },
      ]}
    >
      <Pressable onPress={selectedMeditationHandler}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default MeditationItem;

const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 5,
    paddingTop: 5,
    marginBottom: 10,
    borderRadius: 7,
  },
  imageContainer: {
    height: 300,
  },
  image: {
    height: "100%",
    resizeMode: "cover",
    borderRadius: 7,
  },
  infoContainer: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  title: {
    color: Colors.primary800,
    fontSize: 25,
    fontFamily: "rainyhearts",
    paddingBottom: 5,
  },
  data: {
    textAlign: "center",
    width: "100%",
    fontSize: 15,
    fontFamily: "rainyhearts",
    paddingBottom: 5,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
  },
});
