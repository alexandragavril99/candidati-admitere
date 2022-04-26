import { ScrollView, View, StyleSheet } from "react-native";
import Candidate from "./Candidate";

export default function CandidateList(props) {
  function onDeleteChildTask(taskId) {
    props.onDeleteParentTask(taskId);
  }

  return (
    <View style={styles.taskListContainer}>
      {props.candidates.map((candidate) => (
        <Candidate
          id={candidate.id}
          key={candidate.id}
          name={candidate.Name}
          age={candidate.Age}
          CNP={candidate.CNP}
          average={candidate.Average}
          onDeleteTask={onDeleteChildTask}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  taskListContainer: {
    // width: "100%",
    // display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    // display: "flex",
    // display: "flex",
    // flexDirection: "column",
    // flex: 1,
  },
});
