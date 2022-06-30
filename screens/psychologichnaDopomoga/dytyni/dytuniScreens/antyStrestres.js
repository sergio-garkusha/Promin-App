import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import ListItem from "/components/ListItem";

const navigateAway = () => {
  // eslint-disable-next-line no-console
  console.log("navigation");
};

export default function AntyStrestres() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.paragraph}>Назад</Text>
        <Text style={styles.header}>Антистресова активність </Text>

        <ListItem title="Дітям" onPress={navigateAway} />
        <ListItem title="Підлітки" onPress={navigateAway} />
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
