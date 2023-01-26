// import React, { useEffect, useState } from "react";
// import { View, Text } from "react-native";

// export default function Zad5() {
//   const [data, setData] = useState();
//   useEffect(() => {
//     fetch("https://dummyjson.com/products/1")
//       .then((res) => res.json())
//       .then((json) => setData(json));
//   }, []);
//   return (
//     <View>
//       <Text>{data.brand}</Text>
//       <Text>{data.category}</Text>
//     </View>
//   );
// }

import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";

export default function Zad5() {
  const [data, setData] = useState();

  const [refresh, setRefresh] = useState(0);
  let pageNumber = Math.floor(Math.random() * 100 + 1);

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${pageNumber}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, [refresh]);
  return (
    <View>
      <Button
        title="Nowa osoba"
        onPress={() => {
          setRefresh(refresh + 1);
        }}
      ></Button>
      {!data ? (
        <Text>Loading</Text>
      ) : (
        <View>
          <Text>Nazwa użytkownika: {data.username}</Text>
          <Text>Imię: {data.firstName}</Text>
          <Text>Nazwisko: {data.lastName}</Text>
          <Text>Wiek: {data.age}</Text>
          {/* <Image style={styles.img} source={{ uri: `${data.image}` }} /> */}
        </View>
      )}
      <Button
        title="Resetuj dane"
        onPress={() => {
          setData({});
        }}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  img: {
    width: 100,
    height: 100,
  },
});
