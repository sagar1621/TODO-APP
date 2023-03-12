import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";
import { useState } from "react";

function GoalsInput(props) {
  const [enteredText, setEnteredText] = useState("");
  function goalInputHandler(e) {
    setEnteredText(e);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredText);
    setEnteredText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
      <Image style={styles.image} source={require('../assets/Images/goal.png')}/>
        <TextInput
          style={styles.textInput}
          placeholder="Your Goal"
          onChangeText={goalInputHandler}
          value={enteredText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goals" onPress={addGoalHandler} color="#5e0acc" />
          </View>
          <View style={styles.button}>
            <Button onPress={props.onCancel} title="Cancel" color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalsInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding:16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'#3116bb'
  },
  image:{
    width:100,
    height:100,
    margin:20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor:"#e4d0ff",
    color:"#120438",
    borderRadius:6,
    width: "100%",
    padding: 16,

  },
  buttonContainer: {
    flexDirection: "row",
    marginTop:16
  },
  button:{
    width:100,
    marginHorizontal:8,
  }
});
