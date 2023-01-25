import React from "react";
import * as Linking from "expo-linking";
import { Text, View, StyleSheet, ScrollView, Image } from "react-native";

import { EMAIL, WEBSITE } from "@env";
import { isMobile } from "/helpers/utils";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Header from "/components/Header";
import { TouchableOpacity } from "react-native-gesture-handler";
import { responsiveWidth } from "react-native-responsive-dimensions";
import ListItem from "/components/ListItem";

import EmailBtn from "/icons/buttons/01-email";
import WebsiteBtn from "/icons/buttons/02-website";

import Sergii from "/assets/images/team/Sergii.png";
import Yehor from "/assets/images/team/Yehor.png";
import Denys from "/assets/images/team/Denys.png";
import Emilya from "/assets/images/team/Emilya.png";
import Kateryna from "/assets/images/team/Kateryna.png";
import Tetyana from "/assets/images/team/Tetyana.png";
import Iryna from "/assets/images/team/Iryna.png";
import Maryna from "/assets/images/team/Maryna.png";
import Kostyantyn from "/assets/images/team/Kostyantyn.png";
import Vladyslav from "/assets/images/team/Vladyslav.png";

const IS_WEB = !isMobile();

const teamMembers = [
  {
    photo: Sergii,
    fname: "Сергій",
    lname: "Гаркуша",
    title: "Розробка",
    link: "https://www.linkedin.com/in/sergiigarkusha/?locale=en_US"
  },
  {
    photo: Yehor,
    fname: "Єгор",
    lname: "Седлецький",
    title: "Розробка",
    link: "https://www.linkedin.com/in/gary-sedletsky-7368959a/"
  },
  {
    photo: Denys,
    fname: "Денис",
    lname: "Невожай",
    title: "Дизайн",
    link: "https://www.linkedin.com/in/dnevozhai/"
  },
  {
    photo: Emilya,
    fname: "Емілія",
    lname: "Костюкевич",
    title: "Дизайн, контент",
    link: "https://www.linkedin.com/in/emiliia/"
  },
  {
    photo: Kateryna,
    fname: "Катерина",
    lname: "Павленко",
    title: "Психолог",
    link: null
  },
  {
    photo: Tetyana,
    fname: "Тетяна",
    lname: "Краснощок",
    title: "Психолог",
    link: null
  },
  {
    photo: Iryna,
    fname: "Ірина",
    lname: "Пивоварчик",
    title: "Психолог",
    link: null
  },
  {
    photo: Maryna,
    fname: "Марина",
    lname: "Маляренко",
    title: "Коннектор",
    link: null
  },
  {
    photo: Kostyantyn,
    fname: "Костянтин",
    lname: "Глазков",
    title: "Розробка",
    link: null
  },
  {
    photo: Vladyslav,
    fname: "Владислав",
    lname: "Крутюс",
    title: "Розробка",
    link: null
  }
];

function handleExtlLink(l) {
  l && Linking.openURL(l);
}

export default function AboutUs({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);

  const computedTheme = computeTheme();
  const iconsColor = computedTheme === "dark" ? "#FFF" : "#666";
  const styles = resolveLocalStyles(computedTheme, computeFontSize);

  return (
    <View>
      <Header backButton navigation={navigation} />

      <ScrollView style={styles.container}>

        <View style={IS_WEB && styles.teamWeb}>
          <Text style={styles.header}>Наша команда</Text>
          <View style={{ flex: 1, marginBottom: 32 }}>
            <View style={styles.team}>
              {teamMembers.map(member => (
                <TouchableOpacity
                  style={styles.card}
                  key={member.lname}
                  onPress={() => handleExtlLink(member.link)}
                >
                  <Image source={member.photo} style={styles.photo} />
                  <View style={styles.copy}>
                    <Text style={styles.title}>{member.fname}</Text>
                    <Text style={styles.title}>{member.lname}</Text>
                    <Text style={styles.subTitle}>{member.title}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        <View style={[styles.contacts, IS_WEB && styles.teamWeb]}>
          <Text style={styles.sub}>Контакти</Text>
          <ListItem
            roundTop
            icon={<EmailBtn style={styles.iconBtn} prefthemecolor={iconsColor} />}
            isButton
            title={EMAIL}
            onPress={() => handleExtlLink(`mailto:${EMAIL}`)}
          />
          <ListItem
            icon={<WebsiteBtn style={styles.iconBtn} prefthemecolor={iconsColor} />}
            isButton
            title={WEBSITE}
            onPress={() => handleExtlLink(WEBSITE)}
            roundBottom
          />
        </View>
      </ScrollView>
    </View>
  )
}

const resolveLocalStyles = (theme, computeFS) => {
  const backgroundColor = theme === "dark" ? "#18203A" : "#F3F3F3";
  const cardBackground = theme === "dark" ? "#27335A" : "#FFF";
  const titleColor = theme === "dark" ? "#FFF" : "#000";
  const subtitleColor = theme === "dark" ? "#DDD" : "#666"
  const labelColor = theme === "dark" ? "#848EB0" : "#666";

  return StyleSheet.create({
    teamWeb: {
      maxWidth: 540,
      marginLeft: "auto",
      marginRight: "auto"
    },
    container: {
      backgroundColor: backgroundColor,
      marginTop: 0,
      paddingLeft: 24,
      paddingRight: 24,
    },
    header: {
      color: titleColor,
      fontSize: computeFS(24),
      fontFamily: "Ubuntu",
      marginBottom: 32,
      marginTop: 60,
      textAlign: IS_WEB ? "center" : "left",
    },
    sub: {
      color: labelColor,
      fontFamily: "Ubuntu",
      fontSize: computeFS(18),
      lineHeight: computeFS(21),
      marginBottom: 16,
      marginTop: 0,
      textAlign: IS_WEB ? "center" : "left",
    },
    team: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: IS_WEB ? "space-evenly" : "space-between"
    },
    card: {
      margin: 8,
      marginLeft: 0,
      marginRight: 0,
      padding: 16,
      width: (responsiveWidth(50) - 8 - 24),
      maxWidth: 160,
      height: 180,
      backgroundColor: cardBackground,
      borderRadius: 10,
      alignItems: 'center'
    },
    photo: {
      width: 80,
      height: 80,
      borderRadius: 40
    },
    copy: {
      marginTop: 12,
      textAlign: "center",
      justifyContent: 'center',
    },
    title: {
      fontFamily: "Ubuntu",
      color: titleColor,
      fontSize: computeFS(16),
      marginBottom: 4,
      textAlign: "center",
    },
    subTitle: {
      fontFamily: "Ubuntu",
      color: subtitleColor,
      fontSize: computeFS(14),
      textAlign: "center",
    },
    contacts: {
      paddingLeft: 10,
      paddingRight: 10,
      marginBottom: 150,
      width: IS_WEB ? 420 : "auto"
    },
    iconBtn: {
      flex: 3,
      marginBottom: -7
    }
  })
}
