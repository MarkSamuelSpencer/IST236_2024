import { Image, View, Text, StyleSheet } from "react-native";

function MovieItem(props) {

  return (
    <View style={styles.itemContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.itemTitle}>{props.name}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.itemImage} source={props.image} />
      </View>
      <View style={styles.ratingContainer}>
        <Text style={styles.itemRating}>{props.rating} / 10</Text>
      </View>
    </View>
  );
}

// export MovieItems as a "Global" component
export default MovieItem;

// styles for everything
const styles = StyleSheet.create({
    itemContainer: {
        marginBottom: 20
    },
    titleContainer: {
        backgroundColor: "#fff",
        borderWidth: 3,
        borderRadius: 5,
    },
    itemTitle: {
        fontSize: 30,
        textAlign: "center"
    },
    imageContainer: {
        alignItems: "center",
        backgroundColor: "#585858",
        borderWidth: 3,
        borderRadius: 5,
    },
    itemImage: {
        width: "100%",
        height: 350,
        resizeMode: "contain"
    },
    ratingContainer: {
        backgroundColor: "#fff",
        borderWidth: 3,
        borderRadius: 5,
    },
    itemRating: {
        fontSize: 30,
        textAlign: "center"
    }

});