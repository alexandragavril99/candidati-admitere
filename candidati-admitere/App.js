import { NativeRouter, Switch, Route, BackButton } from "react-router-native";
import { StyleSheet, StatusBar, Text, View, ToastAndroid } from "react-native";
import Candidates from "./pages/Candidates";
import AddCandidate from "./pages/AddCandidate";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <NativeRouter>
      <BackButton>
        <View style={styles.container}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/candidates" component={Candidates} />
            <Route exact path="/addCandidate" component={AddCandidate} />
          </Switch>
        </View>
      </BackButton>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 24,
  },
});
