import { View, Text, Button, ToastAndroid, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import CandidateList from "../components/CandidateList";
import { useHistory } from "react-router-native";

export default function Candidates() {
  const history = useHistory();
  const [candidates, setCandidates] = useState([]);

  const url =
    "https://project-tmw-fc69e-default-rtdb.europe-west1.firebasedatabase.app/Candidates";

  useEffect(() => {
    fetch(`${url}.json`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const candidates = [];

        for (const key in data) {
          const task = {
            id: key,
            ...data[key],
          };
          candidates.push(task);
        }

        setCandidates(candidates);
        console.log("Here");
        console.log(candidates);
      });
  }, []);

  function navigateToAddCandidate() {
    history.push("/addCandidate");
  }

  function deleteHandler(taskId) {
    fetch(`${url}/${taskId}.json`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      ToastAndroid.show("Task deleted!", ToastAndroid.SHORT);
      const filteredTasks = tasks.filter((el) => el.id !== taskId);
      setTasks(filteredTasks);
    });
  }

  return (
    <View style={styles.mainContainer}>
      <CandidateList
        style={styles.container}
        candidates={candidates}
        onDeleteParentTask={deleteHandler}
      />
      <View style={styles.button}>
        <Button
          title="Adăugare candidat"
          color="#3CB371"
          onPress={navigateToAddCandidate}
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // width: "100%",
    // display: "flex",
    // flexDirection: "row",
    // borderColor: "green",
    // borderWidth: 3,
  },
  mainContainer: {
    width: "100%",
    alignItems: "center",
  },
  button: {
    marginTop: 25,
    width: "60%",
  },
});
