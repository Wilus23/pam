import { View, Text, Button } from "react-native";
import React, { useState } from "react";

export default function Test() {
  const [counter, setCounter] = useState(0);
  const [dodatni, setDodatni] = useState("");
  const handleCount = () => {
    setCounter(counter + 1);
    if (counter > 0) {
      setDodatni("Dodatni");
    }
  };
  return (
    <View>
      <Text>{counter}</Text>
      <Text>Counter +10: {dodatni}</Text>
      <Button title={"hello"} onPress={handleCount} />
    </View>
  );
}
