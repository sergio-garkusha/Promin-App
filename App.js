import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import MainStack from "/Routes/MainStack";
import ThemeProvider from "/components/ThemeProvider";
import FontSizeProvider from "/components/FontSizeProvider";
import OverlayProvider from "/components/OverlayProvider";
import UbuntuR from "/assets/fonts/Ubuntu-R.ttf";
import UbuntuM from "/assets/fonts/Ubuntu-M.ttf";

export default function App() {
  const [fontsLoaded] = useFonts({
    Ubuntu: UbuntuR,
    Ubuntu_M: UbuntuM,
  });

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <ThemeProvider>
        <FontSizeProvider>
          <OverlayProvider>
            <MainStack />
          </OverlayProvider>
        </FontSizeProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}
