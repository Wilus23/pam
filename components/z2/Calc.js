import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Calc = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  //   const [action, setAction] = useState("");
  const [result, setResult] = useState(0);

  const handleValue1 = (text) => {
    setValue1(text);
    console.log(value1);
  };
  const handleValue2 = (text) => {
    setValue2(text);
    console.log(value2);
  };

  const handleAdition = () => {
    const number1 = value1;
    const number2 = value2;
    setResult(parseInt(number1) + parseInt(number2));
  };
  const handleSubtract = () => {
    const number1 = value1;
    const number2 = value2;
    setResult(parseInt(number1) - parseInt(number2));
  };
  const handleMultiplication = () => {
    const number1 = value1;
    const number2 = value2;
    setResult(parseInt(number1) * parseInt(number2));
  };
  const handleDivision = () => {
    const number1 = value1;
    const number2 = value2;
    setResult(parseInt(number1) / parseInt(number2));
  };

  return (
    <View>
      <TextInput
        placeholder="Podaj pierwszą liczbę"
        keyboardType="numeric"
        style={styles.input}
        onChangeText={handleValue1}
        value={value1}
      />
      <TextInput
        placeholder="Podaj drugą liczbę"
        keyboardType="numeric"
        style={styles.input}
        onChangeText={handleValue2}
        value={value2}
      />
      {/* Na kliknięcie przycisku, zmieniam stan, następnie triggeruję funkcję i zwracam wynik do <Text>{resulut}</Text> */}
      <View style={styles.btn_container}>
        <Button title="+" style={styles.btn} onPress={handleAdition} />
        <Button title="-" style={styles.btn} onPress={handleSubtract} />
        <Button title="*" style={styles.btn} onPress={handleMultiplication} />
        <Button title="/" style={styles.btn} onPress={handleDivision} />
      </View>
      <View>
        <Text style={styles.result}>{result}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  btn_container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },
  btn: {
    borderBottomWidth: 100,
    width: 200,
    paddingVertical: 100,
  },
  result: {
    textAlign: "center",
    fontSize: 40,
    marginTop: 100,
  },
});

export default Calc;
