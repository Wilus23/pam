import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import MyList from "./MyList";

export default function Zad5() {
  const [data, setData] = useState();

  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=a542621c2bc88f38644505f256085716&user_id=69687337%40N08&format=json&nojsoncallback=1`)
      .then((res) => res.json())
      .then((json) => setData(json.photos.photo));
      console.log(data)
      console.log(refresh)
  }, [refresh]);


  return (
    <View>
       <Button
        title="Załaduj dane"
        onPress={() => {setRefresh(refresh + 1)}} />

      {/* {!data ? (
        <Text>Loading</Text>
      ) : (
        <View>
          <Text>Nazwa użytkownika: {data.username}</Text>
          <Text>Imię: {data.firstName}</Text>
          <Text>Nazwisko: {data.lastName}</Text>
          <Text>Wiek: {data.age}</Text>
        </View>
      )} */}
      


      <Button
        title="Resetuj dane"
        onPress={() => {
          setData(null);
          }}/>
          <MyList data={data} />
          
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
