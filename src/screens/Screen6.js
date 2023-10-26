import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import NextButton from "../components/NextButton";
import ShowProgress from "../components/ShowProgress";

export default function Screen6({ tab, setTab }) {
  //
  //
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 40,
          textAlign: "center",
          color: "orange",
          fontWeight: "bold",
          // marginTop: "20%",
          marginBottom: "20%",
        }}
      >
        What are the popular apps built with React Native?
      </Text>

      <Text style={{ fontSize: 100 }}>😃</Text>

      <NextButton setTab={setTab} />

      <ShowProgress tab={tab} setTab={setTab} />
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
    backgroundColor: "#6b21a8",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  merits: { color: "#ffffff", marginVertical: 10, fontSize: 15 },
});
