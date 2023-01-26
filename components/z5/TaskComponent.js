import {
  View,
  Text,
  Button,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";

export default function TaskComponent({ title, time, date, description }) {
  const [done, setDone] = useState(false);

  const handleDone = () => {
    setDone(!done);
    console.log(done);
  };

  const createThreeButtonAlert = () => Alert.alert("Opis zadania", description);

  return (
    <TouchableOpacity onPress={createThreeButtonAlert}>
      <View style={styles.taskContainer}>
        <View style={styles.innerTask}>
          <Text style={styles.item}>{title}</Text>
          <View style={styles.date}>
            <Text>{time}</Text>
            <Text>{date}</Text>
          </View>
          <TouchableOpacity onPress={handleDone}>
            <Image
              source={done ? require("./accept.png") : require("./cross.png")}
              style={{ width: 28, height: 28 }}
              resizeMode={"cover"}
              onPress={handleDone}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginTop: 10,
  },
  innerTask: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "green",
    marginBottom: 10,
    paddingTop: 4,
    paddingBottom: 4,
  },
  item: {
    flexWrap: "wrap",
    width: "20%",
  },
  date: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
  },
  img: {
    width: 400,
    height: 400,
  },
});
