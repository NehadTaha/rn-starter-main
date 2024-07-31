import { StyleSheet, Text, View } from "react-native";
import React from "react";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child #1</Text>
      <Text style={styles.textTwoStyle}>Child #2</Text>
      <Text style={styles.textThreeStyle}>Child #3</Text>
    </View>
  );
};

export default BoxScreen;

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    // alignItems: "flex-start",
    //alignItems: "center",
    //alignItems: "flex-end",
    flexDirection: "row",
    height: 200,
    //justifyContent: "space-around",
    //justifyContent: "space-between",
    //justifyContent: "centre",
    //justifyContent:"space-evenly"
  },
  textOneStyle: {
    borderWidth: 1,
    borderColor: "red",
    //alignSelf: "stretch",
    alignSelf: "center",
    flex: 4,
  },
  textTwoStyle: {
    borderWidth: 1,
    borderColor: "red",
    //alignSelf: "stretch",
    //alignSelf: "flex-start",
    flex: 4, //this will take up the remaining space
  },
  textThreeStyle: {
    borderWidth: 1,
    borderColor: "red",
    //alignSelf: "stretch",
    //alignSelf: "flex-start",
    flex: 2,
  },
});
