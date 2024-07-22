import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ColorCounter from "../Components/ColorCounter";
import { useState } from "react";

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  console.log("Green", green);
  console.log("Red", red);
  console.log("Blue", blue);

  const setColor = (color, change) => {
    //Color is Red, Green, Blue
    //Change is +15, -15
    // if (color === "red") {
    //   if (red + change > 255 || red + change < 0) {
    //     return;
    //   } else {
    //     setRed(red + change);
    //   }
    // }
    // if (color === "green") {
    //   if (green + change > 255 || green + change < 0) {
    //     return;
    //   } else {
    //     setGreen(green + change);
    //   }
    // }
    // if (color === "blue") {
    //   if (blue + change > 255 || blue + change < 0) {
    //     return;
    //   } else {
    //     setBlue(blue + change);
    //   }
    // }
    switch (color) {
      case "red":
        //? mean if true do this, if false do this  (condition) ? true : false (is a ternary operator )
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
      default:
        return;
    }
  };
  return (
    <View>
      <Text>Square Screen</Text>
      <ColorCounter
        onIncrease={() => setColor("red", COLOR_INCREMENT)}
        onDecrease={() => setColor("red", -1 * COLOR_INCREMENT)}
        color="Red"
      />
      <ColorCounter
        color="Green"
        onIncrease={() => setColor("green", COLOR_INCREMENT)}
        onDecrease={() => setColor("green", -1 * COLOR_INCREMENT)}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => setColor("blue", COLOR_INCREMENT)}
        onDecrease={() => setColor("blue", -1 * COLOR_INCREMENT)}
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
};

export default SquareScreen;

const styles = StyleSheet.create({});
