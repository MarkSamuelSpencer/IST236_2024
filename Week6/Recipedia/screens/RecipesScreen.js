import { FlatList, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";
import NavButton from "../components/NavButton";
import Title from "../components/Title";
import RecipesItem from "../components/RecipeItem";
import RecipeView from "../modals/RecipeView";
import Colors from "../constants/colors";

function RecipeScreen(props) {
  //set safe area screen boundaries
  const insets = useSafeAreaInsets();

  // states for modal screen and content
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [modalRecipeTitle, setModalRecipeTitle] = useState("");
  const [modalRecipeText, setModalRecipeText] = useState("");

  // function to open modal screen
  function recipeViewHandler(title, text) {
    setModalRecipeTitle(title);
    setModalRecipeText(text);
    setModalIsVisible(true);
  }

  // close modal screen
  function closeRecipeViewHandler() {
    setModalIsVisible(false);
  }

  // load and display each section
  return (
    <View
      style={[
        styles.rootContainer,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <View style={styles.titleContainer}>
        <Title>Your Recipedia</Title>
      </View>

      <View style={styles.itemContainer}>
        <FlatList
          data={props.currentRecipes}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
          renderItem={(itemData) => {
            return (
              <RecipesItem
                id={itemData.item.id}
                title={itemData.item.title}
                onView={recipeViewHandler.bind(
                  this,
                  itemData.item.title,
                  itemData.item.text
                )}
                onDelete={props.onDelete.bind(this, itemData.item.id)}
              />
            );
          }}
        />
      </View>

      <RecipeView
        visible={modalIsVisible}
        title={modalRecipeTitle}
        text={modalRecipeText}
        onClose={closeRecipeViewHandler}
      />

      <View style={styles.navButtonContainer}>
        <View style={styles.navButton}>
          <NavButton onNext={props.onAdd}>Add New Recipe</NavButton>
        </View>
        <View style={styles.navButton}>
          <NavButton onNext={props.onHome}>Return Home</NavButton>
        </View>
      </View>
    </View>
  );
}

export default RecipeScreen;

const styles = StyleSheet.create({
    rootContainer: {
      flex: 1,
      width: "90%",
    },
    titleContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginVertical: 20,
    },
    itemContainer: {
      flex: 6,
      backgroundColor: Colors.primary800,
      borderRadius: 12,
    },
    navButtonContainer: {
      flex: 2,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    navButton: {
      marginHorizontal: 10,
    },
  });