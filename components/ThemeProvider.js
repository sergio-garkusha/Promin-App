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
    Promise.all(
      AsyncStorage.getItem("systemColorSchemeFlag"),
      AsyncStorage.getItem("userColorScheme")
    ).then((vals) => {
      if (vals.length === 0) { // first run, no values were set
        AsyncStorage.setItem("userColorScheme", "auto");
        AsyncStorage.setItem("systemColorSchemeFlag", "true");
        setColorScheme("auto");
        setUseSys(true);
      }
    });
  }, []);

  React.useEffect(() => {
    const sysColorSchemeListener = (e) => {
      setColorScheme(e.colorScheme);
    };
    // [NB]: Appearance doesn't work properly on ANDROID
    // [@TODO]: Fix this, see https://github.com/facebook/react-native/issues/28823 &
    // https://stackoverflow.com/questions/65188658/react-native-appearance-addchangelistener-does-nothing
    const listener = Appearance.addChangeListener(sysColorSchemeListener);
    return () => listener.remove();
  });

  const persistSystem = (v) => {
    AsyncStorage.setItem("systemColorSchemeFlag", v.toString());
    setUseSys(v);
  }

  const toggleTheme = (v) => {
    v === "auto" ? persistSystem(true) : persistSystem(false);
    AsyncStorage.setItem("userColorScheme", v);
    setColorScheme(v);
  };

  // [NB]: Appearance doesn't work properly on ANDROID
  // [@TODO]: Fix this, see https://github.com/facebook/react-native/issues/28823 &
  // https://stackoverflow.com/questions/65188658/react-native-appearance-addchangelistener-does-nothing
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
