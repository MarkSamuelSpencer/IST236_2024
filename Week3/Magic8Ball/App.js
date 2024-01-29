import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View, TextInput, Modal, Button } from 'react-native';

export default function App() {
  // set possible response values
  const responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
  ];

  //create state management variables
  const [userQuestion, setUserQuestion] = useState("");
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [response, setResponse] = useState("");

  // logic functions
  function startResponseHandler() {
    // random index for response from array
    const randomIndex = Math.floor(Math.random() * responses.length);
    // set response to the state
    setResponse(responses[randomIndex]);
    setModalIsVisible(true);
    setUserQuestion(userQuestion);
  }



  function endResponseHandler() {
    setModalIsVisible(false);
    setUserQuestion("");
  }

  return (
    <>
    <StatusBar style="auto" />
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.titleBackground}>
          <Text style={styles.title}>Magic 8 Ball</Text>
        </View>
      </View>

      <View style={styles.userQuestionContainer}>
        <Text style={styles.userQuestionLabel}>Enter Your Question Below:</Text>
        <TextInput 
        style={styles.userQuestionInput}
        // Placeholder for when it's empty
        placeholder="What would you dare to know?"
        // when text is changed, update userQuestion
        onChangeText={setUserQuestion}
        value={userQuestion}
        />
      </View>

      <View style={styles.submitButtonContainer}>
        <Pressable
        // add android ripple to make it pretty
        android_ripple={{color: "#c5b56b"}}
        // style when pressed
        style={({ pressed }) => pressed && styles.pressedButton}
        // when pressed, open modal screen
        onPress={startResponseHandler}
        >
          <View style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Submit Question</Text>
          </View>
        </Pressable>
      </View>

      <Modal visible={modalIsVisible} animationType="slide">
        <SafeAreaView style={styles.modalroot}>
          <View style={styles.userQuestionContainer}>
            <Text style={styles.userQuestionModal}>{userQuestion}</Text>
          </View>
          <View style={styles.responseContainer}>
            <Text style={styles.responseText}>{response}</Text>
          </View>
          <View style={styles.responseButtonContainer}>
            <View style={styles.responseButton}>
              <Button title="Return" onPress={endResponseHandler} />
            </View>
          </View>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffDD0',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center"
  },
  titleBackground: {
    backgroundColor: "#fff",
    padding: 10,
    paddingHorizontal: 20,
    borderWidth: 4,
    borderRadius: 8
  },
  title: {
    fontSize: 60,
    fontWeight: "bold",
    fontStyle: "italic"
  },
  userQuestionContainer: {
    flex: 2,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  userQuestionLabel: {
    fontSize: 25,
    color: "#000",
    marginBottom: 20,
  },
  userQuestionInput : {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderRadius: 8,
    padding: 60,
    color: "#111111"
  },
  pressedButton: {
    opacity: 0.7
  },
  submitButtonContainer: {
    flex: 1,
    justifyContent: "center"
  },
  submitButton: {
    backgroundColor: "#fff",
    padding: 15,
    paddingHorizontal: 30,
    borderWidth: 4,
    borderRadius: 8
  },
  submitButtonText: {
    fontSize: 25,
    fontWeight: "bold",
    fontStyle: "italic"
  },
  modalroot: {
    flex: 1,
    backgroundColor: "#fffDD0"
  },
  userQuestionModal: {
    fontSize: 18,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderRadius: 8,
    padding: 20,
    color: "#111111"
  },
  responseContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0f0f0f",
    padding: 20,
    borderWidth: 2,
    borderRadius: 180,
  },
  responseText: {
    backgroundColor: "#fff",
    padding: 20,
    borderWidth: 2,
    borderRadius: 50,
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  responseButtonContainer: {
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 60,
    justifyContent: "center"
  },
  responseButton: {
    width: "40%",
    margin: 20,
  }
});
