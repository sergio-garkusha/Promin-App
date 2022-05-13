import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize} from "react-native-responsive-dimensions";

export default function Logo(props) {
  const logoAspect = 408 / 615;
  const logoWidth = responsiveWidth(props.width);
  const logoHeight = logoWidth / logoAspect

  return (
    <View style={[ props.style, { justifyContent: 'center', alignItems: 'center'}]}>
      <Image 
        source={require("../assets/logo-large.png")} 
        style={{
          width: logoWidth,
          height: logoHeight
        }} />
    </View>
  );
}
