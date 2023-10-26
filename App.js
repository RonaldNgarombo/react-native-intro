import { StyleSheet, Text, View } from "react-native";
import Screen1 from "./src/screens/Screen1";
import Screen2 from "./src/screens/Screen2";
import Screen3 from "./src/screens/Screen3";
import Screen4 from "./src/screens/Screen4";
import Screen5 from "./src/screens/Screen5";
import Screen6 from "./src/screens/Screen6";
import Screen7 from "./src/screens/Screen7";

import { useState } from "react";

export default function App() {
  const [tab, setTab] = useState(1);

  //
  //
  return (
    <View style={styles.container}>
      {tab === 1 && <Screen1 tab={tab} setTab={setTab} />}

      {tab === 2 && <Screen2 tab={tab} setTab={setTab} />}

      {tab === 3 && <Screen3 tab={tab} setTab={setTab} />}

      {tab === 4 && <Screen4 tab={tab} setTab={setTab} />}

      {tab === 5 && <Screen5 tab={tab} setTab={setTab} />}

      {tab === 6 && <Screen6 tab={tab} setTab={setTab} />}

      {tab === 7 && <Screen7 tab={tab} setTab={setTab} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
