import React from "react";
import { View, TouchableOpacity, TouchableWithoutFeedback } from "react-native";

import { IS_MOBILE } from "/helpers/utils";
import { OverlayContext } from "/components/OverlayProvider";
import { ThemeContext } from "/components/ThemeProvider";
import Preferences from "./Preferences";
import BackButton from "/icons/BackButton";
import PagesLogo from "/icons/PagesLogo";
import Prefs from "/icons/Prefs";

export default function Header({ navigation, backButton, homeDisabled }) {
  const [modalVisible, setModalVisible] = React.useState(false);
  const { toggleOverlay } = React.useContext(OverlayContext);
  const { computeTheme } = React.useContext(ThemeContext);

  const computedTheme = computeTheme();

  const toMainMenu = () => {
    navigation.push("MainMenu");
  };

  const goBack = () => {
    navigation.goBack();
  };

  const setPreferences = () => {
    toggleOverlay(true);
    setModalVisible(true);
  };

  const headerHeight = 88;

  const logoWidth = 100;
  const logoHeight = 78  // logoWidth / logoAspect;
  const logoTop = headerHeight - logoHeight / 2 - 1;

  const backAspect = 228 / 135;
  const backWidth = 70;
  const backHeight = backWidth / backAspect + 4;
  const backTop = headerHeight - backHeight / 1.98; // image is not even :(

  const prefAspect = 76 / 45;
  const prefWidth = 70;
  const prefHeight = prefWidth / prefAspect + 4;
  const prefTop = headerHeight - prefHeight / 1.98;

  const prefthemecolor = computedTheme === "dark" ? "#18203A" : "#F3F3F3";

  return (
    <>
      <View
        style={{
          position: !IS_MOBILE ? "fixed" : "absolute",
          marginBottom: 0,
          backgroundColor: "#5177ff",
          height: headerHeight,
          width: "100%",
          zIndex: 100,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

          {backButton ? (
            <TouchableOpacity
              style={{ marginTop: backTop, width: backWidth, height: backHeight }}
              onPress={goBack}
            >
              <BackButton prefthemecolor={prefthemecolor} />
            </TouchableOpacity>
          ) : (
            <View style={{ width: backWidth }} />
          )}

          {homeDisabled ?
            (
              <View style={{ marginTop: logoTop, width: logoWidth, height: logoHeight }}>
                <PagesLogo width={logoWidth} height={logoHeight} />
              </View>
            ) : (
              <TouchableOpacity onPress={toMainMenu}>
                <View style={{ marginTop: logoTop, width: logoWidth, height: logoHeight }}>
                  <PagesLogo width={logoWidth} height={logoHeight} />
                </View>
              </TouchableOpacity>
            )
          }

          <TouchableOpacity
            style={{ marginTop: prefTop }}
            onPress={setPreferences}
          >
            <Prefs width={prefWidth} height={prefHeight} prefthemecolor={prefthemecolor} />
          </TouchableOpacity>
        </View>

        <Preferences
          navigation={navigation}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </View>
      <View style={{ height: headerHeight }} />
    </>
  );
}
