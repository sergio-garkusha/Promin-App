import React, { useRef, useEffect } from 'react';
import { Animated, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

let toggleDrawer = () => {

}

export default function Accordeon() {
  const drawerAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(
      drawerAnim,
      {
        toValue: 100,
        duration: 500,
      }
    ).start();
  }, [drawerAnim])
  
  return (
    <View style={styles.container}>
      <View style={styles.headerPanel}>
        <Text style={styles.headerText}>
          element title sd sadfcascas casdasxca sasasc ascasc ascas casc asc asc asc 
        </Text>
        <TouchableOpacity style={styles.downIcon} onPress={toggleDrawer}/>
      </View>
      <View style={styles.divider}/>
      <Animated.View style={[styles.bodyPanel, {height: drawerAnim}]}>
        <Text style={styles.bodyText}>
          thiss is article text blah blah ESFlijsfn sdvzdsvln sdvkjnfv sdvknzd  adsvoij asdovm adovn advoknaofv afknv avoknaokvmaokvmoa v aodsfnvao kvmoakvm aokdvmoa fdv
        </Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  headerPanel: {
    fontWeight: 'bold',
    textAlign: 'left',
    backgroundColor: "#FFFFFF",
    flexDirection: 'row'
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
    marginRight:12
  },
  divider:{
    height:1,
    backgroundColor: "#DDDDDD"
  },
  bodyPanel: {
    backgroundColor:'#FFFFFF'
  },
  bodyText: {
    fontSize:16,
    padding:16,
    overflow:'hidden'
  }
});
