import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useReducer } from "react";
import ColorCounter from "../Components/ColorCounter";
import { useState } from "react";

const COLOR_INCREMENT = 15;
//reducer function has two arguments, state and action and returns a new state object based on the action type and payload that is passed to it from the dispatch function that is called in the component that is using the reducer
const reducer = (state, action) => {
  //state === {red: number, green: number, blue: number}
  //action === {colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15}
  switch (action.colorToChange) {
    case "red":
      return state.red + action.amount > 255 || state.red + action.amount < 0
        ? state
        : {
            ...state,
            red: state.red + action.amount,
          };

    //The ...state is a spread operator that takes all the properties of the state object and copies them to the new object, That means we are not changing the original state object but creating a new object with the same properties and changing the value of the red property

    case "green":
      return state.green + action.amount > 255 ||
        state.green + action.amount < 0
        ? state
        : {
            ...state,
            green: state.green + action.amount,
          };

    case "blue":
      return state.blue + action.amount > 255 || state.blue + action.amount < 0
        ? state
        : {
            ...state,
            blue: state.blue + action.amount,
          };

    default:
      return state;
  }
};
const SquareScreen = () => {
  //Dlete the state in case of using the reducer
  // const [red, setRed] = useState(0);
  // const [green, setGreen] = useState(0);
  // const [blue, setBlue] = useState(0);
  // console.log("Green", green);
  // console.log("Red", red);
  // console.log("Blue", blue);

  // const setColor = (color, change) => {
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
  //Another solution with switch case
  // switch (color) {
  //   case "red":
  //     //? mean if true do this, if false do this  (condition) ? true : false (is a ternary operator )
  //     red + change > 255 || red + change < 0 ? null : setRed(red + change);
  //     return;
  //   case "green":
  //     green + change > 255 || green + change < 0
  //       ? null
  //       : setGreen(green + change);
  //     return;
  //   case "blue":
  //     blue + change > 255 || blue + change < 0
  //       ? null
  //       : setBlue(blue + change);
  //     return;
  //   default:
  //     return;
  // }
  //Another solution with the reducer
  //Reducer is a function that manages changes to an object
  //It is used to manage changes to an object
  //Dispatch is a function that is used to call the reducer

  const [state, runMyReducer] = useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0,
  });
  const { red, green, blue } = state;

  // Remove the extra closing brace
  return (
    <View>
      <Text>Square Screen</Text>
      <ColorCounter
        // onIncrease={() => setColor("red", COLOR_INCREMENT)}
        // onDecrease={() => setColor("red", -1 * COLOR_INCREMENT)}
        color="Red"
        onIncrease={() =>
          runMyReducer({ colorToChange: "red", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          runMyReducer({ colorToChange: "red", amount: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="Green"
        // onIncrease={() => setColor("green", COLOR_INCREMENT)}
        // onDecrease={() => setColor("green", -1 * COLOR_INCREMENT)}
        onIncrease={() =>
          runMyReducer({ colorToChange: "green", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          runMyReducer({ colorToChange: "green", amount: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="Blue"
        // onIncrease={() => setColor("blue", COLOR_INCREMENT)}
        // onDecrease={() => setColor("blue", -1 * COLOR_INCREMENT)}
        onIncrease={() =>
          runMyReducer({ colorToChange: "blue", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          runMyReducer({ colorToChange: "blue", amount: -1 * COLOR_INCREMENT })
        }
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${state.red},${state.green},${state.blue})`,
        }}
      />
    </View>
  );
};

export default SquareScreen;

const styles = StyleSheet.create({});
