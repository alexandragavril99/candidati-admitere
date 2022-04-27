import { ScrollView, View, StyleSheet } from "react-native";
import Candidate from "./Candidate";

export default function CandidateList(props) {

  function onDeleteChildCandidate(candidateId) {
    props.onDeleteParentCandidate(candidateId);
  }

  function onEditChildCandidate(candidate) {
    props.onEditParentCandidate(candidate);
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {props.candidates.map((candidate) => (
        <Candidate
          id={candidate.id}
          key={candidate.id}
          name={candidate.Name}
          age={candidate.Age}
          CNP={candidate.CNP}
          average={candidate.Average}
          onDeleteCandidate={onDeleteChildCandidate}
          onEditCandidate={onEditChildCandidate}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    paddingBottom: 90
  },
});
