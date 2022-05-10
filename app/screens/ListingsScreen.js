import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";

const listings = [
  {
    id: 1,
    title: "Продам мод Vaporesso",
    price: 100,
    image: require("../assets/mod.jpg"),
  },
  {
    id: 2,
    title: "Продам мод Cloupor",
    price: 200,
    image: require("../assets/mod.jpg"),
  },
];

function ListingsScreen(props) {
  return (
    <Screen style={styles.container}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
      padding: 20,
  },
});

export default ListingsScreen;
