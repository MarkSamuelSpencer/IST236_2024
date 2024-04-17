import { View, Text } from "react-native";
import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context";
import MeditationItem from "../components/List/MeditationItem";
import { MEDITATION } from "../data/dummy_data";
import List from "../components/List/List";
import { StyleSheet } from "react-native";
import Colors from "../constants/colors";

function FavoritesScreen() {
  const favoritedMeditationsCtx = useContext(FavoritesContext);
  const favoritedMeditations = MEDITATION.filter((MeditationItem) => {
    return favoritedMeditationsCtx.ids.includes(MeditationItem.id);
  });

  if (favoritedMeditations.length === 0){
    return <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no saved meditations yet!</Text>
    </View>
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
        color: Colors.primary300
    }
})
