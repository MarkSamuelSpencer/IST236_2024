import { View, Text } from "react-native";
import { useContext } from "react";
import { BookmarksContext } from "../store/context/bookmarks-context";
import NewsItem from "../components/List/NewsItem";
import { NEWS } from "../data/dummy_data";
import List from "../components/List/List";
import { StyleSheet } from "react-native";
import Colors from "../constants/colors";

function BookmarksScreen() {
  const bookmarkedArticlesCtx = useContext(BookmarksContext);
  const bookmarkedArticles = NEWS.filter((NewsItem) => {
    return bookmarkedArticlesCtx.ids.includes(NewsItem.id);
  });

  if (bookmarkedArticles.length === 0){
    return <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no saved articles yet!</Text>
    </View>
  }
  return <List items={bookmarkedArticles} />;
}

export default BookmarksScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black"
    },
    text: {
        fontSize: 35,
        textAlign: "center",
        fontFamily: "playfairBold",
        color: Colors.primary300
    }
})
