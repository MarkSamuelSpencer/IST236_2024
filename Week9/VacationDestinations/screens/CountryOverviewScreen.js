import { useLayoutEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { COUNTRY, DESTINATION } from "../data/dummy-data";
import DestinationItem from "../components/DesinationItem";

function DestinationOverviewScreen(props) {
  const countryId = props.route.params.countryId;

  useLayoutEffect (() => {
    const country = COUNTRY.find((country) => country.id === countryId);
    props.navigation.setOptions({title: country ? country.name : null });
  }, [countryId, props.navigation]);

  const displayedDestination = DESTINATION.filter((destinationItem) => {
    return destinationItem.countryId === countryId;
  });

  function renderDestinationItem(itemData) {
    const destinationItemProps = {
      name: itemData.item.name,
      imageUrl: itemData.item.imageUrl,
      cost: itemData.item.cost,
      foundedYear: itemData.item.foundedYear,
      rating: itemData.item.rating,
      listIndex: itemData.index
    }
    
    return <DestinationItem {...destinationItemProps} />
    
  }

  return (
    <View style={styles.container}> 
      <FlatList
        data={displayedDestination}
        keyExtractor={(item) => item.id}
        renderItem={renderDestinationItem}
      />
    </View>
  );
}

export default DestinationOverviewScreen;

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    padding: 16
  }
})