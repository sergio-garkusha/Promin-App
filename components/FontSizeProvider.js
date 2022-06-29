import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


const DEFAULT = 1;
const STEP = 0.25;
const MIN = 0.75;
const MAX = 2;

const initFontSizeState = {
  coefficient: DEFAULT,
  subtractSize: () => null,
  defaultSize: () => null,
  addSize: () => null
};

export const FontSizeContext = React.createContext(initFontSizeState);

export default function FontSizeProvider({ children }) {
  const [coeff, setCoeff] = React.useState(initFontSizeState.coefficient);

  React.useEffect(() => {
    AsyncStorage.getItem("userFontSize")
      .then((val) => {
        if (!val) { // first run, returs `null` when does't exist;
          AsyncStorage.setItem("userFontSize", `${coeff}`);
        } else {
          setCoeff(Number(val));
        }
      });
  }, []);

  const subtractSize = () => {
    if (coeff <= MIN) return;
    setCoeff(coeff - STEP);
    AsyncStorage.setItem("userFontSize", `${coeff - STEP}`);
  };

  const addSize = () => {
    if (coeff >= MAX) return;
    setCoeff(coeff + STEP);
    AsyncStorage.setItem("userFontSize", `${coeff + STEP}`);
  };

  const defaultSize = () => {
    setCoeff(DEFAULT);
    AsyncStorage.setItem("userFontSize", `${DEFAULT}`);
  };

  const computeFontSize = (base) => {
    return base * coeff;
  };

  const values = React.useMemo(
    () => ({ coefficient: coeff, subtractSize, defaultSize, addSize, computeFontSize }),
    [coeff]
  );

  return (
    <FontSizeContext.Provider value={values}>
      {children}
    </FontSizeContext.Provider>
  );
}
