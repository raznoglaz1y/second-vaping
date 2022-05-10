import React from "react";
import { StyleSheet, SafeAreaView, Platform } from "react-native";

function Screen({ children, style }) {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1
  },
});

export default Screen;
