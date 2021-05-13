import { useRoute } from "@react-navigation/native";
import React from "react";
import { Text } from "react-native";
import { StyleSheet, View } from "react-native";

function ChatRoomScreen() {
  const route = useRoute();
  const param = route.params;
  return (
    <View style={styles.container}>
      <Text> On Chat Room Page </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ChatRoomScreen;
