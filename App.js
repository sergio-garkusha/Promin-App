import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import MainStack from 'Routes/MainStack';
import ThemeProvider from 'ThemeProvider';

export default function App() {
  const [fontsLoaded] = useFonts({  //TODO: Use 
    'Ubuntu': require('./assets/fonts/Ubuntu-R.ttf'),
    'Ubuntu_M': require('./assets/fonts/Ubuntu-M.ttf')
  });

  if (!fontsLoaded)
    return null
  // Do not replace below with your screen anymore! Please refer to comment in MainStack
  
  return (
    <NavigationContainer>
      <ThemeProvider>
        <MainStack />
      </ThemeProvider>
    </NavigationContainer>
  );
}