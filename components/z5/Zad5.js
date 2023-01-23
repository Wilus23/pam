import { View, Text, Button, FlatList } from "react-native";
import React from "react";
ź;
import tasksJSON from "./tasks.json";
import TaskComponent from "./TaskComponent";
export default function Zad5() {
  const tasks = tasksJSON;

  return (
    <View>
      <FlatList
        data={tasks}
        keyExtractor={(tasks) => tasks.id.toString()}
        renderItem={({ item }) => (
          <TaskComponent
            title={item.name}
            time={item.date.time}
            date={item.date.detail}
          />
        )}
      />
    </View>
  );
}
