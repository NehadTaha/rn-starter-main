import React from "react";
import {
  Text,
  StyleSheet,
  Screen,
  View,
  Button,
  TouchableOpacity,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  //console.log(navigation);
  return (
    <View>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        style={styles.button}
        onPress={() => {
          //console.log("Button Pressed");
          navigation.navigate("Components");
        }}
        title="Go to Components Demo"
      />
      <Button
        style={styles.button}
        onPress={() => {
          // console.log("List Pressed");
          navigation.navigate("List");
        }}
        title="Go to List Demo"
      />
      <Button
        style={styles.button}
        onPress={() => {
          //  console.log("Image Pressed");
          navigation.navigate("Image");
        }}
        title="Go to Image Demo"
      />
      <Button
        style={styles.button}
        onPress={() => {
          //  console.log("Image Pressed");
          navigation.navigate("Counter");
        }}
        title="Go to Counter Demo"
      />
      <Button
        style={styles.button}
        onPress={() => {
          //  console.log("Image Pressed");
          navigation.navigate("Color");
        }}
        title="Go to Color Demo"
      />
      <Button
        style={styles.button}
        onPress={() => {
          //  console.log("Image Pressed");
          navigation.navigate("Square");
        }}
        title="Go to Square Demo"
      />
      <Button
        style={styles.button}
        onPress={() => {
          navigation.navigate("Text");
        }}
        title="Go to Text Demo"
      />
      <Button
        style={styles.button}
        onPress={() => {
          navigation.navigate("Box");
        }}
        title="Go to Box Demo"
      />
    </View>
  );
  <Screen></Screen>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  button: {
    marginVertical: 10,
    padding: 10,
  },
});

export default HomeScreen;
