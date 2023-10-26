import { StyleSheet, Text, View } from "react-native";
import React from "react";

import NextButton from "../components/NextButton";
import ShowProgress from "../components/ShowProgress";

export default function Screen3({ tab, setTab }) {
  //
  //
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 50 }}>😌</Text>

      <Text
        style={{
          fontSize: 25,
          color: "#ffffff",
          marginTop: 20,
          textAlign: "center",
          marginTop: "20%",
          fontWeight: "bold",
          lineHeight: 40,
          letterSpacing: 0.8,
        }}
      >
        By utilising React Native, developers can leverage their existing
        knowledge of React (a popular JavaScript library for building user
        interfaces) to create native mobile applications.
      </Text>

      <ShowProgress tab={tab} setTab={setTab} />

      <NextButton setTab={setTab} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4a044e",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});
