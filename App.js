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
// zadanie3
import Form from "./components/z3/Form";
// import Test from "./components/zad3/Test";

export default function App() {
  return (
    <View>
      <StatusBar />
      <ScrollView>
        <View style={styles.app}>
          <Text style={styles.title}>Zadanie 1: Layout1</Text>
          <Layout1 />
          <View style={styles.layout1}>
            <Text style={styles.title}>Zadanie 1: Layout2</Text>
            <Layout2 />
          </View>
          <Calc />
          <Form />
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
    margin: 180,
  },
  title: {
    fontWeight: 700,
    fontSize: 30,
    textAlign: "center",
  },
});
