import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/welcome'
import MainMenu from '../screens/mainMenu'
import React from 'react';

const Stack = createStackNavigator();
const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="MainMenu" component={MainMenu} />
    </Stack.Navigator>
  )
}

export default MyStack