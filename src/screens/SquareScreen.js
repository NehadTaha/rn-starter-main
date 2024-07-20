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
  return (
    <View>
      <Text>Square Screen</Text>
      <ColorCounter
        onIncrease={() => setRed(red + COLOR_INCREMENT)}
        onDecrease={() => setRed(red - COLOR_INCREMENT)}
        color="Red"
      />
      <ColorCounter
        color="Green"
        onIncrease={() => setGreen(green + COLOR_INCREMENT)}
        onDecrease={() => setGreen(green - COLOR_INCREMENT)}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => setBlue(blue + COLOR_INCREMENT)}
        onDecrease={() => setBlue(blue - COLOR_INCREMENT)}
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
