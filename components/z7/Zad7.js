import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Button,
  Alert,
} from "react-native";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("users.db");

export default function Zad7() {
  const [users, setUsers] = useState([]);
  const [subname, setSubname] = useState("");
  const [age, setAge] = useState("");
  const [ageFilter, setAgeFilter] = useState("");
  const [filterUsers, setFilterUsers] = useState();

  const [apiData, setApiData] = useState({});

  React.useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists users (id integer primary key not null, subname text, age text);"
      );
    });
    updateList();
  }, []);

  const saveItem = () => {
    db.transaction(
      (tx) => {
        tx.executeSql("insert into users (subname, age) values (?, ?);", [
          subname,
          age,
        ]);
      },
      null,
      updateList
    );
  };

  const saveAPIItem = async () => {
    let pageNumber = Math.floor(Math.random() * 100 + 1);
    // ! Fetchuję tutaj usera
    try {
      fetch(`https://dummyjson.com/users/${pageNumber}`)
        .then((res) => res.json())
        .then((json) => setApiData(json));
      // ! Zapisuję do bazy danych
      db.transaction(
        (tx) => {
          tx.executeSql("insert into users (subname, age) values (?, ?);", [
            apiData.lastName,
            apiData.age,
          ]);
        },
        null,
        updateList
      );
    } catch (error) {
      console.log(eror);
    }
    console.log(apiData.age);
  };

  const updateList = () => {
    db.transaction((tx) => {
      tx.executeSql("select * from users;", [], (_, { rows }) =>
        setUsers(rows._array)
      );
    });
  };

  // ! Tutaj uwaga, bo może być problem z "updateList"
  const filterList = () => {
    db.transaction((tx) => {
      `select * from users where age = ${ageFilter}`,
        [],
        (_, { rows }) => setUsers(rows._array);
    });
  };

  const deleteItem = (id) => {
    db.transaction(
      (tx) => {
        tx.executeSql(`delete from users where id = ?;`, [id]);
      },
      null,
      updateList
    );
  };

  const showAlert = (subname, age, id) => {
    alert(`Nazwisko: ${subname}\nWiek: ${age}`);
    Alert.alert(
      `Wyświetlasz szczegóły użytkownika`,
      'Kliknij "dalej"',
      [
        {
          text: "Dalej",
          style: "cancel",
        },
      ],
      { cancelable: false }
    );
  };

  const handleSearch = (ageFilter) => {
    db.transaction((tx) => {
      tx.executeSql(
        "select * from users where age = ?;",
        [ageFilter],
        (_, { rows }) => setFilterUsers(rows._array)
      );
      console.log(filterUsers);
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Subname"
        style={styles.input}
        value={subname}
        onChangeText={(subname) => setSubname(subname)}
      />
      <TextInput
        placeholder="Age"
        style={styles.input}
        value={age}
        onChangeText={(age) => setAge(age)}
      />

      <TouchableOpacity onPress={saveItem}>
        <Text style={styles.btnText}>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={saveAPIItem}>
        <Text style={styles.btnText}>Save random person to API</Text>
      </TouchableOpacity>
      <FlatList
        style={{ marginLeft: "5%" }}
        keyExtractor={(item) => item.id.toString()}
        data={users}
        renderItem={({ item }) => (
          <View style={styles.list}>
            <Text onPress={() => showAlert(item.subname, item.age)}>
              {item.subname}
            </Text>

            <TouchableOpacity onPress={() => deleteItem(item.id)}>
              <Text style={styles.delete}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <TextInput
        placeholder="Filter by age"
        style={styles.input}
        value={ageFilter}
        onChangeText={(ageFilter) => {
          setAgeFilter(ageFilter);
          console.log(ageFilter);
          handleSearch(ageFilter);
        }}
      />
      <FlatList
        data={filterUsers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.subname}</Text>
            <Text>{item.age}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
  btnText: {
    color: "darkslateblue",
    fontSize: 20,
    textAlign: "center",
  },
  list: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  delete: {
    color: "crimson",
  },
});
