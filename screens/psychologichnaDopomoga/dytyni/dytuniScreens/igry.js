import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import ListItem from "/components/ListItem";
import Accordion from "../../../../components/Accordion";

const navigateAway = () => {
  // eslint-disable-next-line no-console
  console.log("navigation");
};

export default function Igry() {
  return (
    <ScrollView>
      
      

      <View style={styles.container}>
        <Text style={styles.paragraph}>Назад</Text>
        <Text style={styles.header}>Ігри </Text>

        <ListItem title="Прості, без нічого" onPress={navigateAway} />
        <ListItem title="Ігри з картинками" onPress={navigateAway} />
        <ListItem title="Тілесні ігри для найменших" onPress={navigateAway} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Button: {
    padding: 4,
  },
  container: {
    backgroundColor: "paleturquoise",
    flex: 1,
    justifyContent: "center",
    padding: 8,
  },
  header: {
    fontSize: 22,
    fontWeight: "normal",
    margin: 5,
    textAlign: "center",
  },
  paragraph: {
    fontSize: 14,
    fontWeight: "normal",
    margin: 5,
    textAlign: "center",
  },
  roundImage: {
    borderRadius: 200 / 2,
    height: 200,
    width: 200,
  },
});
