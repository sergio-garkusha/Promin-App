import React from "react";
import { View } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import WelcomeLogo from "/icons/WelcomeLogo";

export default function FullLogo(props) {
  const logoAspect = 114 / 171;
  let logoWidth;

  if (props.widthPercent)
    logoWidth = responsiveWidth(props.widthPercent); // responsive
  else logoWidth = 114; // static

  const logoHeight = 171 || logoWidth / logoAspect + 7;
  const logoMarginTop = (responsiveHeight(40) - logoHeight) / 2;

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
