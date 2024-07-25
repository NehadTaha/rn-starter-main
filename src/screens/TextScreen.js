import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";

const TextScreen = () => {
  const [password, setPassword] = useState("");
  const passwordValidation = (password) => {
    //if password is less than 5 characters return true else return false
    return password.length < 5 ? true : false;
  };
  return (
    <View>
      <Text>Enter your password:</Text>
      <TextInput
        style={styles.inputStyle}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
      />
      {/* <Text>Your name is {password}</Text> */}
      {passwordValidation(password) ? (
        //if passwordValidation returns true then show the text
        <Text>Password must be longer than 5 characters</Text>
      ) : null}
    </View>
  );
};

export default TextScreen;

const styles = StyleSheet.create({
  inputStyle: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});
