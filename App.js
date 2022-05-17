import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View, StyleSheet, Button, Image } from 'react-native';
import { useFonts } from 'expo-font';

import WelcomeScreen from './screens/welcome'
import MainStack from './Routes/MainStack';

export default function App() {
  const [fontsLoaded] = useFonts({  //TODO: Use 
    'Ubuntu': require('./assets/fonts/Ubuntu-R.ttf')
  });

  if (!fontsLoaded)
    return null
  // Do not replace below with your screen anymore! Please refer to comment in MainStack
  return (
    <NavigationContainer>
      <MainStack/>
    </NavigationContainer>
  );
}