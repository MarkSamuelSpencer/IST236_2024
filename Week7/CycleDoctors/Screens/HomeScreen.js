import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  Switch,
  ImageBackground,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import { RadioGroup } from "react-native-radio-buttons-group";
import Colors from "../constants/colors";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import NavButton from "../components/NavButton";

function HomeScreen(props) {

  const insets = useSafeAreaInsets();
  return (
    <ImageBackground
      source={require("../assets/images/cycleBackground.png")}
      resize="stretch"
      style={styles.rootContainer}
      imageStyle={styles.backgroundImage}
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
          <Title>Cycle Doctors </Title>
        </View>

        <ScrollView style={styles.scrollContainer}>
          <View style={styles.radioContainer}>
            <Text style={styles.radioHeader}>Service Times: </Text>
            <RadioGroup
              radioButtons={props.repairTimeRadioButtons}
              onPress={props.onSetRepairTimeId}
              selectedId={props.repairTimeId}
              layout="row"
              containerStyle={styles.radioGroup}
              labelStyle={styles.radioGroupLabels}
            />
          </View>
          <View style={styles.checkBoxContainer}>
              <Text style={styles.checkboxHeader}>Service Options: </Text>
              <View style={styles.checkBoxSubContainer}>
                {props.services.map((item) => {
                  return (
                    <BouncyCheckbox
                      key={item.id}
                      text={item.name}
                      onPress={props.onSetServices.bind(this, item.id)}
                      textStyle={{
                        textDecorationLine: "none",
                        fontFamily: "font",
                        fontSize: 20,
                        color: Colors.primary800,
                      }}
                      innerIconStyle={{
                        borderRadius: 0,
                        borderColor: Colors.primary800,
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
            <View style={styles.addOnsContainer}>
              <View style={styles.addOnsSubContainer}>
                <Text style={styles.addOnsLabel}>Join Our Newsletter?</Text>
                <Switch
                  onValueChange={props.onSetNewsletter}
                  value={props.newsletter}
                  thumbColor={
                    props.newsletter ? Colors.primary500 : Colors.primary800
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
                <Text style={styles.addOnsLabel}>Buy Rental Membership?</Text>
                <Switch
                  onValueChange={props.onSetRentalMembership}
                  value={props.rentalMembership}
                  thumbColor={
                    props.rentalMembership ? Colors.primary500 : Colors.primary800
                  }
                  trackColor={{
                    false: Colors.primary500,
                    true: Colors.primary800,
                  }}
                />
              </View>
              </View>
            
        </ScrollView>

        <View style={styles.navButtonContainer}>
          <NavButton onPress={props.onNext}>Submit Order</NavButton>
        </View>
      </View>
    </ImageBackground>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    opacity: 0.25,
  },
  titleContainer: {
    marginBottom: 10,
    borderWidth: 2,
    borderRadius: 50,
    backgroundColor: Colors.accent800,
    borderColor: Colors.primary300,
    paddingHorizontal: 30,
    paddingVertical: 5,
  },
  scrollContainer: {
    flex: 1,
    width: "95%",
  },
  radioContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  radioHeader: {
    fontSize: 30,
    fontFamily: "font",
    color: Colors.accent800,
  },
  radioGroup: {
    paddingBottom: 20,
  },
  radioGroupLabels: {
    fontSize: 15,
    fontFamily: "font",
    color: Colors.accent800,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingBottom: 20,
  },
  checkBoxContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  checkboxHeader: {
    fontSize: 30,
    fontFamily: "font",
    color: Colors.primary800,
  },
  checkBoxSubContainer: {
    padding: 2,
  },
  addOnsContainer: {
    justifyContent: "space-between",
  },
  addOnsSubContainer: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addOnsLabel: {
    color: Colors.primary800,
    fontSize: 25,
    fontFamily: "boldfont",
  },
  buttonContainer: {
    alignItems: "center",
  },
});
