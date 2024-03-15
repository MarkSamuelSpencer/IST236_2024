import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../constants/colors";

function NewsItem(props) {
  const navigation = useNavigation();

  function selectedNewsHandler() {
    navigation.navigate("NewsDetail", {
      newsId: props.id,
    });
  }

  return (
    <View
      style={[
        styles.itemContainer,
        { backgroundColor: props.listIndex % 2 == 0 ? "#ccc" : "#fff" },
      ]}
    >
      <Pressable onPress={selectedNewsHandler}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{props.title}</Text>
          
          <Text style={styles.data}>
            {props.date} | {props.source} | By {props.author}
          </Text>
          
        </View>
      </Pressable>
    </View>
  );
}

export default NewsItem;

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
    fontFamily: "playfairBold",
    paddingBottom: 5
  },
  data: {
    textAlign: "center",
    width: "100%",
    fontSize: 15,
    fontFamily: "playfair",
    paddingBottom: 5
  },
  description: {
    fontSize: 16,
    textAlign: "center",
  },
});


