import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Header from "/components/Header";
import ListItem from "/components/ListItem";
import resolveStyles from "/styles/subpage";

export default function Dytyni({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveStyles(computeTheme(), computeFontSize);
  return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.sectionHeader}>Дитині</Text>

          <ListItem roundTop title="Ігри" onPress={() => navigation.push("Igry")} />
          <ListItem title="Мультфільми" onPress={() => navigation.push("Multfilmy")} />
          <ListItem roundBottom title="Часті запитання" onPress={() => navigation.push("Chasty")} />

          <Text style={styles.sectionHeader}>Антистресова активність</Text>
          <ListItem roundTop title="Діти" onPress={() => navigation.push("Dity")} />
          <ListItem roundBottom title="Підлітки" onPress={() => navigation.push("Pidlitky")} />
        </View>
      </ScrollView>
    </View>
  );
}
