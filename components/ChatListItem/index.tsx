import React from "react";
import { Text, Image, View, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Dayjs from "dayjs";

import { ChatRoom } from "../../types";
import styles from "./style";

export type chatListItemProps = {
  chatRoom: ChatRoom;
};

function ChatListItem(props: chatListItemProps) {
  const { chatRoom } = props;
  const user = chatRoom.users[1];

  const navigation = useNavigation();

  const onClick = () => {
    navigation.navigate("ChatRoom", {
      id: chatRoom.id,
      name: user.name,
      imageUri: user.imageUri,
    });
  };
  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image style={styles.avatar} source={{ uri: `${user.imageUri}` }} />
          <View style={styles.middleContainer}>
            <Text style={styles.username}>{user.name}</Text>
            <Text style={styles.lastMessage} numberOfLines={1}>
              {chatRoom.lastMessage.content}
            </Text>
          </View>
        </View>
        <Text style={styles.time}>
          {Dayjs(String(chatRoom.lastMessage.createdAt))
            .format("DD/MM/YY")
            .toString()}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default ChatListItem;
