import React, {useState} from "react";
import { StyleSheet, FlatList } from "react-native";

import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";


  const initialMessages = [
    {
      id: 1,
      title: "T1",
      description: "D1",
      image: require("../assets/john.jpg"),
    },
    {
      id: 2,
      title: "T2",
      description: "D2",
      image: require("../assets/john.jpg"),
    },
    {
      id: 3,
      title: "T3",
      description: "D3",
      image: require("../assets/john.jpg"),
    },
  ];

  function MessagesScreen(props) {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);
  
    const handleDelete = (message) => {
      // Delete the message from messages
      setMessages(messages.filter((m) => m.id !== message.id));
    };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Pressed", item)}
            renderRightActions={() => (
                <ListItemDeleteAction onPress={() => handleDelete(item)} />
              )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
                id: 1,
                title: "T1",
                description: "D1",
                image: require("../assets/john.jpg"),
              },
            {
                id: 2,
                title: "T2",
                description: "D2",
                image: require("../assets/john.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
