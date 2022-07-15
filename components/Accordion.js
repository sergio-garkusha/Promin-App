import React, { useRef, useEffect } from 'react';
import { Animated, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
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
    Animated.timing(                  // Animate over time
      drawerAnim,            // The animated value to drive
      {
        toValue: textHeight.current,                
        duration: 500,
        useNativeDriver: false
      }
    ).start()
  }
  const closeDrawer = () => {
    Animated.timing(                  // Animate over time
      drawerAnim,            // The animated value to drive
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
    <View style={styles.container}>
      <View style={styles.accordeon}>
        <View style={styles.headerPanel}>
          <Text style={styles.headerText}>
            element title sd 
          </Text>
          <TouchableOpacity style={styles.downIcon} onPress={toggleDrawer}/>
        </View>
        
        <Animated.View style={[styles.bodyPanel, {height: drawerAnim}]}>
          <View style={styles.divider}/>
          <View ref={textRef} style={{height:'auto'}}>
            <Text style={styles.bodyText}>
              thiss is article text blakdvmoa fdv dsvln sdvkjnfv sdvknzd  adsvoij asdovm adovn advoknaofv 
            </Text>
          </View>
        </Animated.View>
      </View>
    </View>
  );
}

const backgroundColor = "#FFFFFF"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
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
    fontSize:18,
    padding:16,
    flex:1
  },
  downIcon:{
    backgroundColor: "#999999",
    height:20,
    width:20,
    marginTop:'auto',
    marginBottom:'auto',
    marginRight:12,
    borderRadius: 7
  },
  divider:{
    height:1,
    backgroundColor: "#DDDDDD"
  },
  bodyPanel: {
    backgroundColor:'#FFFFFF',
    overflow:'hidden'
  },
  bodyText: {
    fontSize:16,
    padding:16,
  }
});
