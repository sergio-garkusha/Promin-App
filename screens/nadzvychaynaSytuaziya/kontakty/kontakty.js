import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { ThemeContext } from "@components/ThemeProvider";
import Header from "@components/Header";
import ListItem from "@components/ListItem";

const navigateAway = () => {
  // eslint-disable-next-line no-console
  console.log("navigation");
};

export default function Kontakty({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const styles = resolveLocalStyles(computeTheme());

  return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <View style={{ padding: 20 }}>
            <Text style={styles.title}>Контакти служб порятунку</Text>

            <ListItem roundTop title="Пожежна" onPress={navigateAway} />
            <ListItem title="Поліція" onPress={navigateAway} />
            <ListItem title="Швидка допомога" onPress={navigateAway} />
            <ListItem title="Аварійна служба газу" onPress={navigateAway} />
            <ListItem
              roundBottom
              title="Екстренна психолог допомога"
              onPress={navigateAway}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const resolveLocalStyles = (theme) => {
  const backgroundColor = theme === "dark" ? "#18203A" : "#F3F3F3";
  const color = theme === "dark" ? "#848EB0" : "#666";
  return StyleSheet.create({
    container: {
      backgroundColor,
      flex: 1,
      justifyContent: "center",
      paddingTop: 110,
    },
    title: {
      color,
      fontFamily: "Ubuntu",
      fontSize: 18,
      lineHeight: 21,
      marginBottom: 16,
      marginTop: 32,
      textAlign: "left",
    },
  });
};
