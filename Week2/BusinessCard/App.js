import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, Linking } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.rootContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require("./assets/images/myPhoto.jpg")} />
        </View>
        <View style={styles.informationContainer}>
          <Text style={styles.textName}>Mark Spencer</Text>
          <Text style={styles.textLabel}>Email:</Text>
          <Text style={styles.text} onPress={()=>Linking.openURL("mailto:marksamuelspencer1997@gmail.com")}>marksamuelspencer1997@gmail.com</Text>
          <Text style={styles.textLabel}>Phone:</Text>
          <Text style={styles.text} onPress={()=>Linking.openURL("tel:8432514405")}>(843) 251-4405</Text>
          <Text style={styles.text} onPress={()=>Linking.openURL("https://github.com/MarkSamuelSpencer")}>My Github</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#8a5f5f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 3,
    width: "100%",
    paddingTop: 40,
    alignItems: "center"
  },
  image: {
    height: "100%",
    width: "90%",
    resizeMode: "cover",
    borderWidth: 3,
    borderColor: "#e6e6e6",
    borderRadius: 200

  },
  informationContainer: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 23,
    color: "#e5e9e4",
    fontStyle: "italic",
    marginBottom: 40
    
  },
  textName: {
    fontSize: 40,
    color: "#e5e9e4",
    fontStyle: "italic",
    marginBottom: 100
  },
  textLabel: {
    fontSize: 20,
    color: "#e5e9e4",
    fontStyle: "italic",
    marginBottom: 10
    
  }
  
});
