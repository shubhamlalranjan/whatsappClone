import moment from "moment";
import React from "react";
import { Text, Image } from "react-native";
import { View } from "react-native";
import Dayjs from "dayjs";

import { ChatRoom } from "../../types";
import styles from "./style";

export type chatListItemProps = {
  chatRoom: ChatRoom;
};

function ChatListItem(props: chatListItemProps) {
  const { chatRoom } = props;
  const user = chatRoom.users[1];
  return (
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
  );
}

export default ChatListItem;
