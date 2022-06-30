import React from "react";
import { View } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import WelcomeLogo from "@icons/WelcomeLogo";

export default function FullLogo(props) {
  const logoAspect = 408 / 615;
  let logoWidth;

  if (props.widthPercent)
    // responsive
    logoWidth = responsiveWidth(props.widthPercent);
  // static
  else logoWidth = 136;

  const logoHeight = 205 || logoWidth / logoAspect + 7;
  const logoMarginTop = (responsiveHeight(50) - logoHeight) / 2;

  return (
    <View
      style={[
        props.style,
        {
          marginTop: logoMarginTop,
          justifyContent: "center",
          alignItems: "center",
        },
      ]}
    >
      <WelcomeLogo
        width={logoWidth}
        height={logoHeight}
      />
    </View>
  );
}
