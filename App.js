import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";
import GoalsInput from "./components/GoalsInput";
import GoalsItems from "./components/GoalsItems";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [goals, setgoals] = useState([]);
  const [modalIsVisible, setModalIsVisible]= useState(false);


  function addGoalHandler(enteredText) {
    setgoals((currentGoals) => [
      ...currentGoals,
      { text: enteredText, id: Math.random().toString() },
    ]);
    endGoalHandler();
  }

  function startAddGoalHandler(){
    setModalIsVisible(true);
  }

  function endGoalHandler(){
    setModalIsVisible(false);
  }

  function deleteItem(id) {
    setgoals((currentGoals)=>{
      return currentGoals.filter((goal)=>goal.id!==id);
    })
  }

  return (
  <>
  <StatusBar style="light"/>
    <View style={styles.appContainer}>
    <Button title="Add New Goal" color="#5e0acc" onPress={startAddGoalHandler}/>
      <GoalsInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return (
              <GoalsItems text={itemData.item.text}
                id={itemData.item.id}
               onDeleteItem={deleteItem} />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
    </>

  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  goalsContainer: {
    flex: 5,
  },
});
