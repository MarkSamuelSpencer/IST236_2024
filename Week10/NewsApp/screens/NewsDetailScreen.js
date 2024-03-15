import { View, Text, StyleSheet, Image } from "react-native";
import { useState, useLayoutEffect } from "react";
import { NEWS } from "../data/dummy_data";
import BookmarkButton from "../components/BookmarkButton";
import Colors from "../constants/colors";

function NewsDetailScreen(props) {
  const newsId = props.route.params.newsId;
  const selectedNews = NEWS.find((news) => news.id === newsId);

  const [pressed, setPressed] = useState(false);

  function headerButtonPressHandler() {
    setPressed(!pressed);
  }

  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: "",
      headerRight: () => {
        return (
          <BookmarkButton
            pressed={pressed}
            onPress={headerButtonPressHandler}
          />
        );
      },
    });
  }, [props.navigation, headerButtonPressHandler]);

  return (
    <View style={styles.rootContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: selectedNews.imageUrl }}
        />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.title}>
          {selectedNews.title}
        </Text>
        <Text style={styles.date}>
          {selectedNews.date}
        </Text>
        <Text style={styles.author}>
          By {selectedNews.author}
        </Text>
        <Text style={styles.source}>
          Source: {selectedNews.source}
        </Text>

        <Text style={styles.description}>
          {selectedNews.description}
        </Text>
      </View>
    </View>
  );
}
export default NewsDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  imageContainer: {
    marginVertical: 10,
    height: 300,
  },
  image: {
    height: "100%",
    resizeMode: "cover",
    borderRadius: 7,
  },
  infoContainer: {
    borderRadius: 7,
    backgroundColor: Colors.primary500o8,
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  title: {
    color: Colors.primary300,
    fontSize: 25,
    fontFamily: "playfairBold",
    paddingBottom: 5,
  },
  date: {
    color: Colors.primary300,
    fontSize: 18,
    fontFamily: "playfair",
    paddingBottom: 5,
  },
  author: {
    color: Colors.primary300,
    fontSize: 18,
    fontFamily: "playfair",
    paddingBottom: 5,
  },
  source: {
    color: Colors.primary300,
    fontSize: 18,
    fontFamily: "playfair",
    paddingBottom: 5,
  },
  description: {
    color: Colors.primary300,
    width: "100%",
    textAlign: "justify",
    fontSize: 15,
    fontFamily: "playfair",
  }
});
