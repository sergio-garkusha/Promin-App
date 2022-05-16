import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View, StyleSheet, Button, Image } from 'react-native';
import { useFonts } from 'expo-font';

import WelcomeScreen from './screens/welcome'
// import MainMenu from './screens/mainMenu'
import MainStack from './Routes/MainStack';

export default function App() {
  const [fontsLoaded] = useFonts({  //TODO: Use 
    'Ubuntu': require('./assets/fonts/Ubuntu-M.ttf')
  });

  if (!fontsLoaded)
    return null

  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}