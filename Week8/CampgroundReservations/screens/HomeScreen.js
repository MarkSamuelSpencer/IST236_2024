import {
    View,
    StyleSheet,
    ImageBackground,
    ScrollView,
    Text,
    Pressable,
    Platform,
    Modal,
    Button,
    useWindowDimensions,
  } from "react-native";
  
  import { useSafeAreaInsets } from "react-native-safe-area-context";
  import Title from "../components/Title";
  import Colors from "../constants/colors";
  import NavButton from "../components/NavButton";
  import { useState } from "react";
  import DateTimePicker from "@react-native-community/datetimepicker";
  import WheelPicker from "react-native-wheely";
  
  function HomeScreen() {
    const insets = useSafeAreaInsets();
  
    //default states for checkIn dates
    const [checkIn, setCheckIn] = useState(new Date());
    const [showCheckIn, setShowCheckIn] = useState(false);
  
    //check in picker functions
    function showCheckInPicker() {
      setShowCheckIn(true);
    }
  
    function hideCheckInPicker() {
      setShowCheckIn(false);
    }
  
    // on selected date on change with platform variance
    function onChangeCheckIn(event, selectedDate) {
      const currentDate = selectedDate;
      if (Platform.OS === "android") {
        hideCheckInPicker(true);
      }
      setCheckIn(currentDate);
    }
  
    // same thing here but for checkouts
    const [checkOut, setCheckOut] = useState(new Date());
    const [showCheckOut, setShowCheckOut] = useState(false);
  
    function showCheckOutPicker() {
      setShowCheckOut(true);
    }
  
    function hideCheckOutPicker() {
      setShowCheckOut(false);
    }
  
    function onChangeCheckOut(event, selectedDate) {
      const currentDate = selectedDate;
      if (Platform.OS === "android") {
        hideCheckOutPicker(true);
      }
      setCheckOut(currentDate);
    }
  
    // guest count options and guest count picker
    const guestCounts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const [numGuests, setNumGuests] = useState(0);
    const [showNumGuests, setShowNumGuests] = useState(false);
  
    function showNumGuestsPicker() {
      setShowNumGuests(true);
    }
  
    function hideNumGuestsPicker() {
      setShowNumGuests(false);
    }
  
    function onChangeNumGuests(index) {
      setNumGuests(index);
    }
  
    // site count options and site count picker
    const siteCounts = [1, 2, 3, 4, 5];
    const [numSites, setNumSites] = useState(0);
    const [showNumSites, setShowNumSites] = useState(false);
  
    function showNumSitesPicker() {
      setShowNumSites(true);
    }
  
    function hideNumSitesPicker() {
      setShowNumSites(false);
    }
  
    function onChangeNumSites(index) {
      setNumSites(index);
    }
  
    // display results after navbutton press
    const [results, setResults] = useState("");
  
    function onReserveHandler() {
      let res = `Check In:\t\t${checkIn.toDateString()}\n`;
      res = res + `Check Out:\t\t${checkOut.toDateString()}\n`;
      res = res + `Number of Guests: \t\t${guestCounts[numGuests]}\n`;
      res = res + `Number of Sites: \t\t${siteCounts[numSites]}\n`;
      setResults(res);
    }
  
    const { width, height } = useWindowDimensions();
  
    // variable text size based on device
    const dateLabelFlex = {
      fontSize: width * 0.075,
    };
  
    const dateTextFlex = {
      fontSize: width * 0.05,
    };
  
    return (
      <ImageBackground
        source={require("../assets/images/campground.jpg")}
        resizeMode="cover"
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
          <ScrollView style={styles.scrollContainer}>
            {/* Title of campground */}
            <View style={styles.titleContainer}>
              <Title>Sunset Campground</Title>
            </View>
  
            {/* check in/out date row container */}
            <View style={styles.rowContainer}>
              <View style={styles.dateContainer}>
                <Text style={[styles.dateLabel, dateLabelFlex]}>Check In:</Text>
                <Pressable onPress={showCheckInPicker}>
                  <Text style={[styles.dateText, dateTextFlex]}>
                    {checkIn.toDateString()}
                  </Text>
                </Pressable>
              </View>
              <View style={styles.dateContainer}>
                <Text style={[styles.dateLabel, dateLabelFlex]}>Check Out:</Text>
                <Pressable onPress={showCheckOutPicker}>
                  <Text style={[styles.dateText, dateTextFlex]}>
                    {checkOut.toDateString()}
                  </Text>
                </Pressable>
              </View>
            </View>
          {/* check in/out date time picker for android and ios */}
            <View>
              {showCheckIn && Platform.OS === "android" && (
                <DateTimePicker
                  testID="dateTimePickerCheckInAndroid"
                  value={checkIn}
                  mode={"date"}
                  display="spinner"
                  onChange={onChangeCheckIn}
                />
              )}
              {showCheckIn && Platform.OS === "ios" && (
                <Modal
                  animationType="slide"
                  transparent={true}
                  supportedOrientations={["portrait", "landscape"]}
                >
                  <View style={styles.centeredModalView}>
                    <View style={styles.modalView}>
                      <DateTimePicker
                        testID="dateTimePickerCheckInIOS"
                        value={checkIn}
                        mode={"date"}
                        display="spinner"
                        onChange={onChangeCheckIn}
                      />
                      <Button title="Confirm" onPress={hideCheckInPicker} />
                    </View>
                  </View>
                </Modal>
              )}
              {showCheckOut && Platform.OS === "android" && (
                <DateTimePicker
                  testID="dateTimePickerCheckOutAndroid"
                  value={checkOut}
                  mode={"date"}
                  display="spinner"
                  onChange={onChangeCheckOut}
                />
              )}
              {showCheckOut && Platform.OS === "ios" && (
                <Modal
                  animationType="slide"
                  transparent={true}
                  supportedOrientations={["portrait", "landscape"]}
                >
                  <View style={styles.centeredModalView}>
                    <View style={styles.modalView}>
                      <DateTimePicker
                        testID="dateTimePickerCheckOutIOS"
                        value={checkOut}
                        mode={"date"}
                        display="spinner"
                        onChange={onChangeCheckOut}
                      />
                      <Button title="Confirm" onPress={hideCheckOutPicker} />
                    </View>
                  </View>
                </Modal>
              )}
            </View>
                {/* select number of guests on the wheely modal screen */}
            <View style={styles.rowContainer}>
              <Text style={[styles.dateLabel, dateLabelFlex]}>
                Number of Guests:
              </Text>
              <Pressable onPress={showNumGuestsPicker}>
                <View style={styles.dateContainer}>
                  <Text style={[styles.dateText, dateTextFlex]}>
                    {guestCounts[numGuests]}
                  </Text>
                </View>
              </Pressable>
  
              <Modal
                animationType="slide"
                transparent={true}
                visible={showNumGuests}
                supportedOrientations={["portrait", "landscape"]}
              >
                <View style={styles.centeredModalView}>
                  <View style={styles.modalView}>
                    <Text style={[styles.dateText, dateTextFlex]}>
                      Enter Number of Guests
                    </Text>
                    <WheelPicker
                      selectedIndex={numGuests}
                      options={guestCounts}
                      onChange={onChangeNumGuests}
                      containerStyle={{ width: 50 }}
                    />
                    <Button title="Confirm" onPress={hideNumGuestsPicker} />
                  </View>
                </View>
              </Modal>
            </View>
            {/* select number of sites on the wheely modal screen */}
            <View style={styles.rowContainer}>
              <Text style={[styles.dateLabel, dateLabelFlex]}>
                Number of Sites:
              </Text>
              <Pressable onPress={showNumSitesPicker}>
                <View style={styles.dateContainer}>
                  <Text style={[styles.dateText, dateTextFlex]}>
                    {siteCounts[numSites]}
                  </Text>
                </View>
              </Pressable>
  
              <Modal
                animationType="slide"
                transparent={true}
                visible={showNumSites}
                supportedOrientations={["portrait", "landscape"]}
              >
                <View style={styles.centeredModalView}>
                  <View style={styles.modalView}>
                    <Text style={[styles.dateText, dateTextFlex]}>
                      Enter Number of Sites
                    </Text>
                    <WheelPicker
                      selectedIndex={numSites}
                      options={siteCounts}
                      onChange={onChangeNumSites}
                      containerStyle={{ width: 50 }}
                    />
                    <Button title="Confirm" onPress={hideNumSitesPicker} />
                  </View>
                </View>
              </Modal>
            </View>
                {/*navbutton for the reserve now option and display results below */}
            <View style={styles.buttonContainer}>
              <NavButton onPress={onReserveHandler}>Reserve Now</NavButton>
            </View>
  
            <View style={styles.resultsContainer}>
              <Text style={[styles.results, dateLabelFlex]}>{results}</Text>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
  
  export default HomeScreen;
  
  const styles = StyleSheet.create({
    rootContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    backgroundImage: {
      opacity: 0.3,
    },
    titleContainer: {
      justifyContent: "center",
      alignItems: "center",
      padding: 3,
      marginVertical: 10,
      marginHorizontal: 10,
      borderWidth: 2,
      borderRadius: 5,
      borderColor: Colors.primary500,
      backgroundColor: Colors.primary300,
    },
    scrollContainer: {
      flex: 1,
      width: 3000,
      maxWidth: "95%",
    },
    rowContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      paddingBottom: 20,
      marginBottom: 20,
    },
    dateContainer: {
      backgroundColor: Colors.primary300o5,
      padding: 5,
    },
    dateLabel: {
      fontSize: 100,
      color: Colors.primary500,
      fontFamily: "campground",
      textShadowColor: "black",
      textShadowOffset: { width: 2, height: 2 },
      textShadowRadius: 2,
      alignItems: 'center',
      justifyContent: 'center'
    },
    dateText: {
      color: Colors.primary800,
      fontSize: 20,
      fontWeight: "bold",
      alignItems: 'center',
      justifyContent: 'center'
    },
    centeredModalView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: Colors.primary300,
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "black",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    buttonContainer: {
      alignItems: 'center',
    },
    results: {
      textAlign: 'center',
      color: Colors.primary500,
      fontFamily: 'campground',
      textShadowColor: 'black',
      textShadowOffset: { width: 2, heigh: 2 },
      textShadowRadius: 2
    }
  });
  