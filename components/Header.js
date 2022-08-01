import React from "react";
import { View, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { OverlayContext } from "/components/OverlayProvider";
import { ThemeContext } from "/components/ThemeProvider";
import Preferences from "./Preferences";
import BackButton from "/icons/BackButton";
import PagesLogo from "/icons/PagesLogo";
import Prefs from "/icons/Prefs";

export default function Header(props) {
  const [modalVisible, setModalVisible] = React.useState(false);
  const { toggleOverlay } = React.useContext(OverlayContext);
  const { computeTheme } = React.useContext(ThemeContext);

  const computedTheme = computeTheme();

  const toMainMenu = () => {
    if (props.navigation) {
      props.navigation.push("MainMenu");
    } else {
      // eslint-disable-next-line no-console
      console.log(
        "please pass 'navigation={navigation}' prop to the header called from current screen"
      );
    }
  };

  const goBack = () => {
    if (props.navigation) {
      props.navigation.goBack();
    } else {
      // eslint-disable-next-line no-console
      console.log(
        "please pass 'navigation={navigation}' prop to the header called from current screen"
      );
    }
  };
  const setPreferences = () => {
    toggleOverlay(true);
    setModalVisible(true);
  };

  const headerHeight = 80;

  // const logoAspect = 264 / 243;
  const logoWidth = 132;
  const logoHeight = 122 // logoWidth / logoAspect;
  const logoTop = headerHeight - logoHeight / 2 + 21;

  const backAspect = 228 / 135;
  const backWidth = 70;
  const backHeight = backWidth / backAspect + 4;
  const backTop = headerHeight - backHeight / 2 - 1; // image is not even :(

  const prefAspect = 76 / 45;
  const prefWidth = 70;
  const prefHeight = prefWidth / prefAspect + 4;
  const prefTop = headerHeight - prefHeight / 2 - 1;

  const prefThemeColor = computedTheme === "dark" ? "#18203A" : "#F3F3F3";

  return (
    <View
      style={[
        props.style,
        {
          marginBottom: 20,
          backgroundColor: "#5177ff",
          height: headerHeight,
          width: "100%",
          zIndex: 100,
        },
      ]}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        {props.backButton ? (
          <TouchableOpacity
            style={{ marginTop: backTop, width: backWidth, height: backHeight }}
            onPress={goBack}
          >
            <BackButton prefThemeColor={prefThemeColor} width={backWidth} height={backHeight} />
          </TouchableOpacity>
        ) : (
          <View style={{ width: backWidth }} />
        )}

        {props.homeDisabled ?
          (
            <View style={{ marginTop: logoTop, width: logoWidth, height: logoHeight }}>
              <PagesLogo width={logoWidth} height={logoHeight} />
            </View>
          ) : (
            <TouchableWithoutFeedback onPress={toMainMenu}>
              <View style={{ marginTop: logoTop, width: logoWidth, height: logoHeight }}>
                <PagesLogo width={logoWidth} height={logoHeight} />
              </View>
            </TouchableWithoutFeedback>
          )
        }

        <TouchableOpacity
          style={{ marginTop: prefTop, width: prefWidth, height: prefHeight }}
          onPress={setPreferences}
        >
          <Prefs width={prefWidth} height={prefHeight} prefThemeColor={prefThemeColor} />
        </TouchableOpacity>
      </View>

      <Preferences
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}
