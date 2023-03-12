import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalsItems(props) {
  return (
    <View style={styles.goalsItmes}>
    <Pressable android_ripple={{color:'#dddddd'}} onPress={props.onDeleteItem.bind(this,props.id)}>
        <Text style={styles.goalText}>{props.text}</Text>
    </Pressable>
      </View>
  );
}

export default GoalsItems;

const styles = StyleSheet.create({
  goalText: {
    color: "white",
    padding: 8,

  },
  goalsItmes: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
});
