import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  avatar: {
    width: 65,
    height: 65,
    borderRadius: 50,
    marginRight: 10,
  },
  container: {
    flexDirection: "row",
    width: "100%",
    padding: 10,
    justifyContent: "space-between",
  },
  leftContainer: {
    flexDirection: "row",
    width: "80%",
  },
  username: {
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 5,
  },
  lastMessage: {
    fontSize: 16,
    color: "grey",
    paddingRight: 15,
  },
  middleContainer: {
    paddingLeft: 5,
    overflow: "hidden",
  },
  time: {
    fontSize: 14,
    color: "grey",
    marginRight: 10,
  },
});

export default styles;
