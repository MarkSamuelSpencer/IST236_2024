import { View, StyleSheet, FlatList } from "react-native";
import MeditationItem from "./MeditationItem";

function List(props) {
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
    backgroundColor: "black",
  },
});
