import React from "react";
import { View, TouchableOpacity } from "react-native";

import { isMobile } from "/helpers/utils"
import { responsiveWidth } from "react-native-responsive-dimensions";
import LetsGoButton from "/icons/LetsGoButton";

export default function NextButton(props) {
  const buttonAspect = 294 / 204;
  let buttonWidth;

  if (props.widthPrecent) buttonWidth = responsiveWidth(props.widthPrecent);
  else buttonWidth = 96;
  const buttonHeight = buttonWidth / buttonAspect + 2;

  const marginTop = -buttonHeight / 2;
  const alignment = !isMobile() ? "center" : "flex-end";
  return (
    <View style={[props.style, { marginTop, alignItems: alignment }]}>
      <TouchableOpacity onPress={props.onPress}>
        <LetsGoButton
          width={buttonWidth}
          height={buttonHeight}
        />
      </TouchableOpacity>
    </View>
  );
}
