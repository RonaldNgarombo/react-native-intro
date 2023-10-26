import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ShowProgress({ tab, setTab }) {
  function determineColor(point) {
    if (point === tab) {
      return "#ffffff";
    }

    return "#9ca3af";
  }

  //
  //
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Pressable
          onPress={() => setTab(1)}
          style={{
            width: tab === 1 ? 20 : 10,
            height: 10,
            backgroundColor: determineColor(1),
            borderRadius: 10,
            marginHorizontal: 2.5,
          }}
        />

        <Pressable
          onPress={() => setTab(2)}
          style={{
            width: tab === 2 ? 20 : 10,
            height: 10,
            backgroundColor: determineColor(2),
            borderRadius: 10,
            marginHorizontal: 2.5,
          }}
        />

        <Pressable
          onPress={() => setTab(3)}
          style={{
            width: tab === 3 ? 20 : 10,
            height: 10,
            backgroundColor: determineColor(3),
            borderRadius: 10,
            marginHorizontal: 2.5,
          }}
        />

        <Pressable
          onPress={() => setTab(4)}
          style={{
            width: tab === 4 ? 20 : 10,
            height: 10,
            backgroundColor: determineColor(4),
            borderRadius: 10,
            marginHorizontal: 2.5,
          }}
        />

        <Pressable
          onPress={() => setTab(5)}
          style={{
            width: tab === 5 ? 20 : 10,
            height: 10,
            backgroundColor: determineColor(5),
            borderRadius: 10,
            marginHorizontal: 2.5,
          }}
        />

        <Pressable
          onPress={() => setTab(6)}
          style={{
            width: tab === 6 ? 20 : 10,
            height: 10,
            backgroundColor: determineColor(6),
            borderRadius: 10,
            marginHorizontal: 2.5,
          }}
        />

        <Pressable
          onPress={() => setTab(7)}
          style={{
            width: tab === 7 ? 20 : 10,
            height: 10,
            backgroundColor: determineColor(7),
            borderRadius: 10,
            marginHorizontal: 2.5,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 35,
    right: "40%",
    // backgroundColor: "#ffffff",
    // padding: 10,
    // borderRadius: 20,
    // paddingHorizontal: 30,
    // borderWidth: 1.5,
  },
});
