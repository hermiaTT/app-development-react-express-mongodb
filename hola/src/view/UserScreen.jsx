import React from 'react'
// import Slider from './Slider'
import { View, Text, TextInput, StyleSheet } from 'react-native';


function UserScreen(props) {
    console.log(props)
  return (
    <View style = {styles.viewStyle}>
      <Text style = {styles.textStyle} > User Screen </Text>
    </View>
  );
}

const styles =  StyleSheet.create({
  viewStyle :{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  textStyle: {
    fontSize: 28,
    color: 'black',
  },
  headingStyle: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
});

export default UserScreen;