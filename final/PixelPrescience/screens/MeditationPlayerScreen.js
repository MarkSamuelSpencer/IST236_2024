import { View, Text, StyleSheet, Image } from "react-native";
import { useState, useLayoutEffect, useContext } from "react";
import { MEDITATION } from "../data/dummy_data";
import FavoriteButton from "../components/FavoriteButton";
import Colors from "../constants/colors";
import { FavoritesContext } from "../store/context/favorites-context";

function MeditationPlayerScreen(props) {
  const favoritedMeditationsCtx = useContext(FavoritesContext);

  const meditationId = props.route.params.meditationId;
  const selectedMeditation = MEDITATION.find(
    (meditation) => meditation.id === meditationId
  );

  const meditationIsFavorited =
    favoritedMeditationsCtx.ids.includes(meditationId);

  function changeFavoriteStatusHandler() {
    if (meditationIsFavorited) {
      favoritedMeditationsCtx.removeFavorite(meditationId);
    } else {
      favoritedMeditationsCtx.addFavorite(meditationId);
    }
  }
  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: "",
      headerRight: () => {
        return (
          <FavoriteButton
            pressed={meditationIsFavorited}
            onPress={changeFavoriteStatusHandler}
          />
        );
      }, 
    });
  }, [props.navigation, changeFavoriteStatusHandler]);

  return (
    <View style={styles.rootContainer}>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: selectedMeditation.imageUrl }} />
        </View>

        <View style={styles.infoContainer}>
            <Text style={styles.title}>{selectedMeditation.title}</Text>
            <Text style={styles.description}>{selectedMeditation.description}</Text>
        </View>
        <View style={styles.playbuttonContainer}>
            <Text>Timer</Text>
            <Text>Volume Slider</Text>
            <Text>Play Button</Text>
        </View>
    </View>
  )
}

export default MeditationPlayerScreen;

const styles = StyleSheet.create({
    rootContainer: {
      flex: 1,
    },
    imageContainer: {
      marginVertical: 10,
      height: 400,
      borderRadius: 200,
      marginHorizontal: 10,
      backgroundColor: "green"
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
      fontFamily: "rainyhearts",
      paddingBottom: 5,
    },
    description: {
      color: Colors.primary300,
      width: "100%",
      textAlign: "justify",
      fontSize: 15,
      fontFamily: "rainyhearts",
    },
    playbuttonContainer: {
        flex: 1,
        backgroundColor: "white",
        borderRadius: 200,
        justifyContent: "center",
        alignItems: "center",
    }
  });
