import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { ThemeContext } from "@components/ThemeProvider";
import { FontSizeContext } from "@components/FontSizeProvider";
import Header from "@components/Header";
import ListItem from "@components/ListItem";

const navigateAway = () => {
  // eslint-disable-next-line no-console
  console.log("navigation");
};

export default function Dytuni({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveLocalStyles(computeTheme(), computeFontSize);

  return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <View style={{ padding: 20 }}>
            <Text style={styles.title}>Дитині</Text>

            <ListItem roundTop title="Ігри" onPress={navigateAway} />
            <ListItem title="Мультфільми" onPress={navigateAway} />
            <ListItem title="Антистресова активність" onPress={navigateAway} />
            <ListItem
              roundBottom
              title="Часті запитання"
              onPress={navigateAway}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const resolveLocalStyles = (theme, computeFS) => {
  const backgroundColor = theme === "dark" ? "#18203A" : "#F3F3F3";
  const color = theme === "dark" ? "#848EB0" : "#666";
  return StyleSheet.create({
    Button: {
      padding: 4,
    },
    container: {
      backgroundColor,
      flex: 1,
      justifyContent: "center",
      paddingTop: 110,
    },
    header: {
      fontSize: computeFS(22),
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
      color,
      fontFamily: "Ubuntu",
      fontSize: computeFS(18),
      lineHeight: computeFS(21),
      marginBottom: 16,
      marginTop: 32,
      textAlign: "left",
    },
  });
};
