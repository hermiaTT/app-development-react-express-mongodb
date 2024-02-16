import React from 'react'
// import Slider from './Slider'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';


function HomeScreen(props) {
  return (
    <View style = {styles.viewStyle}>
      <Text style = {styles.headingStyle} > Navigation</Text>
      <Text style = {styles.textStyle} > Home Screen</Text>
      <Button title = "profile" 
              onPress={()=> props.navigation.navigate('Profile',{
                name: "Hermia"
      })}/>
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

export default HomeScreen;