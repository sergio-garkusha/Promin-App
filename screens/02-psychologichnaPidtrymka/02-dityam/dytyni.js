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
          <Text style={styles.sectionHeader}>Дітям</Text>

          <ListItem
            icon="🧩"
            roundTop
            title="Ігри"
            onPress={() => navigation.push("Igry")}
          />
          <ListItem
            icon="🎬"
            title="Мультфільми"
            onPress={() => navigation.push("Multfilmy")}
          />
          <ListItem
            icon="❓"
            roundBottom
            title="Часті запитання"
            onPress={() => navigation.push("Chasty")}
          />

          <Text style={styles.sectionHeader}>Антистресова активність</Text>
          <ListItem
            icon="👶"
            roundTop
            title="Діти"
            onPress={() => navigation.push("Dity")}
          />
          <ListItem
            icon="👦"
            title="Підлітки"
            onPress={() => navigation.push("Pidlitky")}
            roundBottom
          />
        </View>
      </ScrollView>
    </View>
  );
}
