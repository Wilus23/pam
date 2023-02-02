import react, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

export default function Form(props) {
  const { navigation } = props;
  const { userData } = props.route.params;
  // const { name, subname, age } = userData;
  useEffect(() => {
    console.log(userData);
  }, []);
  return (
    <View>
      <Text>Imię: {userData.name}</Text>
      <Text>Nazwisko: {userData.subname}</Text>
      <Text>Wiek: {userData.age}</Text>
      <Text>Miasto: {userData.details.city}</Text>
      <Text>Warszawa: {userData.details.street}</Text>
      <Text>Mieszkanie: {userData.details.apartment}</Text>
      <Text>Data urodzenia: {userData.date}</Text>
      <Text>Płeć: {userData.gender}</Text>
      <Text>Sporty: {userData.sports}</Text>
    </View>
  );
}
