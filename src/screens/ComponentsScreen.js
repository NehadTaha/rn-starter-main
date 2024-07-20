import React from "react";
import { StyleSheet, View, Text } from "react-native";

const ComponentsScreen = () => {
  //props
  const greeting = "My name is";
  const greeting2 = <Text>Hi Nehad!</Text>;
  const name = "Nehad";
  return (
    <View>
      <Text style={styles.textStyle}>Getting Start with react native!</Text>
      <Text style={styles.nameStyle}>
        {greeting} {name}
      </Text>
      {greeting2}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  nameStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
