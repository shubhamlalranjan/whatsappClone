import * as React from "react";
import { StyleSheet, FlatList } from "react-native";
import ChatListItem from "../components/ChatListItem";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import ChatRooms from "../data/ChatRooms";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={ChatRooms}
        renderItem={({ item }) => <ChatListItem chatRoom={item} />}
        keyExtractor={(item, index) => `${item.id}`}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
