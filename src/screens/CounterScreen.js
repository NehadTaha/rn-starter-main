import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { useReducer } from "react";

const reducer = (state, action) => {
  //state=== {count:number}
  //action==={type:'increment'||'decrement',payload:1}
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };
    case "decrement":
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  // const [counter, setCounter] = useState(0);
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const { count } = state;
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          //dispatch is a function that is used to update the state object and it takes an object as an argument that has a type property and a payload property
          dispatch({ type: "increment", payload: 1 });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: "decrement", payload: 1 });
        }}
      />
      <Text>Current Count: {state.count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
