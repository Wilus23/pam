import { View, Text, Button, FlatList, Image, StyleSheet } from "react-native";
import React from "react";

export default function TaskComponent({ title, time, date }) {
  return (
    <View style={styles.taskContainer}>
      <View style={styles.innerTask}>
        <Text>{title}</Text>
        <View>
          <Text>{time}</Text>
          <Text>{date}</Text>
        </View>
        <Image
          source={require("./accept.png")}
          style={{ width: 28, height: 28 }}
          resizeMode={"cover"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    width: "80%",
    display: "flex",
    flexDirection: "row",
    alignContent: "space-between",
  },
  innerTask: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "space-around",
  },
  img: {
    width: 400,
    height: 400,
  },
});
