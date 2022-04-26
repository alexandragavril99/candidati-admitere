import { useLocation } from "react-router-native";
import {
  Text,
  TextInput,
  View,
  Switch,
  StyleSheet,
  Button,
  Image,
} from "react-native";
import { useState, useEffect } from "react";
import { ToastAndroid } from "react-native";
import { useHistory } from "react-router-native";

export default function TaskDetailsPage() {
  const apiUrl =
    "https://project-tmw-fc69e-default-rtdb.europe-west1.firebasedatabase.app/Candidates";
  const history = useHistory();
  const location = useLocation();
  const [candidateName, setCandidateName] = useState("");
  const [age, setAge] = useState("");
  const [average, setAverage] = useState("");
  const [CNP, setCNP] = useState("");
  let isEditing = false;

  function handleSubmit() {
    if (!candidateName || candidateName.length < 3) {
      ToastAndroid.show("Invalid Task Text!", ToastAndroid.SHORT);
    } else {
      const newCandidate = {
        Name: candidateName,
        Age: age,
        Average: average,
        CNP: CNP,
      };

      if (location.state) {
        fetch(`${apiUrl}/${location.state.id}.json`, {
          method: "PUT",
          body: JSON.stringify(newCandidate),
          headers: {
            "Content-Type": "application/json",
          },
        }).then(() => {
          ToastAndroid.show("Task edited!", ToastAndroid.SHORT);
          history.push("/");
        });
      } else {
        fetch(`${apiUrl}.json`, {
          method: "POST",
          body: JSON.stringify(newCandidate),
          headers: {
            "Content-Type": "application/json",
          },
        }).then(() => {
          ToastAndroid.show("Task added!", ToastAndroid.SHORT);
          history.push("/candidates");
        });
      }
    }
  }

  //   useEffect(() => {
  //     if (location.state && location.state.id !== "") {
  //       isEditing = true;
  //       setCandidateName(location.state.text);
  //       setAge(location.state.date);
  //     }
  //   }, []);
  return (
    <View style={styles.formContainer}>
      <Image
        style={styles.image}
        source={require("../assets/candidate2.png")}
      />
      <TextInput
        onChangeText={(text) => setCandidateName(text)}
        style={styles.inputField}
        value={candidateName}
        placeholder="Nume"
      ></TextInput>
      <TextInput
        onChangeText={(text) => setAge(text)}
        style={styles.inputField}
        value={age}
        placeholder="Varsta"
      ></TextInput>
      <TextInput
        onChangeText={(text) => setCNP(text)}
        style={styles.inputField}
        value={CNP}
        placeholder="CNP"
      ></TextInput>
      <TextInput
        onChangeText={(text) => setAverage(text)}
        style={styles.inputField}
        value={average}
        placeholder="Medie admitere"
      ></TextInput>

      <View style={styles.buttonContainer}>
        <Button
          onPress={handleSubmit}
          title="Adăugare candidat"
          color="#3CB371"
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    width: "100%",
    padding: 24,
    display: "flex",
    alignItems: "flex-start",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputField: {
    borderWidth: 1,
    borderColor: "#c9c9c9",
    borderRadius: 4,
    height: 48,
    padding: 16,
    width: "100%",
    marginBottom: 8,
  },
  buttonContainer: {
    width: "100%",
    marginTop: 15,
  },
  image: {
    width: 45,
    height: 45,
    marginBottom: 15,
  },
});
