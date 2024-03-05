import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Header from "/components/Header";
import ListItem from "/components/ListItem";
import resolveStyles from "/styles/subpage";
import { crossPlatformNav } from "/helpers/utils";

export default function Dytyni({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveStyles(computeTheme(), computeFontSize);

  const goTo = (destination) => {
    crossPlatformNav(destination, navigation);
  };

  return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={[styles.sectionHeader, styles.Subtitle]}>Дітям</Text>

          <ListItem
            icon="🧩"
            roundTop
            title="Ігри"
            onPress={() => goTo("Дітям/Ігри")}
          />
          <ListItem
            icon="🎬"
            title="Мультфільми"
            onPress={() => goTo("Дітям/Мультфільми")}
          />
          <ListItem
            icon="❓"
            roundBottom
            title="Часті запитання"
            onPress={() => goTo("Дітям/Часті запитання")}
          />

          <Text style={styles.sectionHeader}>Антистресова активність</Text>
          <ListItem
            icon="👶"
            roundTop
            title="Діти"
            onPress={() => goTo("Дітям/Антистресова активність для дітей")}
          />
          <ListItem
            icon="👦"
            title="Підлітки"
            onPress={() => goTo("Дітям/Антистресова активність для підлітків")}
            roundBottom
          />
        </View>
      </ScrollView>
    </View>
  );
}
