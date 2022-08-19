import React from "react";
import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Header from "/components/Header";
import { TouchableOpacity } from "react-native-gesture-handler";
import { responsiveWidth } from "react-native-responsive-dimensions";

import Serhii from "/assets/team/Serhii.png"
import Yehor from "/assets/team/Yehor.png"
import Denys from "/assets/team/Denys.png"
import Emilya from "/assets/team/Emilya.png"
import Kateryna from "/assets/team/Kateryna.png"
import Tetyana from "/assets/team/Tetyana.png"
import Iryna from "/assets/team/Iryna.png"
import Maryna from "/assets/team/Maryna.png"
import Kostyantyn from "/assets/team/Kostyantyn.png"
import Vladyslav from "/assets/team/Vladyslav.png"

let teamMembers = [
  {
    photo: Serhii,
    name: "Сергій Гаркуша",
    title: "Розробка",
  },
  {
    photo: Yehor,
    name: "Єгор Седлецький",
    title: "Розробка"
  },
  {
    photo: Denys,
    name: "Денис Невожай",
    title: "Дизайн"
  },
  {
    photo: Emilya,
    name: "Емілія Невмержицька",
    title: "Дизайн, контент"
  },
  {
    photo: Kateryna,
    name: "Катерина Павленко",
    title: "Психолог"
  },
  {
    photo: Tetyana,
    name: "Тетяна Краснощок",
    title: "Психолог"
  },
  {
    photo: Iryna,
    name: "Ірина Пивоварчик",
    title: "Психолог"
  },
  {
    photo: Maryna,
    name: "Марина Маляренко",
    title: "Коннектор"
  },
  {
    photo: Kostyantyn,
    name: "Костянтин Глазков",
    title: "Розробка"
  },
  {
    photo: Vladyslav,
    name: "Владислав Крутюс",
    title: "Розробка"
  }
]

let computeFS;

export default function AboutUs({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  computeFS = computeFontSize;
  const styles = resolveLocalStyles(computeTheme());

  console.log(styles)
  return (
    <View>
      <Header navigation={navigation} />
      
      <ScrollView style={styles.container}>

        <Text style={styles.header}>Наша команда</Text>

        <View style={{flex:1}}>
          <View style={styles.team}>

            {teamMembers.map(member => (
              <TouchableOpacity style={styles.card} key={member.name}>
                <Image source={member.photo} style={styles.photo} />
                <View style={styles.copy}>
                  <Text style={styles.title}>{member.name}</Text>
                  <Text style={styles.subTitle}>{member.title}</Text>
                </View>
              </TouchableOpacity>
            ))}

          </View>
        </View>

      </ScrollView>
    </View>
  )
}

const resolveLocalStyles = (theme) => {
  const backgroundColor = theme === "dark" ? "#18203A" : "#F3F3F3";
  const cardBackground = theme === "dark" ? "#27335A" : "#FFF";
  const titleColor = theme === "dark" ? "#FFF" : "#000";
  const subtitleColor = theme === "dark" ? "#DDD" : "#666"
  const labelColor = theme === "dark" ? "#848EB0" : "#666";

  console.log(responsiveWidth(100))

  return StyleSheet.create({
    container: { 
      backgroundColor: backgroundColor,
      marginTop: 100,
      padding: 10,
    },
    header:{
      color: titleColor,
      fontSize: computeFS(24),
      fontFamily: "Ubuntu",
      marginBottom: 32
    },
    team: {
      flexDirection: "row",
      flexWrap: "wrap"
    },
    card:{
      margin: 8,
      padding: 16,
      width: (responsiveWidth(50) - 8 - 20),
      height: 180,
      backgroundColor: cardBackground, 
      borderRadius: 10,
      alignItems: 'center'
    },
    photo:{
      width:80,
      height:80,
      borderRadius:40
    },
    copy:{
      marginTop: 12,
      textAlign:"center", 
      justifyContent: 'center',
    },
    title: {
      fontFamily: "Ubuntu",
      color: titleColor,
      fontSize: computeFS(16),
      marginBottom: 4,
    },
    subTitle: {
      fontFamily: "Ubuntu",
      color: subtitleColor,
      fontSize: computeFS(14),
    }
  })
}