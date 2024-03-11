import { FlatList, Text, View } from "react-native";
import { COUNTRY, DESTINATION } from "../data/dummy-data";
import CountryGridTile from "../components/CountryGridTile";


function HomeScreen(props) {

    function renderCountryItem(itemData) {

        function pressHandler() {
          props.navigation.navigate("CountryOverviewScreen", {
            countryId: itemData.item.id,
          });
        }


        return (
            <CountryGridTile
            name={itemData.item.name}
            color={itemData.item.color}
            onPress={pressHandler}
            />
        );
    }



  return (
    <View>
      <FlatList 
        data={COUNTRY}
        keyExtractor={(item) => {
            return item.id
        }}
        renderItem={renderCountryItem}
        numColumns={2}
      />
    </View>
  );
}

export default HomeScreen;
