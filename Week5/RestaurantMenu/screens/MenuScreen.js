import { View, StyleSheet, FlatList } from "react-native";
import { useState } from 'react';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import NavButton from "../components/NavButton";
import Title from "../components/Title";
import MenuItem from "../components/MenuItems";

function MenuScreen(props) {
  // set safe area screen boundaries
  const insets = useSafeAreaInsets();

  //menus

  const [menuItems, setMenuItems] = useState ([
    {
        name: "Chicken and Shrimp Dinner Plate",
        image: require("../assets/images/chickenandshrimp.jpg"),
        price: "$22.99",
        id: 1,
    },
    {
        name: "Steak and Chicken Dinner Plate",
        image: require("../assets/images/steakandchicken.jpg"),
        price: "$26.99",
        id: 2,
    },
    {
        name: "Hibachi Chicken Lunch Plate",
        image: require("../assets/images/lunchchicken.jpg"),
        price: "$13.99",
        id: 3,
    },
    {
        name: "Tuna Poke Bowl",
        image: require("../assets/images/pokebowl.jpg"),
        price: "$15.99",
        id: 4,
    },
    {
        name: "Sesame Salad",
        image: require("../assets/images/sesamesalad.jpg"),
        price: "$10.99",
        id: 5,
    }
  ])


  return (
    <View
      style={[
        styles.rootContainer,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingRight: insets.right,
          paddingLeft: insets.left,
        },
      ]}
      >
      <View style={styles.titleContainer}>
        <Title>Menu</Title>
      </View>
      <View style={styles.listContainer}>
        <FlatList 
        data = {menuItems}

        keyExtractor= {(item) => item.id}

        alwaysBounceVertical={false}
        showVerticalScrollIndicator={false}
        renderItem={(itemData) => {
            return (
                <MenuItem 
                name={itemData.item.name}
                image={itemData.item.image}
                price={itemData.item.price}
                />
            );
        }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <NavButton onPress={props.onNext}>Home Page</NavButton>
      </View>
    </View>
  );
}

export default MenuScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: 400,
    alignItems: "center",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  listContainer: {
    flex: 7,
    width: "95%",
  },
  buttonContainer: {
    flex: 1,
    marginTop: 10,
  }
});
