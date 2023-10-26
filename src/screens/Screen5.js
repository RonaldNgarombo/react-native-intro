import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import NextButton from "../components/NextButton";
import ShowProgress from "../components/ShowProgress";

export default function Screen5({ tab, setTab }) {
  const [clicked, setClicked] = useState(0);

  function determineColor(point) {
    if (point === clicked) {
      return "#fb923c";
    }

    return "#e11d48";
  }

  //
  //
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 35,
          textAlign: "center",
          color: "#9f1239",
          fontWeight: "bold",
          marginTop: "25%",
          marginBottom: "50%",
        }}
      >
        Any Prerequisites?
      </Text>

      <Text
        onPress={() => setClicked(1)}
        style={{ color: determineColor(1), fontSize: 30, marginBottom: 50 }}
      >
        <Dash />
        {"  "}
        JavaScript
      </Text>

      <Text
        onPress={() => setClicked(2)}
        style={{ color: determineColor(2), fontSize: 30, marginBottom: 50 }}
      >
        <Dash />
        {"  "}
        React
      </Text>

      <ShowProgress tab={tab} setTab={setTab} />

      <NextButton setTab={setTab} />
    </View>
  );
}

function Dash() {
  return (
    <View
      style={{
        height: 5,
        width: 10,
        backgroundColor: "#ffffff",
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fecaca",
    alignItems: "center",
    // justifyContent: "center",
    padding: 20,
  },

  merits: { color: "#ffffff", marginVertical: 10, fontSize: 15 },
});
