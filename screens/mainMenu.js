import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";

import { isMobile } from "/helpers/utils";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Header from "/components/Header";
import ListItem from "/components/ListItem";

const IS_WEB = !isMobile();
let computeFS;

export default function MainMenu({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  computeFS = computeFontSize;
  const styles = resolveLocalStyles(computeTheme());
  return (
    <View>
      <Header navigation={navigation} homeDisabled={true} />
      <ScrollView>
        <View style={[styles.container, IS_WEB && styles.web]}>
          <View style={{ padding: 20 }}>
            <Text style={styles.title}>Екстрена допомога</Text>
            <ListItem
              icon="🚨"
              roundTop
              roundBottom
              title="Екстрена психологічна допомога"
              onPress={() => navigation.push("EkstrennaDopomoga")}
            />

            <Text style={styles.title}>Психологічна підтримка</Text>
            <ListItem
              icon="👩"
              roundTop
              title="Для себе"
              onPress={() => navigation.push("DlyaSebe")}
            />
            <ListItem
              icon="👦"
              roundBottom
              title="Дитині"
              onPress={() => navigation.push("Dytyni")}
            />

            <Text style={styles.title}>Надзвичайна ситуація</Text>
            <ListItem
              icon="🚑"
              roundTop
              title="Контакти служб порятунку"
              onPress={() => navigation.push("Kontakty")}
            />
            <ListItem
              icon="👉"
              roundBottom
              title="Дії у різних ситуаціях"
              onPress={() => navigation.push("Diyi")}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const resolveLocalStyles = (theme) => {
  const backgroundColor = theme === "dark" ? "#18203A" : "#F3F3F3";
  const color = theme === "dark" ? "#FFF" : "#000";
  const labelColor = theme === "dark" ? "#848EB0" : "#666";
  return StyleSheet.create({
    web: {
      maxWidth: 420,
      marginLeft: "auto",
      marginRight: "auto"
    },
    Button: {
      padding: 4,
    },
    container: {
      backgroundColor,
      marginTop: 26
    },
    listGroup: {
      borderRadius: 12,
    },
    paragraph: {
      color,
      fontSize: computeFS(14),
      fontWeight: "normal",
      margin: 5,
      textAlign: "center",
    },
    roundImage: {
      borderRadius: 200 / 2,
      height: 200,
      width: 200,
    },
    title: {
      color: labelColor,
      fontFamily: "Ubuntu",
      fontSize: computeFS(18),
      lineHeight: computeFS(21),
      marginBottom: 16,
      marginTop: 32,
      textAlign: "left",
    },
  });
};
