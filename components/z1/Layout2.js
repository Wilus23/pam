import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Layout2 = () => {
  // 1. Ustawić cztery linijki
  // 2. Każdy prostokąt wyświetla 25% ekranu
  return (
    <View style={styles.margining}>
      <View style={styles.container}>
        {/* 1 linijka */}
        <View style={styles.line}>
          <View style={[styles.block, { opacity: 0 }]}>
            <Text style={styles.text}>Widok_1</Text>
          </View>
        </View>
        {/* 2 linijka */}
        <View style={styles.line}>
          <View
            style={[
              styles.block,
              { backgroundColor: "lightgreen", opacity: 0 }
            ]}
          >
            <Text style={styles.text}>Widok_2</Text>
          </View>

          <View style={[styles.block, { backgroundColor: "pink" }]}>
            <Text style={styles.text}>Widok_3</Text>
          </View>
          
          <View style={[styles.block, { opacity: 0  }]}>
            <Text style={styles.text}>Widok_3</Text>
          </View>
          
          
        </View>

        {/* 3 linijka */}
        <View style={[styles.line, { justifyContent: "center" }]}>
          {/* <View style={[styles.block, { backgroundColor: "red", opacity: 0 }]}>
            <Text style={styles.text}>Widok_4</Text>
          </View> */}
          <View style={[styles.block, { opacity: 0  }]}>
            <Text style={styles.text}>Widok_5.1</Text>
          </View>
          <View style={[styles.block, { backgroundColor: "black" }]}>
            <Text style={[styles.text, { color: "white" }]}>Widok_5</Text>
          </View>
          <View style={[styles.block, { backgroundColor: "lightblue" }]}>
            <Text style={styles.texth}>Widok_6</Text>
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
    justifyContent: "center",
  },
  
  block: {
    width: "25%",
    height: 54,
    backgroundColor: "yellow",
  },
  text: {
    color: "black",
  },
  margining: {
    height: 100,
  },
});

export default Layout2;
