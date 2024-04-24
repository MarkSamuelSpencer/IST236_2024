import { View, StyleSheet, FlatList } from "react-native";
import MeditationItem from "./MeditationItem";
import Colors from "../../constants/colors";

// List component to display meditation items
function List(props) {
  // render each meditation item
  function renderMeditationItem(itemData) {
    const meditationItemProps = {
      id: itemData.item.id,
      type: itemData.item.type,
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      description: itemData.item.description,
      listIndex: itemData.index,
    };
    return <MeditationItem {...meditationItemProps} />;
  }
  
  // render list of meditation items
  return (
    <View style={styles.container}>
      <FlatList
        data={props.items}
        keyExtractor={(item) => item.id}
        renderItem={renderMeditationItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.accent500,
  },
});
