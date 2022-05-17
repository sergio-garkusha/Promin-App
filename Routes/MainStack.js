import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/welcome'
import MainMenu from '../screens/mainMenu'
import React from 'react';

const Stack = createStackNavigator();

// To set a test screen to be first, add below property to Stack.Navigator. TODO: PROD: remove that property
// initialRouteName="MainMenu"

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="MainMenu" component={MainMenu} />
    </Stack.Navigator>
  )
}

export default MainStack