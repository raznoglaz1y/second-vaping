import React from "react";
import { View, StyleSheet, Image, ImageBackground, Text } from "react-native";
import AppButton from "../components/AppButton";

import colors from "../config/colors";

function WelcomeScreen(props) {
  return (
    <ImageBackground
    blurRadius={1}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Text style={styles.tagline}>Вейп барахолка BelVaping</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title={"Вход"} color="primary" />
        <AppButton title={"Регистрация"} color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
    marginBottom: 30,
  },
  logo: {
    width: 200,
    height: 200,
  },
  logoContainer: {
    position: "absolute",
    top: 200,
    alignItems: "center",
  },
  tagline: {
    fontSize: 24,
    fontWeight: "600",
    paddingVertical: 20,
    color: colors.dark,
  },
});

export default WelcomeScreen;
