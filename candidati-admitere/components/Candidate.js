import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Candidate(props) {
  function handleEdit() {
    console.log("edit candidate", props.id);
    props.onEditCandidate(props);
  }

  function handleDelete() {
    console.log("delete candidate", props.id);
    props.onDeleteCandidate(props.id);
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.contentContainer}>
        <Text>Nume: {props.name}</Text>
        <Text style={styles.dueContainer}>Varsta: {props.age}</Text>
        <Text>CNP: {props.CNP}</Text>
        <Text>Medie admitere: {props.average}</Text>
      </View>
      <View style={styles.actionsWrapper}>
        <TouchableOpacity
          onPress={handleEdit}
          style={[{ backgroundColor: "#3CB371" }, styles.buttonWrapper]}
        >
          <Text style={{ color: "white" }}>Modificare date</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.actionsWrapper}>
        <TouchableOpacity
          onPress={handleDelete}
          style={[{ backgroundColor: "#d11a2a" }, styles.buttonWrapper]}
        >
          <Text style={{ color: "white" }}>Șterge candidat</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    borderRadius: 8,
    padding: 16,
    margin: 8,
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ededed",
    // width: "45%",
  },
  actionsWrapper: {
    display: "flex",
    flexDirection: "row",
  },
  buttons: {
    marginLeft: 8,
  },
  contentContainer: {},
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
    marginTop: 12,
  },
});
