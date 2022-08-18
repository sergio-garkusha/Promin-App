import React from "react";
import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Header from "/components/Header";
import ListItem from "/components/ListItem";
import { TouchableOpacity } from "react-native-gesture-handler";

import Denys from "/assets/team/Denys.png"

export default function AboutUs({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveLocalStyles(computeTheme(), computeFontSize);

  return (
    <ScrollView>
      <Header navigation={navigation} />
      
      <Text>Про нас</Text>
        <TouchableOpacity style={styles.card}>
            <Image source={Denys} style={styles.photo} />
            <View style={styles.copy}>
                <Text>Hehe</Text>
                <Text>Hehe</Text>
            </View>
        </TouchableOpacity>
    </ScrollView>
    )
}

const resolveLocalStyles = (theme, computeFS) => {
    const backgroundColor = theme === "dark" ? "#27335A" : "#FFF";
    const color = theme === "dark" ? "#FFF" : "#000";
    return StyleSheet.create({
        card:{
            width:'90%', 
            padding:16, 
            backgroundColor:"rgba(10,20,30,0.3)", 
            flexDirection: "row",
            borderRadius: 10
        },
        photo:{
            width:64,
            height:64
        },
        copy:{
            paddingLeft:16, 
            textAlign:"center", 
            justifyContent: 'center'
        }
    })
}