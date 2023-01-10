import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
  ScrollView,
} from "react-native";
//zadanie 1
import Layout1 from "./components/z1/Layout1";
import Layout2 from "./components/z1/Layout2";
//zadanie 2
import Calc from "./components/z2/Calc";
// zadanie 3
import Form from "./components/z3/Form";
// zadanie 4
import Zad4 from "./components/z4/Zad4";

export default function App() {
  return (
    <View>
      <StatusBar />
      <ScrollView>
        <View style={styles.app}>
          <View style={styles.layout1}>
            <Text style={styles.title}>Zadanie 1: Layout1</Text>
            <Layout1 />
          </View>
          <View style={styles.layout1}>
            <Text style={styles.title}>Zadanie 1: Layout2</Text>
            <Layout2 />
          </View>
          <Calc />
          <Form />
          <Text style={styles.title}>Zadanie 4:</Text>
          <Zad4 />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    display: "flex",
    flexDirection: "column",
  },
  layout1: {
    marginVertical: 180,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
  },
});
