import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import HomeScreen from "./screens/HomeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import Colors from "./constants/colors";
import AddRecipeScreen from "./screens/AddRecipeScreen";
import RecipeScreen from "./screens/RecipesScreen";

export default function App() {

  //load custom font
  const [fontLoaded] = useFonts ({
    IndieFlower: require("./assets/fonts/IndieFlower-Regular.ttf"),
  });

  // create states to manage data and random grilled cheese recipe
  const [currentScreen, setCurrentScreen] = useState("home");
  const [currentID, setCurrentID] = useState(3);
  const [currentRecipes, setCurrentRecipes] = useState([
    {
      id: 1,
      title: "Grilled Cheese",
      text: "Ingredients:\nTwo slices of bread\nTwo slices of american cheese\n2 tablespoons of butter" + 
      "\nInstructions\nHeat up a pan and butter one side of each slice of bread." + 
      "\nPut the butter side down in the pan and put the cheese on top of each slice of bread" + 
      "\nWhen cheese is melted and bread is toasted, put the two halves together\nCut in half."
    }
  ]);


  // functions for navigation
  function homeScreenHandler() {
    setCurrentScreen("home");
  }

  function recipeScreenHandler() {
    setCurrentScreen("recipes");
  }

  function addRecipeScreenHandler() {
    setCurrentScreen("add")
  }

  // add a new recipe to the list
  function addRecipeHandler(enteredRecipeTitle, enteredRecipeText) {
    setCurrentRecipes((currentRecipes) => {
      return [
        ...currentRecipes,
        {
          id: currentID, title: enteredRecipeTitle, text: enteredRecipeText 
        },
      ];
    });
    // auto increment ID
    setCurrentID(currentID + 1)
    //return to recipe screen
    recipeScreenHandler();
  }

  // remove a recipe matching the id of the one clicked
  function deleteRecipeHandler(id) {
    setCurrentRecipes((currentRecipes) => {
      return currentRecipes.filter((item) => item.id !== id);
    });
  }


  // determind which screen to load based on current screen
  let screen = <HomeScreen onNext={recipeScreenHandler} />;

  if (currentScreen === "add") {
    screen = <AddRecipeScreen onAdd={addRecipeHandler} onCancel={recipeScreenHandler} />;
  }

  if (currentScreen === "recipes") {
    screen = (
      <RecipeScreen
        onHome={homeScreenHandler}
        onAdd={addRecipeScreenHandler}
        onDelete={deleteRecipeHandler}
        currentRecipes={currentRecipes}
        />
    );
  }

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    </> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary500,
    alignItems: "center",
    justifyContent: "center",
  },
});
