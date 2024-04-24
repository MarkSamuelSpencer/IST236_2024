import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import MeditationItem from "../components/List/MeditationItem";
import List from "../components/List/List";
import { MEDITATION } from "../data/dummy_data";
import { StyleSheet } from "react-native";
import Colors from "../constants/colors";

function FavoritesScreen() {
  // Accessing favorited meditation IDs from Redux store
  const favoriteMeditationsIds = useSelector((state) => state.favoriteMeditations.ids);

  // Filtering MEDITATION data based on favorited meditation IDs
  const favoritedMeditations = MEDITATION.filter((meditation) => {
    return favoriteMeditationsIds.includes(meditation.id);
  });

  if (favoritedMeditations.length === 0){
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no saved meditations yet!</Text>
      </View>
    );
  }

  return <List items={favoritedMeditations} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 35,
    textAlign: "center",
    fontFamily: "rainyhearts",
    color: Colors.primary300,
  },
});
