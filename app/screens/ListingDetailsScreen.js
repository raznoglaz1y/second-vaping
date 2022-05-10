import React from "react";
import { Image, View, StyleSheet } from "react-native";

import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

function ListingDetailsScreen(props) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/mod.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Продам мод Vaporesso</AppText>
        <AppText style={styles.price}>100$</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/john.jpg")}
            title="John Doe"
            subTitle="5 объявлений"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    fontWeight: "600",
    color: colors.secondary,
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontWeight: "600",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
