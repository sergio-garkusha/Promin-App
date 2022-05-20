import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize} from "react-native-responsive-dimensions";

export default function Header(props) {
  const toMainMenu = () => {
    if(props.navigation)
      props.navigation.push( "MainMenu" )
    else
      console.log("please pass 'navigation={navigation}' prop to the header called from current screen")
  }
  const goBack = () => {
    if(props.navigation)  
      props.navigation.goBack()
    else
      console.log("please pass 'navigation={navigation}' prop to the header called from current screen")
  }

  const headerHeight = 70

  const logoAspect = 264 / 243;
  const logoWidth = 90
  const logoHeight = logoWidth / logoAspect
  const logoTop = headerHeight - logoHeight / 2

  const backAspect = 228 / 135;
  const backWidth = 70
  const backHeight = backWidth / backAspect
  const backTop = headerHeight - backHeight / 2 - 1  // image is not even :(

  return (  
    <View style={[ props.style, { 
      marginBottom: 20,
      backgroundColor: '#5177ff', 
      height: headerHeight, 
      flexDirection: 'row',
      justifyContent: 'space-between'
    }]}>

      { props.backButton
        ? 
          <TouchableOpacity style={{ marginTop: backTop, width: backWidth, height: backHeight }} onPress={goBack}>
            <Image
              source={require("../assets/button_back_large.png")}
              style={{ width: backWidth, height: backHeight }} 
            />
          </TouchableOpacity>
        :
          <View style={{ width: backWidth }} />
      }

      <TouchableOpacity style={{ marginTop: logoTop, width: logoWidth, height: logoHeight }} onPress={toMainMenu} >
        <Image 
          source={require("../assets/header_logo.png")} 
          style={{ width: logoWidth, height: logoHeight }} 
        />
      </TouchableOpacity>

      <View style={{ width: backWidth }} />

    </View>
  );
}
