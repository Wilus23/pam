import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
  ScrollView,
  Alert,
  Button,
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
import Zad5 from "./components/z5/Zad5";
import Zad6 from "./components/z6/Zad6";

export default function App() {
  return (
    <View style={styles.body}>
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
          {/* <Text style={styles.title}>Zadanie 4:</Text> */}
          {/* <Zad4 /> */}
          <Text style={styles.title}>Zadanie 4 i 5:</Text>
          <Zad5 />
          <Text style={styles.title}>Zadanie 6:</Text>
          <Zad6 />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    marginLeft: 15,
    marginRight: 15,
  },
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
