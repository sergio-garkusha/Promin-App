import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { ThemeContext } from "@components/ThemeProvider";
import { FontSizeContext } from "@components/FontSizeProvider";
import Header from "@components/Header";
import ListItem from "@components/ListItem";

export default function EkstrennaDopomoga({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveLocalStyles(computeTheme(), computeFontSize);

  return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <View style={{ padding: 20 }}>
            <Text style={styles.title}>Психологічна допомога:</Text>
            <ListItem
              roundTop
              title="Страх"
              onPress={() => navigation.push("Strah")}
            />
            <ListItem
              title="Істерика"
              onPress={() => navigation.push("Isteryka")}
            />
            <ListItem title="Плач" onPress={() => navigation.push("Plach")} />
            <ListItem
              title="Ступор"
              onPress={() => navigation.push("Stupor")}
            />
            <ListItem
              title="Нервове тремтіння"
              onPress={() => navigation.push("NervoveTremtinnya")}
            />
            <ListItem
              title="Агресія"
              onPress={() => navigation.push("Agresiya")}
            />
            <ListItem
              title="Марення і галюцинації"
              onPress={() => navigation.push("Marennya")}
            />
            <ListItem
              roundBottom
              title="Перезбудження"
              onPress={() => navigation.push("Perezbudzennya")}
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
    container: {
      backgroundColor,
      flex: 1,
      justifyContent: "center",
      paddingTop: 110,
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
