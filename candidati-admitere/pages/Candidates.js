import { View, Button, ToastAndroid, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import CandidateList from "../components/CandidateList";
import { useHistory } from "react-router-native";
import { Searchbar } from "react-native-paper";

export default function Candidates() {
  const history = useHistory();
  const [candidates, setCandidates] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [oldCandidates, setOldCandidates] = useState([]);

  const onChangeSearch = (query) => {
    setSearchQuery(query);
    if (query != "") {
      let filteredCandidates = candidates.filter((candidate) =>
        candidate.Name.toLowerCase().includes(query.toLowerCase())
      );
      setCandidates(filteredCandidates);
      console.log(filteredCandidates);
    } else {
      setCandidates(oldCandidates);
    }
  };

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
          const candidate = {
            id: key,
            ...data[key],
          };
          candidates.push(candidate);
        }

        setCandidates(candidates);
        setOldCandidates(candidates);
        console.log("Here");
        console.log(candidates);
      });
  }, []);

  function navigateToAddCandidate() {
    history.push("/addCandidate");
  }

  function deleteCandidate(candidateId) {
    fetch(`${url}/${candidateId}.json`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      ToastAndroid.show("Candidat eliminat!", ToastAndroid.SHORT);
      const filter = candidates.filter((el) => el.id !== candidateId);
      setCandidates(filter);
    });
  }

  function editCandidate(candidate) {
    console.log("HERE");
    console.log(candidate);
    history.push({
      pathname: "/addCandidate",
      state: candidate,
    });
  }

  return (
    <View style={styles.mainContainer}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <View style={styles.button}>
        <Button
          title="Adăugare candidat"
          color="#3CB371"
          onPress={navigateToAddCandidate}
        ></Button>
      </View>
      <CandidateList
        candidates={candidates}
        onDeleteParentCandidate={deleteCandidate}
        onEditParentCandidate={editCandidate}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    alignItems: "center",
  },
  button: {
    marginTop: 15,
    marginBottom: 15,
    width: "60%",
  },
  ImageIconStyle: {
    color: "white",
  },
});
