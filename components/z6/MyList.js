import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, Image, FlatList } from "react-native";

export default function MyList({data}) {
    
    return(
        <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.listContainer}>
            <Text style={styles.text}>Tytuł: {item.title}</Text>
            <Text>ID Właściciela: {item.owner}</Text>
            <Text>Numer serwera: {item.server}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    );
}

const styles = StyleSheet.create({
    text: {
      fontSize: 20,
      color: 'blue',
    },
    listContainer:{
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginVertical: 20,
        backgroundColor: '#0e0',
        
    }
  });
  