import * as React from 'react';
import { View, Image } from 'react-native';
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import Logo from 'assets/Logo-large.png';
export default function FullLogo(props) {

  const logoAspect = 408 / 615;
  var logoWidth

  if(props.widthPercent)  // responsive
    logoWidth = responsiveWidth(props.widthPercent);
  else // static
    logoWidth = 128

  const logoHeight = logoWidth / logoAspect

  const logoMarginTop = (responsiveHeight(50) - logoHeight) / 2

  return (
    <View style={[ props.style, { marginTop: logoMarginTop, justifyContent: 'center', alignItems: 'center'}]}>
      <Image 
        source={Logo} 
        style={{
          width: logoWidth,
          height: logoHeight
        }} />
    </View>
  );
}
