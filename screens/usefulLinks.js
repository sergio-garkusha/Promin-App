import React from "react";
import * as Linking from "expo-linking";
import { Text, View, StyleSheet, ScrollView, Image } from "react-native";

import { isMobile } from "/helpers/utils";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Header from "/components/Header";
import { TouchableOpacity } from "react-native-gesture-handler";
import { responsiveWidth } from "react-native-responsive-dimensions";

import OAHO from "/assets/images/links/OAHO.png";
import Vzaemodiya from "/assets/images/links/Vzaemodiya.png";
import NikoVolunteers from "/assets/images/links/NikoVolunteers.png";

const partners = [
  {
    photo: OAHO,
    round: false,
    title: "Одеська Академія Неперервної Освіти",
    sub: null,
    link: "https://ooiuv.odessaedu.net/"
  },
  {
    photo: Vzaemodiya,
    round: true,
    title: "Взаємодія",
    sub: "Швидкий пошук інформації під час війни",
    link: "https://viyna.net/"
  }
];

const orgs = [
  {
    photo: NikoVolunteers,
    round: true,
    title: "Niko.Volunteers",
    sub: "Гуманітарна допомога Миколаївщині під час війни",
    link: "https://nikovolunteers.com/"
  }
];

function handleExtlLink(l) {
  Linking.openURL(l)
}

const IS_WEB = !isMobile();

export default function UsefulLinks({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveLocalStyles(computeTheme(), computeFontSize);

  return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Корисні посилання</Text>

        <View style={IS_WEB && styles.web}>
          <View style={{ paddingBottom: 32 }}>
            <Text style={styles.sub}>Наші Партнери</Text>
            <View style={styles.links}>
              {partners.map(card => (
                <TouchableOpacity
                  style={styles.card}
                  key={card.link}
                  onPress={() => handleExtlLink(card.link)}
                >
                  <Image source={card.photo} style={card.round && styles.rlogo || styles.logo} />
                  <View style={styles.copy}>
                    <Text style={styles.title}>{card.title}</Text>
                    <Text style={styles.subTitle}>{card.sub}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={{ paddingBottom: 150 }}>
            <Text style={styles.sub}>Волонтерські Організації</Text>
            <View style={styles.links}>
              {orgs.map(card => (
                <TouchableOpacity
                  style={styles.card}
                  key={card.link}
                  onPress={() => handleExtlLink(card.link)}
                >
                  <Image source={card.photo} style={card.round && styles.rlogo || styles.logo} />
                  <View style={styles.copy}>
                    <Text style={styles.title}>{card.title}</Text>
                    <Text style={styles.subTitle}>{card.sub}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
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
    web: {
      maxWidth: 540,
      minWidth: 540,
      marginLeft: "auto",
      marginRight: "auto"
    },
    container: {
      backgroundColor: backgroundColor,
      marginTop: 0,
      paddingLeft: 24,
      paddingRight: 24
    },
    header: {
      color: titleColor,
      fontSize: computeFS(24),
      fontFamily: "Ubuntu",
      marginBottom: 32,
      marginTop: 60,
      textAlign: IS_WEB ? "center" : "left"
    },
    sub: {
      color: labelColor,
      fontFamily: "Ubuntu",
      fontSize: computeFS(18),
      lineHeight: computeFS(21),
      marginBottom: 16,
      marginTop: 32,
      textAlign: "left",
    },
    links: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: IS_WEB ? "flex-start" : "space-between",
    },
    card: {
      padding: 16,
      width: (responsiveWidth(50) - 8 - 24),
      maxWidth: 160,
      height: 200,
      backgroundColor: cardBackground,
      borderRadius: 10,
      alignItems: 'center',
      marginBottom: 16,
      marginRight: IS_WEB ? 16 : 0
    },
    logo: {
      width: "100%",
      minHeight: 42,
      marginTop: 10,
      marginBottom: 10
    },
    rlogo: {
      width: 64,
      height: 64,
      borderRadius: 64,
      maxHeight: 64,
      maxWidth: 64
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
      marginTop: 2,
      fontFamily: "Ubuntu",
      color: subtitleColor,
      fontSize: computeFS(14),
      textAlign: "center",
    }
  })
}
