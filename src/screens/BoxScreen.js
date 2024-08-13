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
    // top: 0, //this will move the text down by 100
    // left: 0, //this will move the text right by 100 
    // bottom: 0, //this will move the text up by 100
    // right: 0, //this will move the text left by 100
    // position: "absolute", //this will move the text to the top left corner and it will overlap with other text
    ...StyleSheet.absoluteFillObject, //this will move the text to the top left corner and it works as a shortcut for the above 4 lines 
//position : "relative", //this will move the text to the top left corner but it will not overlap with other text
  },
  textTwoStyle: {
    borderWidth: 1,
    borderColor: "red",
    //alignSelf: "stretch",
    //alignSelf: "flex-start",
    flex: 4, //this will take up the remaining space
    // position: "absolute",
    position: "absolute",
    
  },
  textThreeStyle: {
    borderWidth: 1,
    borderColor: "red",
    //alignSelf: "stretch",
    //alignSelf: "flex-start",
    flex: 2,
  },
});
