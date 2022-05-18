import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize} from "react-native-responsive-dimensions";

export default function Header(props) {
  const toMainMenu = () => {
    console.log("I should navigate to Main Menu but something's up")
    // TODO:
    // navigation.push( "MainMenu" )
  }

  const headerHeight = 70
  const logoAspect = 264 / 243;
  const logoWidth = 90
  const logoHeight = logoWidth / logoAspect
  const logoTop = headerHeight

  return (
    <View style={[ props.style, { 
      marginBottom: 20,
      backgroundColor: '#5177ff', 
      height: headerHeight, 
      justifyContent: 'center', 
      alignItems: 'center'
    }]}>
      <TouchableOpacity style={{ marginTop: logoTop, width: logoWidth, height: logoHeight }} onPress={toMainMenu} >
        <Image 
          source={require("../assets/header_logo.png")} 
          style={{ width: logoWidth, height: logoHeight }} 
        />
      </TouchableOpacity>
    </View>
  );
}
