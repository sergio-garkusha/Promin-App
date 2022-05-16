import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize} from "react-native-responsive-dimensions";

export default function NextButton(props) {
  const buttonAspect = 294 / 204;
  var buttonWidth

  if(props.widthPrecent)
    buttonWidth = responsiveWidth(props.widthPrecent);
  else
    buttonWidth = 96
  const buttonHeight = buttonWidth / buttonAspect

  const marginTop = - buttonHeight / 2

  return (
    <View style={[ props.style, { marginTop: marginTop, alignItems: 'flex-end' }] }>
      <TouchableOpacity onPress={props.onPress}>
        <Image 
          source={require("../assets/button_next-large.png")} 
          style={{
            width: buttonWidth,
            height: buttonHeight
          }} />
      </TouchableOpacity>
    </View>
  );
}
