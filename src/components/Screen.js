import React from "react";
import Constant from "expo-constants";
import { StyleSheet, SafeAreaView } from "react-native";

function Screen({ children }) {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constant.statusBarHeight,
  },
});

export default Screen;
