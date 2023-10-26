import { StyleSheet, Text, View } from "react-native";
import React from "react";

import NextButton from "../components/NextButton";
import ShowProgress from "../components/ShowProgress";

export default function Screen2({ tab, setTab }) {
  //
  //
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 35,
          color: "#1e40af",
          marginTop: 20,
          textAlign: "center",
          marginTop: "20%",
          fontWeight: "bold",
        }}
      >
        What is React Native? {"\n\n"} <Text style={{ fontSize: 60 }}>🤔</Text>
      </Text>

      <Text
        style={{
          color: "#4c0519",
          fontSize: 20,
          marginTop: "20%",
          letterSpacing: 1,
          lineHeight: 30,
          fontWeight: "600",
        }}
      >
        React Native is an open-source mobile application framework created by
        Meta(Formally facebook) that allows developers to build mobile
        applications using only JavaScript.
      </Text>

      <Text
        style={{
          color: "#18181b",
          fontSize: 20,
          marginTop: "20%",
          letterSpacing: 1,
          lineHeight: 30,
        }}
      >
        It is a powerful tool that enables the development of cross-platform
        applications for both iOS and Android using a single codebase.
      </Text>

      <ShowProgress tab={tab} setTab={setTab} />

      <NextButton setTab={setTab} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6ee7b7",
    // alignItems: "center",
    // justifyContent: "center",
    padding: 20,
  },

  image: {
    width: 200,
    height: 200,
  },

  btnStart: {
    marginTop: 50,
    color: "#000000",
    fontSize: 20,
    backgroundColor: "#ffffff",
    paddingHorizontal: 25,
    paddingVertical: 5,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#000000",
  },
});
