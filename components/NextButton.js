import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { responsiveWidth } from "react-native-responsive-dimensions";
import buttonNext from '@assets/button_next-large.png';

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
          source={ buttonNext }
          style={{
            width: buttonWidth,
            height: buttonHeight
          }} />
      </TouchableOpacity>
    </View>
  );
};
