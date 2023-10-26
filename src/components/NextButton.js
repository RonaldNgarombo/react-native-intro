import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function NextButton({ setTab }) {
  return (
    <Pressable
      style={styles.btnContainer}
      onPress={() => setTab((prev) => prev + 1)}
    >
      <Text>Next</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 20,
    paddingHorizontal: 30,
    borderWidth: 1.5,
  },
});
