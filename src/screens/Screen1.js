import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import ShowProgress from "../components/ShowProgress";

export default function Screen1({ tab, setTab }) {
  const rotation = useSharedValue(0);
  const startSize = useSharedValue(1);

  // Rotate image indefinitely
  rotation.value = withRepeat(
    withTiming(360, {
      duration: 5000,
      easing: Easing.linear,
    }),
    -1,
    true
  );

  // Scale start button up and down
  startSize.value = withRepeat(
    withSpring(1.5, {
      damping: 5,
    }),
    -1,
    true
  );

  const rotateStyles = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
    };
  });

  //
  //
  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("../assets/rn_logo.png")}
        style={[styles.image, rotateStyles]}
        resizeMode="contain"
      />

      <Text style={{ fontSize: 35, color: "#e0f2fe", marginTop: 20 }}>
        Introduction to
      </Text>

      <Text style={{ fontSize: 45, color: "#ffffff", marginTop: 30 }}>
        REACT NATIVE
      </Text>

      <View style={[styles.btnStartContainer]}>
        <Text
          style={{ fontSize: 25 }}
          onPress={() => setTab((prev) => prev + 1)}
        >
          Start
        </Text>
      </View>

      <ShowProgress tab={tab} setTab={setTab} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0369a1",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: 200,
    height: 200,
  },

  btnStartContainer: {
    marginTop: 50,
    backgroundColor: "#ffffff",
    paddingHorizontal: 25,
    paddingVertical: 5,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: "#000000",
  },
});
