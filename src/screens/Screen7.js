import { StyleSheet, Text, View } from "react-native";
import React from "react";

import ShowProgress from "../components/ShowProgress";

export default function Screen7({ tab, setTab }) {
  //
  //
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 55,
          textAlign: "center",
          color: "orange",
          fontWeight: "bold",
          marginTop: "20%",
          marginBottom: "10%",
        }}
      >
        Thank you for watching!
      </Text>

      <Text style={{ fontSize: 50 }}>🙏</Text>

      <Text style={{ color: "#38bdf8", fontSize: 50, marginTop: "30%" }}>
        Like &
      </Text>

      <Text
        style={{
          fontSize: 40,
          color: "#ffffff",
          backgroundColor: "red",
          marginTop: "10%",
          paddingHorizontal: 30,
          paddingVertical: 10,
          borderRadius: 10,
        }}
      >
        SUBSCRIBE
      </Text>

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
    backgroundColor: "#000000",
    alignItems: "center",
    // justifyContent: "center",
    padding: 20,
  },

  merits: { color: "#ffffff", marginVertical: 10, fontSize: 15 },
});
