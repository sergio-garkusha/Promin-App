import React from "react";


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

  const subtractSize = () => {
    if (coeff <= MIN) return;
    setCoeff(coeff - STEP);
  }
  const addSize = () => {
    if (coeff >= MAX) return;
    setCoeff(coeff + STEP);
  }
  const defaultSize = () => setCoeff(DEFAULT);

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
