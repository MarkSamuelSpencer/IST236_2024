import { ScrollView, Text, View, StyleSheet, Switch } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import { RadioGroup } from "react-native-radio-buttons-group";
import Colors from "../constants/colors";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import NavButton from "../components/NavButton";
import { LinearGradient } from "expo-linear-gradient";

function HomeScreen(props) {
  const insets = useSafeAreaInsets();
  return (
    <LinearGradient
    colors={[Colors.accent500, Colors.primary800]}
    style={styles.rootContainer}
    >
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
          <Title>Deli Delights</Title>
        </View>

        <ScrollView style={styles.scrollContainer}>
          <View style={styles.radioContainer}>
            <Text style={styles.radioHeader}>Sandwich Size:</Text>
            <RadioGroup
              radioButtons={props.sizeRadioButtons}
              onPress={props.onSetSizeId}
              selectedId={props.sizeId}
              layout="row"
              containerStyle={styles.radioGroup}
              labelStyle={styles.radioGroupLabels}
            />
          </View>

          <View style={styles.radioContainer}>
            <Text style={styles.radioHeader}>Bread Type:</Text>
            <RadioGroup
              radioButtons={props.breadRadioButtons}
              onPress={props.onSetBreadId}
              selectedId={props.breadId}
              layout="row"
              containerStyle={styles.radioGroup}
              labelStyle={styles.radioGroupLabels}
            />
          </View>

          <View style={styles.rowContainer}>
            <View style={styles.checkBoxContainer}>
              <Text style={styles.checkboxHeader}> Meat Types:</Text>
              <View style={styles.checkBoxSubContainer}>
                {props.meats.map((item) => {
                  return (
                    <BouncyCheckbox
                      key={item.id}
                      text={item.name}
                      onPress={props.onSetMeats.bind(this, item.id)}
                      textStyle={{
                        textDecorationLine: "none",
                        fontFamily: "font",
                        color: Colors.primary500,
                      }}
                      innerIconStyle={{
                        borderRadius: 0,
                        borderColor: Colors.primary500,
                      }}
                      iconStyle={{
                        borderRadius: 0,
                      }}
                      fillColor={Colors.primary500}
                      style={{
                        padding: 2,
                      }}
                    />
                  );
                })}
              </View>
            </View>
            <View style={styles.checkBoxContainer}>
              <Text style={styles.checkboxHeader}> Sauce Types:</Text>
              <View style={styles.checkBoxSubContainer}>
                {props.sauces.map((item) => {
                  return (
                    <BouncyCheckbox
                      key={item.id}
                      text={item.name}
                      onPress={props.onSetSauces.bind(this, item.id)}
                      textStyle={{
                        textDecorationLine: "none",
                        fontFamily: "font",
                        color: Colors.primary500,
                      }}
                      innerIconStyle={{
                        borderRadius: 0,
                        borderColor: Colors.primary500,
                      }}
                      iconStyle={{
                        borderRadius: 0,
                      }}
                      fillColor={Colors.primary500}
                      style={{
                        padding: 2,
                      }}
                    />
                  );
                })}
              </View>
            </View>
          </View>
          <View style={styles.rowContainer}>
            <View style={styles.checkBoxContainer}>
              <Text style={styles.checkboxHeader}> Vegetable Types:</Text>
              <View style={styles.checkBoxSubContainer}>
                {props.vegetables.map((item) => {
                  return (
                    <BouncyCheckbox
                      key={item.id}
                      text={item.name}
                      onPress={props.onSetVegetables.bind(this, item.id)}
                      textStyle={{
                        textDecorationLine: "none",
                        fontFamily: "font",
                        color: Colors.primary500,
                      }}
                      innerIconStyle={{
                        borderRadius: 0,
                        borderColor: Colors.primary500,
                      }}
                      iconStyle={{
                        borderRadius: 0,
                      }}
                      fillColor={Colors.primary500}
                      style={{
                        padding: 2,
                      }}
                    />
                  );
                })}
              </View>
            </View>
            <View style={styles.cheeseContainer}>
              <Text style={styles.checkboxHeader}>Cheese Type:</Text>
              <RadioGroup
                radioButtons={props.cheeseRadioButtons}
                onPress={props.onSetCheeseId}
                selectedId={props.cheeseId}
                layout="column"
                containerStyle={[
                  styles.radioGroup,
                  { alignItems: "flex-start" },
                ]}
                labelStyle={styles.radioGroupLabels}
              ></RadioGroup>
            </View>
          </View>
          <View style={styles.rowContainer}>
            <View style={styles.addOnsContainer}>
              <View style={styles.addOnsSubContainer}>
                <Text style={styles.addOnsLabel}>Double Meat</Text>
                <Switch
                  onValueChange={props.onSetDoubleMeat}
                  value={props.doubleMeat}
                  thumbColor={
                    props.doubleMeat ? Colors.primary500 : Colors.primary800
                  }
                  trackColor={{
                    false: Colors.primary500,
                    true: Colors.primary800,
                  }}
                />
              </View>
              <View style={styles.addOnsSubContainer}>
                <Text style={styles.addOnsLabel}>Double Cheese</Text>
                <Switch
                  onValueChange={props.onSetDoubleCheese}
                  value={props.doubleCheese}
                  thumbColor={
                    props.doubleCheese ? Colors.primary500 : Colors.primary800
                  }
                  trackColor={{
                    false: Colors.primary500,
                    true: Colors.primary800,
                  }}
                />
              </View>
            </View>
            <View style={styles.addOnsContainer}>
              <View style={styles.addOnsSubContainer}>
                <Text style={styles.addOnsLabel}>Toasted</Text>
                <Switch
                  onValueChange={props.onSetToasted}
                  value={props.toasted}
                  thumbColor={
                    props.toasted ? Colors.primary500 : Colors.primary800
                  }
                  trackColor={{
                    false: Colors.primary500,
                    true: Colors.primary800,
                  }}
                />
              </View>
              <View style={styles.addOnsSubContainer}>
                <Text style={styles.addOnsLabel}>Meal Combo</Text>
                <Switch
                  onValueChange={props.onSetMealCombo}
                  value={props.mealCombo}
                  thumbColor={
                    props.mealCombo ? Colors.primary500 : Colors.primary800
                  }
                  trackColor={{
                    false: Colors.primary500,
                    true: Colors.primary800,
                  }}
                />
              </View>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <NavButton onPress={props.onNext}>Submit Order</NavButton>
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  titleContainer: {
    marginBottom: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: Colors.primary500,
    paddingHorizontal: 30,
    paddingVertical: 5,
  },
  scrollContainer: {
    flex: 1,
  },
  radioContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  radioHeader: {
    fontSize: 30,
    fontFamily: "font",
    color: Colors.primary500,
  },
  radioGroup: {
    paddingBottom: 20,
  },
  radioGroupLabels: {
    fontSize: 15,
    fontFamily: "font",
    color: Colors.primary500,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingBottom: 20,
  },
  checkBoxContainer: {},
  checkboxHeader: {
    fontSize: 20,
    fontFamily: "font",
    color: Colors.primary500,
  },
  checkBoxSubContainer: {
    padding: 2,
  },
  cheeseContainer: {
    alignItems: "center",
  },
  addOnsContainer: {
    justifyContent: "space-between",
  },
  addOnsSubContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addOnsLabel: {
    color: Colors.primary500,
    fontSize: 20,
    fontFamily: "font",
  },
  buttonContainer: {
    alignItems: "center",
  },
});
