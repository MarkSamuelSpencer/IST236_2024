import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";

import MovieItem from "./components/MovieItem";

export default function App() {
  // state for storing movie data
  const [movieItems, setMovieItems] = useState([
    {
      name: "NightCrawler",
      image: require("./assets/images/nightcrawler.jpg"),
      rating: "9.8",
    },
    {
      name: "Whiplash",
      image: require("./assets/images/whiplash.jpg"),
      rating: "9.5",
    },
    {
      name: "My Neighbor Totoro",
      image: require("./assets/images/myneighbortotoro.jpg"),
      rating: "9.3",
    },
    {
      name: "The Fundamentals of Caring",
      image: require("./assets/images/thefundamentalsofcaring.jpg"),
      rating: "9.0",
    },
    {
      name: "A Quiet Place Part II",
      image: require("./assets/images/aquietplacepartII.jpg"),
      rating: "8.8",
    },
    {
      name: "A Quiet Place",
      image: require("./assets/images/aquietplace.jpg"),
      rating: "8.7",
    },
    {
      name: "Marriage Story",
      image: require("./assets/images/marriagestory.jpg"),
      rating: "8.6",
    },
    {
      name: "Spiderman: Into The SpiderVerse",
      image: require("./assets/images/intothespiderverse.jpg"),
      rating: "8.5",
    },
    {
      name: "Tick, Tick... Boom!",
      image: require("./assets/images/ticktickboom.jpg"),
      rating: "8.3",
    },
    {
      name: "A Goofy Movie",
      image: require("./assets/images/agoofymovie.jpg"),
      rating: "8.0",
    },
  ]);
  return (
    <>
    {/* creating app content  */}
      <StatusBar style="dark" />
      {/* main container */}
      <SafeAreaView style={styles.rootContainer}>
        {/* title container */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Top 10 Movies</Text>
        </View>

        <View style={styles.listContainer}>
          {/* flatlist to render movie items */}
          <FlatList
            data={movieItems}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <MovieItem
                name={item.name}
                image={item.image}
                rating={item.rating}
              />
            )}
          />
        </View>
      </SafeAreaView>
    </>
  );
}
// styles for everything
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#994545",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    marginBottom: 20,
    paddingHorizontal: 5,
    borderWidth: 5,
    borderRadius: 10,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
  },
  listContainer: {
    flex: 8,
    width: "85%",
  },
});
