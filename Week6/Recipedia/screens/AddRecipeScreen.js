import { ScrollView, StyleSheet, TextInput, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import NavButton from "../components/NavButton";
import Title from "../components/Title";
import Colors from "../constants/colors";
import { useState } from "react";

function AddRecipeScreen(props) {
  //set safe area screen boundaries
  const insets = useSafeAreaInsets();

  const [recipeTitle, setRecipeTitle] = useState("");
  const [recipeText, setRecipeText] = useState("");

  function addRecipeHandler() {
    props.onAdd(recipeTitle, recipeText);
    props.onCancel();
  }

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
        <Title>Add New Recipe</Title>
      </View>

      <View style={styles.scrollContainer}>
        <ScrollView>
          <View style={styles.recipeTitleContainer}>
            <TextInput
              placeholder="Enter Recipe Title Here"
              style={styles.recipeTitle}
              onChangeText={setRecipeTitle}
            />
          </View>
          <View style={styles.recipeTextContainer}>
            <TextInput
              placeholder="Enter Recipe Text Here"
              style={styles.recipeText}
              onChangeText={setRecipeText}
              textAlignVertical="top"
              multiline={true}
              numberOfLines={20}
            />
          </View>
          <View style={styles.navButtonContainer}>
            <View style={styles.navButton}>
              <NavButton onNext={addRecipeHandler}>Submit</NavButton>
            </View>
            <View style={styles.navButton}>
              <NavButton onNext={props.onCancel}>Cancel</NavButton>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default AddRecipeScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
    },
    titleContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
        marginBottom: 50,
    },
    scrollContainer: {
        flex: 5,
    },

    recipeTitleContainer: {
        borderWidth: 3,
        backgroundColor: Colors.primary300,
    },
    recipeTitle: {
        color: Colors.accent800,
        fontSize: 30,
    },
    recipeTextContainer: {
        marginVertical: 5,
        borderWidth: 3,
        backgroundColor: Colors.primary300,
        alignItems: "flex-start",
    },
    recipeText: {
        color: Colors.primary800,
    },
    navButtonContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    navButton: {
        marginHorizontal: 10,
    },
});