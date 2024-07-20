import React from "react";
import { StyleSheet, View, Text,ScrollView, Image  } from "react-native";


const ImageDetails = ({imageSource,title,score}) => {
  // console.log(props);
  return (
   
    <View>
      <Image source={imageSource} style={styles.image} />
      <Text>{title}</Text>
      <Text>Image Score - {score}</Text>
    </View>
 
  );
};

const styles = StyleSheet.create({
  image: {
   
   
  },
  text: {
    fontSize: 30,
  },
  button: {
    marginVertical: 10,
    padding: 10,
  },
});

export default ImageDetails;
