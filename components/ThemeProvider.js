import React from "react";
import { Appearance, Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initThemeState = {
  isSys: true,
  theme: "auto",
  computeTheme: () => "auto",
  toggleTheme: (t) => null
};

export const ThemeContext = React.createContext(initThemeState);

export default function ThemeProvider({ children }) {
  const [colorScheme, setColorScheme] = React.useState(initThemeState.theme);
  const [useSys, setUseSys] = React.useState(initThemeState.isSys);

  // [@TODO]: Need to create an exportable object with all colors to use in styles,
  // Instead of current cluncky computeTheme() + resolveStyles = (theme) => {} approach.
  // [Ex]:
  // export const appColors = {
  //   borderColor: theme === "dark" ? "#3D486C" : "#E6E7ED",
  //   textColor: theme === "dark" ? "#9AA3C5" : "#666",
  //   BtnBGColor: theme === "dark" ? "#01020633" : "#74748014",
  //   backgroundColor: theme === "dark" ? "#27335A" : "#FFF",
  //   titleColor: theme === "dark" ? "#FFF" : "#000",
  // };
  // import { borderColor, textColor } from "@components/ThemeProvider"
  // StyleSheet.create({button: {color: textColor}...
  // <View style={color: textColor}>...

  React.useEffect(() => {
    // [@TODO]: Fix persistence for color scheme (check out web version)
    Promise.all([
      AsyncStorage.getItem("systemColorSchemeFlag"),
      AsyncStorage.getItem("userColorScheme")
    ]).then((vals) => {
      if (!vals[0] && !vals[1]) { // first run, no values were set
        AsyncStorage.setItem("systemColorSchemeFlag", "true");
        AsyncStorage.setItem("userColorScheme", "auto");
      } else {
        const [sys, scheme] = vals;
        setUseSys(sys === "true" || false);
        setColorScheme(scheme);
      }
    });
  }, []);

  React.useEffect(() => {
    if (useSys) {
      const sysColorSchemeListener = (e) => {
        setColorScheme(e.colorScheme);
      };
      // [NB]: Appearance doesn't work properly on ANDROID
      // [@TODO]: Fix this, see https://github.com/facebook/react-native/issues/28823 &
      // https://stackoverflow.com/questions/65188658/react-native-appearance-addchangelistener-does-nothing
      if (Platform.OS === "web") {
        Appearance.addChangeListener(sysColorSchemeListener);
        return () => Appearance.removeChangeListener(sysColorSchemeListener);
      } else {
        const listener = Appearance.addChangeListener(sysColorSchemeListener);
        return () => listener.remove();
      }
    }
  }, [useSys]);

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
