import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { ToastAndroid } from "react-native";
import { useHistory } from "react-router-native";

export default function Candidate(props) {
  const history = useHistory();
  const apiUrl =
    "https://project-tmw-fc69e-default-rtdb.europe-west1.firebasedatabase.app/Candidates";

  function navigateToDetails() {
    // history.push({
    //   pathname: "/taskDetails",
    //   state: props,
    // });
  }

  function handleDone() {
    console.log("pressed done", props.id);
  }

  function handleDelete() {
    console.log("pressed delete");
    props.onDeleteTask(props.id);
  }

  return (
    <View style={styles.taskWrapper}>
      <View style={styles.contentContainer} onTouchEnd={navigateToDetails}>
        <Text>Nume: {props.name}</Text>
        <Text style={styles.dueContainer}>Varsta: {props.age}</Text>
        <Text style={styles.textWidth}>CNP: {props.CNP}</Text>
        <Text>Medie admitere: {props.average}</Text>
      </View>
      <View style={styles.actionsWrapper}>
        <TouchableOpacity
          onPress={handleDelete}
          style={[{ backgroundColor: "#d9000b" }, styles.buttonWrapper]}
        >
          <Text style={{ color: "white" }}>Șterge candidat</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  taskWrapper: {
    borderRadius: 8,
    padding: 16,
    margin: 8,
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#dfe1f0",
    // borderColor: "red",
    // borderWidth: 3,
    width: "45%",
    // flex: 10,
  },
  actionsWrapper: {
    display: "flex",
    flexDirection: "row",
  },
  buttons: {
    marginLeft: 8,
  },
  contentContainer: {
    // width: "70%",
  },
  dueContainer: {
    color: "black",
  },
  buttonWrapper: {
    paddingRight: 8,
    paddingLeft: 8,
    paddingTop: 4,
    paddingBottom: 4,
    borderRadius: 4,
    marginLeft: 8,
    marginTop: 12
  },
  textWidth: {
    //   fontSize: 1
  }
});
