import React from "react";
import { Appearance } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initThemeState = {
  theme: Appearance.getColorScheme() || "light",
  toggleTheme: () => null,
};

export const ThemeContext = React.createContext(initThemeState);
// AsyncStorage.getItem('theme');

export default function ThemeProvider({ children }) {
  const [colorScheme, setColorScheme] = React.useState(initThemeState.theme);

  const toggleTheme = () => {
    // eslint-disable-next-line no-console
    console.log("theme!");
    const derminedScheme = colorScheme === "light" ? "dark" : "light";
    AsyncStorage.setItem("theme", derminedScheme);
    setColorScheme(derminedScheme);
  };
  const values = React.useMemo(() => ({ theme: colorScheme, toggleTheme }), []);
  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
}
