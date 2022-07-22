import React, { useRef, useEffect } from 'react';
import { Animated, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Caret from "/icons/Caret";

export default function Accordion(props) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const computedTheme = computeTheme();
  const styles = resolveLocalStyles(computedTheme, computeFontSize);
  const caretColor = computedTheme === "dark" ? "#9AA3C5" : "#666";

  const drawerAnim = useRef(new Animated.Value(0)).current

  let textRef = useRef(null);
  let textHeight = useRef(0);
  let isOpen = useRef(false);

  useEffect(() => {
    textRef.current.measure((fx, fy, width, height, px, py) => {
      textHeight.current = height
    });
  });

  const openDrawer = () => {
    Animated.timing(
      drawerAnim,
      {
        toValue: textHeight.current,                
        duration: 500,
        useNativeDriver: false
      }
    ).start()
  }
  const closeDrawer = () => {
    Animated.timing(
      drawerAnim,
      {
        toValue: 0,                
        duration: 500,
        useNativeDriver: false
      }
    ).start()
  }
  const toggleDrawer = () => {
    if(isOpen.current)
      closeDrawer()
    else
      openDrawer()
    isOpen.current = !isOpen.current
  }

  return (
    <View style={styles.accordeon}>
      <View style={styles.headerPanel}>
        <Text style={styles.headerText}>{props.title}</Text>
        <TouchableOpacity style={styles.downIcon} onPress={toggleDrawer}>
          <Caret style={styles.caret} prefThemeColor={caretColor} />
        </TouchableOpacity>
      </View>
      
      <Animated.View style={[styles.bodyPanel, {height: drawerAnim}]}>
        <View style={styles.divider}/>
        <View ref={textRef} style={{height:'auto'}}>
          { props.children }
        </View>
      </Animated.View>
    </View>
  );
}

const resolveLocalStyles = (theme, computeFS) => {
  const backgroundColor = theme === "dark" ? "#27335A" : "#FFF";
  const color = theme === "dark" ? "#FFF" : "#000";

  const bodyFontSize = computeFS(17);

  return StyleSheet.create({
    accordeon:{
      borderRadius:12,
      padding:4,
      backgroundColor: backgroundColor
    },
    headerPanel: {
      fontWeight: 'bold',
      textAlign: 'left',
      backgroundColor: backgroundColor,
      flexDirection: 'row',
      overflow:"hidden"
    },
    headerText: {
      fontWeight: 'bold',
      fontSize:computeFS(19),
      padding:16,
      flex:1,
      color
    },
    downIcon:{
      height:20,
      width:20,
      marginTop:'auto',
      marginBottom:'auto',
      marginRight:12,
      borderRadius: 7
    },
    caret:{
      transform: [{ rotate: '90deg'}]
    },
    divider:{
      height:1,
      backgroundColor: "#EEEEEE"
    },
    bodyPanel: {
      backgroundColor: backgroundColor,
      overflow:'hidden'
    },
    bodyText: {
      fontSize:bodyFontSize,
      padding:16,
      color
    }
  })
}
