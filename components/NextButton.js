import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize} from "react-native-responsive-dimensions";

export default function NextButton(props) {
  const buttonAspect = 294 / 204;
  const buttonWidth = responsiveWidth(props.width);
  const buttonHeight = buttonWidth / buttonAspect

  const marginTop = props.style.marginTop - buttonHeight / 2
  delete props.style.marginTop

  return (
    <View style={[ props.style, { marginTop: marginTop, position: 'absolute', right: 0 }] }>
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
