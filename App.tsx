import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Platform,
  StatusBar as SB,
} from "react-native";
import Home from "./app/components/Home";
import colours from "./app/config/colours";

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? SB.currentHeight : 0,
    backgroundColor: colours.light,
  },
});
