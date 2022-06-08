import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
// import { ThemeContext } from "@components/ThemeProvider";
import backButton from "@assets/button_back_large.png";
import headerLogo from "@assets/header_logo.png";
import prefButton from "@assets/prefs_light.png";
import Preferences from "./Preferences";

//import { Svg as BackButtonSvg } from '@assets/svg/button_back_light.svg'

import SvgComponent from '@components/SvgComponent.js';



export default function Header(props) {
  const [modalVisible, setModalVisible] = React.useState(false);
  // const { toggleTheme } = React.useContext(ThemeContext);
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
    // toggleTheme();
    setModalVisible(true);
  };

  const headerHeight = 70;

  const logoAspect = 264 / 243;
  const logoWidth = 90;
  const logoHeight = logoWidth / logoAspect;
  const logoTop = headerHeight - logoHeight / 2;

  const backAspect = 228 / 135;
  const backWidth = 70;
  const backHeight = backWidth / backAspect;
  const backTop = headerHeight - backHeight / 2 - 1; // image is not even :(

  const prefAspect = 76 / 45;
  const prefWidth = 70;
  const prefHeight = prefWidth / prefAspect;
  const prefTop = headerHeight - prefHeight / 2;

  return (
    <View
      style={[
        props.style,
        {
          marginBottom: 20,
          backgroundColor: "#5177ff",
          height: headerHeight,
          position: "absolute",
          top: 0,
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
            <Image
              source={backButton}
              style={{ width: backWidth, height: backHeight }}
            />
          </TouchableOpacity>
        ) : (
          <View style={{ width: backWidth }} />
        )}

        <SvgComponent />

        <TouchableOpacity
          style={{ marginTop: logoTop, width: logoWidth, height: logoHeight }}
          onPress={toMainMenu}
        >
          <Image
            source={headerLogo}
            style={{ width: logoWidth, height: logoHeight }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{ marginTop: prefTop, width: prefWidth, height: prefHeight }}
          onPress={setPreferences}
        >
          <Image
            source={prefButton}
            style={{ width: prefWidth, height: prefHeight }}
          />
        </TouchableOpacity>
      </View>

      <Preferences
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}
