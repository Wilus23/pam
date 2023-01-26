import { View, Text, Button, FlatList, StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import tasksJSON from "./tasks.json";
import TaskComponent from "./TaskComponent";
export default function Zad5() {
  const tasks = tasksJSON;

  return (
    <View>
      <FlatList
        styles={styles.appContainer}
        data={tasks}
        keyExtractor={(tasks) => tasks.id.toString()}
        renderItem={({ item }) => (
          <TaskComponent
            title={item.name}
            time={item.date.time}
            date={item.date.detail}
            description={item.description}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    width: "100%",
  },
});
