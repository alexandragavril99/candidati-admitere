import { View, Button, StyleSheet, ImageBackground } from "react-native";
import { useHistory } from "react-router-native";

export default function HomePage() {
  const history = useHistory();

  function navigateToAllCandidates() {
    history.push("/candidates");
  }

  function navigateToAddCandidate() {
    history.push("/addCandidate");
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/school.jpg")}
        style={styles.image}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Vizualizare candidați"
          style={styles.button}
          onPress={navigateToAllCandidates}
          color="#3CB371"
        />
        <View style={styles.space} />
        <Button
          title="Adăugare candidat"
          style={styles.button}
          color="#3CB371"
          onPress={navigateToAddCandidate}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    width: 250,
  },
  button: {
    backgroundColor: "#3CB371",
  },
  space: {
    width: 20,
    height: 20,
  },
  image: {
    width: "100%",
    height: "110%",
    resizeMode: "cover",
    position: "absolute",
  },
});
