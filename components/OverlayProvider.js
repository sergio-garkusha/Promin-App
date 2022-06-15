import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const initOverlayState = {
  isOverlayShown: false,
  toggleOverlay: () => null,
};

export const OverlayContext = React.createContext(initOverlayState);

export default function ModalProvider({ children }) {
  const [overlay, changeOverlay] = React.useState(
    initOverlayState.isOverlayShown
  );

  const toggleOverlay = () => changeOverlay(!overlay);
  const values = React.useMemo(
    () => ({ isOverlayShown: overlay, toggleOverlay }),
    [overlay]
  );

  return (
    <OverlayContext.Provider value={values}>
      {children}
      {overlay && (
        <ImageBackground blurRadius={overlay ? 4 : 0} style={styles.overlay} />
      )}
    </OverlayContext.Provider>
  );
}
const styles = StyleSheet.create({
  overlay: {
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    flex: 1,
    height: "100%",
    justifyContent: "center",
    position: "absolute",
    resizeMode: "contain",
    width: "100%",
  },
});
