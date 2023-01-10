import { View, Text } from "react-native";
import React, { useEffect } from "react";
import axios from "axios";
import customData from "./customData.json";
export default function Zad4() {
  useEffect(() => {
    const result = JSON.stringify(customData);
    console.log(result);

    // fetch("./message.txt")
    //   .then((r) => r.text())
    //   .then((text) => {
    //     console.log(text);
    //   });
  }, []);
  return (
    <View>
      <Text>Zad4</Text>
    </View>
  );
}
