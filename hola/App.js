// import React from 'react';
// import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation, DrawerActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import SplashScreen from 'react-native-splash-screen';
import Icon from 'react-native-vector-icons/Entypo';
import HomeScreen from './src/view/HomeScreen';
import ProfileScreen from './src/view/ProfileScreen';
import UserScreen from './src/view/UserScreen';
import LoginPage from './src/view/Login&Register/LoginPage';
import RegisterPage from './src/view/Login&Register/Register';
import DrawerContent from './src/component/DrawerContent';
import { useEffect } from 'react';
//remmeber to add splash and screen opening animation the splash is too old now
const StackNav = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        statusBarColor: '#0163d2',
        headerStyle: {
          backgroundColor: '#0163d2',
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerLeft: () => {
            return (
              <Icon
                name="menu"
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                size={30}
                color="#fff"
              />
            );
          },
        }}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen
        name="User"
        component={UserScreen}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};

const DrawerNav = () =>{
  const Drawer = createDrawerNavigator();
  return(
    <Drawer.Navigator 
        drawerContent={props => <DrawerContent{...props}/>}
        screenOptions={{headerShown:false}}>
        <Drawer.Screen name = "Home" component={StackNav}/>
      </Drawer.Navigator>
  )
}

function App() {
  // useEffect(() => {
  //   setTimeout(() => {
  //     SplashScreen.hide();
  //   }, 900);
  // }, []);

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Register" component={RegisterPage} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

registerRootComponent(App);