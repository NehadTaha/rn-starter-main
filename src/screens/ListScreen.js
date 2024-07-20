import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    {
      name: "Friend#1",
      age: 20,
    },
    {
      name: "Friend#2",
      age: 45,
    },
    {
      name: "Friend#3",
      age: 32,
    },
    {
      name: "Friend#4",
      Age: 27,
    },
    {
      name: "Friend#5",
      Age: 53,
    },
    {
      name: "Friend#6",
      age: 30,
    },
  ];
  return (
    <View>
      <Text>List</Text>
      <FlatList
        //horizontal  //to make the list horizontal
        //showsHorizontalScrollIndicator={false} //to remove the scroll bar
        ///keyExtractor is used to give a unique key to each item in the list because if i remove one item i don't need to render all the list again it will only render the item which is removed
        keyExtractor={(friend) => friend.name}
        data={friends}
        renderItem={({ item }) => {
          return (
            <Text style={styles.textStyle}>
              {item.key}
              {item.name} - Age {item.age}
            </Text>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    // padding : 10
    marginVertical: 50,
  },
});

export default ListScreen;
