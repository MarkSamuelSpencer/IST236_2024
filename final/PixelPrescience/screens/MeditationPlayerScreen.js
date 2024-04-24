import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ImageBackground,
} from "react-native";
import { useState, useLayoutEffect, useEffect } from "react";
import { MEDITATION } from "../data/dummy_data";
import FavoriteButton from "../components/FavoriteButton";
import Colors from "../constants/colors";
import { addFavorite, removeFavorite } from "../store/redux/favorites-redux";
import { useDispatch, useSelector } from "react-redux";
import { Audio } from "expo-av";
import { AntDesign } from "@expo/vector-icons";

// MeditationPlayerScreen component
function MeditationPlayerScreen(props) {
  // Redux hooks to manage favorite meditations
  const favoriteMeditationsIds = useSelector(
    (state) => state.favoriteMeditations.ids
  );
  const dispatch = useDispatch();

  // State to manage sound playback
  const [sound, setSound] = useState();

  // Extracting meditation ID from navigation params
  const meditationId = props.route.params.meditationId;

  // Finding selected meditation from dummy data
  const selectedMeditation = MEDITATION.find(
    (meditation) => meditation.id === meditationId
  );

  // Checking if the meditation is already favorite
  const meditationIsFavorite = favoriteMeditationsIds.includes(meditationId);

  // Handler to toggle favorite status
  function changeFavoriteStatusHandler() {
    if (meditationIsFavorite) {
      dispatch(removeFavorite({ id: meditationId }));
    } else {
      dispatch(addFavorite({ id: meditationId }));
    }
  }

  // Update navigation options on layout effect
  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: "",
      headerRight: () => (
        <FavoriteButton
          pressed={meditationIsFavorite}
          onPress={changeFavoriteStatusHandler}
        />
      ),
    });
  }, [props.navigation, changeFavoriteStatusHandler]);

  // Function to play local sound file
  async function playLocalSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      selectedMeditation.internal
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  // Unload sound on component unmount
  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  // Render MeditationPlayerScreen
  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      resize="stretch"
      style={styles.rootContainer}
      imageStyle={styles.backgroundImage}
    >
      <View style={styles.rootContainer}>
        {/* Meditation Image */}
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: selectedMeditation.imageUrl }}
          />
        </View>

        {/* Meditation Information */}
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{selectedMeditation.title}</Text>
          <Text style={styles.description}>
            {selectedMeditation.description}
          </Text>
        </View>

        {/* Play Button */}
        <View style={styles.playbuttonContainer}>
          <Pressable onPress={playLocalSound}>
            <AntDesign
              name="playcircleo"
              size={80}
              color={Colors.accent500}
            />
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
}

export default MeditationPlayerScreen;

// Component styles
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  imageContainer: {
    marginVertical: 10,
    height: 400,
    borderRadius: 200,
    marginHorizontal: 10,
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
    color: Colors.accent200,
    fontSize: 30,
    fontFamily: "rainyhearts",
    paddingBottom: 5,
  },
  description: {
    color: Colors.accent200,
    width: "100%",
    textAlign: "justify",
    fontSize: 25,
    fontFamily: "rainyhearts",
  },
  playbuttonContainer: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: Colors.primary500o8,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    opacity: 0.55,
  },
});
