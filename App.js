import * as React from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';

// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from './screens/welcome'
import MainMenu from './screens/mainMenu'

export default function App() {
  return (
    <MainMenu/>
  );
}
