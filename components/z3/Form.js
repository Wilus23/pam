// Skończyłem na check1 oraz jego checkboxie. Ogarnij błąd z checkami

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
// ! Nawigacja:
import DatePicker from "react-native-modern-datepicker";
import { CheckBox, ButtonGroup } from "@rneui/themed";

import AsyncStorage from "@react-native-async-storage/async-storage";
import FormDetails from "./FormDetails";
// import { Button } from "@rneui/base";
// Checkbox jest zaimportowany z https://reactnativeelements.com/

export default function Form({ navigation }) {
  // Nawigacja:
  // ! Pojedyncze dane
  /* TODO: 
    1. imię
    2. nazwisko
    3. wiek
    4. adres
    5. data
    6. płeć
  */
  const [name, setName] = useState("");
  const [subname, setSubname] = useState("");
  const [age, setAge] = useState(null);
  const [adress, setAdress] = useState({
    city: "",
    street: "",
    apartment: null,
  });
  const [selectedDate, setSelectedDate] = useState("");
  // Płeć
  const [gender, setGender] = useState(0);
  const [statusGender, setStatusGender] = useState(0);

  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);

  // ! Obiekt ze wszystkimi danymi. Powyżej pojedyncze dane
  const [userData, setUserData] = useState({
    name: name,
    subname: subname,
    age: age,
    details: {
      city: adress.city,
      street: adress.street,
      apartment: adress.apartment,
    },
    date: selectedDate,
  });

  // Po przeładowaniu stanu, wykonują się następujące rzeczy dla sportów:

  // ! FUNKCJE, logika aplikacji
  //* Ustawienie wszystkich danych
  const hobbies = [];
  const handleViewingData = () => {
    if (check1 === true) {
      hobbies.push(" Piłka nożna ");
    }
    if (check2 === true) {
      hobbies.push(" Siatkówka ");
    }
    if (check3 === true) {
      hobbies.push(" Koszykówka ");
    }
    setUserData({
      name,
      subname,
      age,
      details: {
        ...adress,
        city: adress.city,
        street: adress.street,
        apartment: adress.apartment,
      },
      date: selectedDate,
      gender: statusGender,
      sports: hobbies,
    });
  };
  // Sprawdzanie sportów
  const handleSports1 = () => {
    setCheck1(!check1);
  };
  const handleSports2 = () => {
    setCheck2(!check2);
  };
  const handleSports3 = () => {
    setCheck3(!check3);
  };
  // !zad4
  const [text, setText] = useState("789");
  const [fileText, setFileText] = useState("");

  const writeFile = async () => {
    const userDataStringify = JSON.stringify(userData);
    console.log(userDataStringify);
    setText(userDataStringify);
    try {
      await AsyncStorage.setItem("myfile", userDataStringify);
    } catch (error) {
      console.log("Error writing to file: ", error);
    }
  };

  const readFile = async () => {
    try {
      const fileData = await AsyncStorage.getItem("myfile");
      setFileText(fileData);
    } catch (error) {
      console.log("Error reading file: ", error);
    }
  };
  const cleanFile = async () => {
    try {
      setFileText("");
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  // *! Poniżej widoki:
  return (
    <View>
      {/* Intro */}
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Witaj w formularezu rejestracji</Text>
      </View>
      {/* Imię */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Wpisz swoje imię"
          onChangeText={(text) => setName(text)}
          value={name}
          style={styles.inpucik}
        />
      </View>
      {/* Naziwsko */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Wpisz swoje nazwisko"
          onChangeText={(text) => setSubname(text)}
          value={subname}
          style={styles.inpucik}
        />
      </View>
      {/* Wiek */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Wpisz swój wiek"
          onChangeText={(text) => setAge(text)}
          value={age}
          style={styles.inpucik}
        />
      </View>
      {/* Adres */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Miejscowość"
          onChangeText={(text) => {
            setAdress({ ...adress, city: text });
          }}
          value={adress.city}
          style={styles.inpucik}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Ulica"
          onChangeText={(text) => {
            setAdress({ ...adress, street: text });
          }}
          value={adress.street}
          style={styles.inpucik}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Mieszkanie"
          onChangeText={(text) => {
            setAdress({ ...adress, apartment: text });
          }}
          value={adress.apartment}
          style={styles.inpucik}
        />
      </View>
      {/* Wybór daty */}
      <DatePicker
        mode="calendar"
        options={{
          headerAnimationDistance: 8,
        }}
        onSelectedChange={(date) => setSelectedDate(date)}
      />

      {/* Button - wysyłanie danych */}

      {/* Wybór płci */}
      <ButtonGroup
        buttons={["Kobieta", "Mężczyzna"]}
        selectedIndex={gender}
        onPress={(value) => {
          setGender(value);
          if (gender < 1) {
            setStatusGender("Mężczyzna");
          } else {
            setStatusGender("Kobieta");
          }
        }}
        containerStyle={{ marginBottom: 20 }}
      />
      <CheckBox
        center
        title="Piłka nożna"
        checked={check1}
        onPress={handleSports1}
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
      />
      <CheckBox
        center
        title="Siatkówka"
        checked={check2}
        onPress={handleSports2}
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
      />
      <CheckBox
        center
        title="Koszykówka"
        checked={check3}
        onPress={handleSports3}
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
      />
      <TouchableOpacity onPress={handleViewingData} style={styles.confirmBtn}>
        <Text style={styles.confirmBtnText}>Wyślij</Text>
      </TouchableOpacity>
      <Button
        title="Zobacz podsumowanie"
        onPress={() => navigation.navigate("Details", { userData })}
      />

      {/* <Text>Zainteresowania: {check1}</Text> */}
      {/* <Button 
    onPress={() => {
      navigation.navigate('FormDetails');
    }}
    /> */}

      <View style={styles.marginTop}>
        <Button title="Zapisz do pliku" onPress={writeFile} />
        <Button title="Odczytaj z pliku" onPress={readFile} />
        <Button title="Wyczyść plik" onPress={cleanFile} />
        <Text>{fileText}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeContainer: {
    marginTop: 40,
  },
  welcomeText: {
    fontSize: 20,
    textAlign: "center",
  },
  inputContainer: {
    justifyContent: "center",
    marginTop: "4%",
  },
  inpucik: {
    fontSize: 15,
    backgroundColor: "white",
    width: "80%",
    textAlign: "center",
    marginLeft: "10%",
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 20,
  },
  confirmBtn: {
    // elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    maxWidth: "70%",
    alignSelf: "center",
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  confirmBtnText: {
    color: "white",
    fontWeight: "bold",
  },
  marginTop: {
    marginTop: 40,
  },
  marginSmall: {
    marginTop: 20,
  },
});
