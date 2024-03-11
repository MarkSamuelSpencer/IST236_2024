import { useState } from "react";
import { Image, Pressable, Text, View, StyleSheet } from "react-native";
import Colors from "../constants/colors";
import ImageViewModal from "../modal/ImageViewModal"

function DestinationItem(props) {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function viewImageHandler() {
    setModalIsVisible(true);
  }

  function closeImageHandler() {
    setModalIsVisible(false);
  }

  return (
    <View
      style={[
        styles.itemContainer,
        { backgroundColor: props.listIndex % 2 == 0 ? "#ccc" : "#fff" },
      ]}
    >
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{color: Colors.primary300}}
        onPress={viewImageHandler}
      >
        <View style={styles.rowContainer}>
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{props.name}</Text>
            <View style={styles.innerRowContainer}>
              <Text style={styles.cost}>Weekly Cost: ~${props.cost}</Text>
            </View>
            <View style={styles.innerRowContainer}>
            <Text style={styles.year}>City Founded Year: {props.foundedYear}</Text>
            </View>
            <Text style={styles.rating}>Rating: {props.rating} / 5</Text>
          </View>
        </View>
      </Pressable>
      <ImageViewModal
        isVisible={modalIsVisible}
        imageUrl={props.imageUrl}
        onClose={closeImageHandler}
      />
    </View>
  );
}

export default DestinationItem;

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: "#ccc",
        paddingHorizontal: 10,
        paddingTop: 3,
        marginBottom: 15,
        borderRadius: 20,
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5,
    },
    rowContainer: {
        height: 100,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    image: {
        width: "25%",
        height: "100%",
        resizeMode: "contain",
        borderRadius: 15,
    },
    infoContainer: {
        width: "75%",
        paddingLeft: 20,
    },
    name: {
        fontWeight: "bold",
        textAlign: "left",
        fontSize: 20,
    },
    cost: {
        width: "85%",
        fontSize: 14,
    },
    year: {
        fontSize: 14,
        fontWeight: "bold",
    },
    innerRowContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    rating: {
        fontSize: 13,
        fontStyle: "italic",
    },
})
