import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Layout1 = () => {
  // 1. Ustawić cztery linijki
  // 2. Każdy prostokąt wyświetla 25% ekranu
  return (
    <View>
      <View style={styles.container}>
        {/* 1 linijka */}
        <View style={styles.line}>
          <View style={styles.block}>
            <Text style={styles.text}>Widok_1</Text>
          </View>
        </View>
        {/* 2 linijka */}
        <View style={styles.line}>
          <View style={[styles.block, { backgroundColor: "lightgreen" }]}>
            <Text style={styles.text}>Widok_2</Text>
          </View>

          <View style={[styles.block, { backgroundColor: "pink" }]}>
            <Text style={styles.text}>Widok_3</Text>
          </View>
        </View>

        {/* 3 linijka */}
        <View style={styles.line}>
          <View style={[styles.block, { backgroundColor: "red" }]}>
            <Text style={styles.text}>Widok_4</Text>
          </View>
          <View style={[styles.block, { backgroundColor: "black" }]}>
            <Text style={[styles.text, { color: "white" }]}>Widok_5</Text>
          </View>
          <View style={[styles.block, { backgroundColor: "lightblue" }]}>
            <Text style={styles.text}>Widok_6</Text>
          </View>
        </View>

        {/* 4 linijka */}
        <View style={styles.line}>
          <View style={styles.block}>
            <Text style={styles.text}>Widok_7</Text>
          </View>
          <View style={[styles.block, { backgroundColor: "pink" }]}>
            <Text style={styles.text}>Widok_8</Text>
          </View>
          <View style={[styles.block, { backgroundColor: "lightgray" }]}>
            <Text style={styles.text}>Widok_9</Text>
          </View>
          <View style={[styles.block, { backgroundColor: "lightblue" }]}>
            <Text style={styles.text}>Widok_10</Text>
          </View>
        </View>
      </View>
    </View>



  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
  },
  line: {
    flexDirection: "row",
  },
  block: {
    width: "25%",
    height: 54,
    backgroundColor: "yellow",
  },
  text: {
    color: "black",
  },
});

export default Layout1;
