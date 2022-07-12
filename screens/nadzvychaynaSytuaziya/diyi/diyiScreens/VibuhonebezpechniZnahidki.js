import React from "react";
import { Text, View, ScrollView } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Bullet from "/components/Bullet";
import Header from "/components/Header";
import resolveStyles from "/styles/subpage";
import ListItem from "/components/ListItem";

export default function VibuhonebezpechniZnahidki({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveStyles(computeTheme(), computeFontSize);
  const navigateAway = () => {// eslint-disable-next-line no-console console.log("navigation");
 };
  
 return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Вибухонебезпечні знахідки</Text>
          <ListItem
              roundTop
              roundBottom
              title="Вибухонебезпечні предмети" onPress={()=>navigation.push("VibuhonebezpechniPredmeti")}/>
      

          <View style={styles.spacer} />
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