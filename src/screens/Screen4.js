import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import NextButton from "../components/NextButton";
import ShowProgress from "../components/ShowProgress";

export default function Screen4({ tab, setTab }) {
  const [clicked, setClicked] = useState(0);
  const [meritClicked, setMeritClicked] = useState(0);

  function determineColor(point) {
    if (point === clicked) {
      return "#fb923c";
    }

    return "#ffffff";
  }

  function meritColor(point) {
    if (point === meritClicked) {
      return "#fb923c";
    }

    return "#ffffff";
  }

  //
  //
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 35,
          textAlign: "center",
          color: "orange",
          fontWeight: "bold",
          marginTop: "15%",
          marginBottom: "10%",
        }}
      >
        Key Advantages of React Native:
      </Text>

      <Text
        onPress={() => setClicked(1)}
        style={{ color: determineColor(1), fontSize: 22, marginBottom: 50 }}
      >
        <Dash />
        {"  "}
        Single Codebase Development
      </Text>

      <Text
        onPress={() => setClicked(2)}
        style={{ color: determineColor(2), fontSize: 22, marginBottom: 50 }}
      >
        <Dash />
        {"  "}
        Cross-Platform Components
      </Text>

      <Text
        onPress={() => setClicked(3)}
        style={{ color: determineColor(3), fontSize: 22, marginBottom: 50 }}
      >
        <Dash />
        {"  "}
        Platform-Specific Code Implementation
      </Text>

      <Text
        onPress={() => setClicked(4)}
        style={{ color: determineColor(4), fontSize: 22, marginBottom: 50 }}
      >
        <Dash />
        {"  "}
        Hot Reloading and Fast Iteration
      </Text>

      <Text
        onPress={() => setClicked(5)}
        style={{ color: determineColor(5), fontSize: 22, marginBottom: 10 }}
      >
        <Dash />
        {"  "}
        Code reusability
      </Text>

      {clicked === 5 && (
        <View style={{ marginLeft: 50 }}>
          <Text style={styles.merits} onPress={() => setMeritClicked(1)}>
            <View
              style={{
                height: 10,
                width: 10,
                backgroundColor: meritColor(1),
                borderRadius: 10,
              }}
            />{" "}
            Time and Cost Efficiency
          </Text>

          <Text style={styles.merits} onPress={() => setMeritClicked(2)}>
            <View
              style={{
                height: 10,
                width: 10,
                backgroundColor: meritColor(2),
                borderRadius: 10,
              }}
            />{" "}
            Consistent User Experience
          </Text>

          <Text style={styles.merits} onPress={() => setMeritClicked(3)}>
            <View
              style={{
                height: 10,
                width: 10,
                backgroundColor: meritColor(3),
                borderRadius: 10,
              }}
            />{" "}
            Faster Development Cycles
          </Text>

          <Text style={styles.merits} onPress={() => setMeritClicked(4)}>
            <View
              style={{
                height: 10,
                width: 10,
                backgroundColor: meritColor(4),
                borderRadius: 10,
              }}
            />{" "}
            Easier Collaboration
          </Text>
        </View>
      )}

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

function Circle() {
  return (
    <View
      style={{
        height: 10,
        width: 10,
        backgroundColor: "#fb923c",
        borderRadius: 10,
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    // alignItems: "center",
    // justifyContent: "center",
    padding: 20,
  },

  merits: { color: "#ffffff", marginVertical: 10, fontSize: 15 },
});
