import { ScrollView, StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from "../constants/colors";
import NavButton from "../components/NavButton";
import { ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function OrderReviewScreen(props) {
  const insets = useSafeAreaInsets();
  return (
    <LinearGradient
      colors={[Colors.primary800, Colors.accent300, Colors.primary800,]}
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
          <Title>Order Summary</Title>
        </View>

        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>
            Your order has been placed with your order details below
          </Text>
        </View>
        <ScrollView>
          <View style={styles.servicesContainer}>
            <Text style={styles.services}>Service Time Selected:</Text>
            <Text style={styles.subServices}>{props.repairTime}</Text>
            <Text style={styles.services}>Services Selected:</Text>
            {props.services.map((item) => {
              if (item.value) {
                return (
                  <Text key={item.id} style={styles.subServices}>
                    {item.name}
                  </Text>
                );
              }
            })}
            <Text style={styles.services}>Bonus Options:</Text>
            <Text style={styles.subServices}>{props.newsletter ? "Newsletter" : ""}</Text>
            <Text style={styles.subServices}>{props.rentalMembership ? "Rental Membership" : ""}</Text>
          </View>
          
        </ScrollView>
        <View style={styles.priceTitleContainer}>
          <Text style={styles.subTitle}>
            Subtotal: ${props.price.toFixed(2)}
          </Text>
          <Text style={styles.subTitle}>
            Sales Tax: ${(props.price * 0.06).toFixed(2)}{" "}
          </Text>
          <Text style={styles.subTitle}>
            Total: ${(props.price + props.price * 0.06).toFixed(2)}
          </Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <NavButton onPress={props.onNext}>Return Home</NavButton>
      </View>
    </LinearGradient>
  );
}

export default OrderReviewScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  titleContainer: {
    marginBottom: 10,
    marginHorizontal: 10,
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderWidth: 5,
    borderRadius: 15,
    borderColor: Colors.primary300,
  },
  subTitleContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  priceTitleContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    borderWidth: 5,
    borderRadius: 30,
    borderColor: Colors.primary300,
    backgroundColor: Colors.accent800
  },
  subTitle: {
    fontSize: 22,
    fontFamily: "font",
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.primary300,
  },
  servicesContainer: {
    flex: 3,
  },
  services: {
    fontSize: 30,
    fontFamily: "boldfont",
    color: Colors.primary800,
  },
  subServices: {
    textAlign: "center",
    fontSize: 25,
    fontFamily: "boldfont",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
