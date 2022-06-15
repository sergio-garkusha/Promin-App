import React from "react";
import { Appearance } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initThemeState = {
  isSys: null,
  theme: "",
  computeTheme: () => "",
  toggleTheme: (t) => null
};

export const ThemeContext = React.createContext(initThemeState);

export default function ThemeProvider({ children }) {
  const [colorScheme, setColorScheme] = React.useState("");
  const [useSys, setUseSys] = React.useState(null);

  React.useEffect(() => {
    AsyncStorage.getItem("systemColorSchemeFlag")
      .then(sys => {
        if (sys === null) { // first run
          AsyncStorage.setItem("systemColorSchemeFlag", "true");
          AsyncStorage.setItem("userColorScheme", Appearance.getColorScheme());
          setUseSys(true);
        } else {
          AsyncStorage.getItem("userColorScheme")
            .then(theme => {
              setColorScheme(theme);
            });
        }
      });
  }, []);

  React.useEffect(() => {
    const sysColorSchemeListener = (e) => {
      console.log(e);
      setColorScheme(e.colorScheme);
    };
    Appearance.addChangeListener(sysColorSchemeListener);
    return () => Appearance.removeChangeListener(sysColorSchemeListener);
  });

  const persistSystem = (v) => {
    AsyncStorage.setItem("systemColorSchemeFlag", v.toString());
    setUseSys(v);
  }

  const toggleTheme = (v) => {
    AsyncStorage.setItem("userColorScheme", v);
    v === "auto" ? persistSystem(true) : persistSystem(false);
    setColorScheme(v);
  };

  const computeTheme = () => useSys ? Appearance.getColorScheme() : colorScheme;

  const values = React.useMemo(() => ({
    isSys: useSys,
    theme: colorScheme,
    computeTheme,
    toggleTheme
  }), [useSys, colorScheme]);

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
}
