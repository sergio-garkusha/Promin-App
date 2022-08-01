import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Header from "/components/Header";
import ListItem from "/components/ListItem";

const navigateAway = () => {
  // eslint-disable-next-line no-console
  console.log("navigation");
};

export default function DlyaSebe({ navigation }) {
  const navigateTo = (destination) => {
    navigation.push(destination);
  };

  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveLocalStyles(computeTheme(), computeFontSize);

  return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <View style={{ padding: 20 }}>
            <Text style={styles.title}>Для Себе </Text>
            <Text style={styles.paragraph}>
              Ми сильні. Ми разом. Ми справимось. Допоможи собі у складні часи.
              Турбуйся про себе плануючи поточні щоденні справи, тримай свою
              психологічну стійкість на поготові завдяки технікам самодопомоги,
              долай стрес активністю. Дослідження свідчать, що людська психіка
              здатна здолати найскладніші перешкоди за умови підтримки та
              піклування.
            </Text>
            <ListItem
              roundTop
              title="Щоденна турбота для себе"
              onPress={() => navigation.push("Shodenna")}
            />
            <ListItem
              title="Техніки самодопомоги в моменті.."
              onPress={() => navigateTo("Techniky")}
            />
            <ListItem
              roundBottom
              title="Антистресова активність"
              onPress={() => navigateTo("Antistresova")}
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
    },
    header: {
      fontSize: computeFS(22),
      fontWeight: "normal",
      margin: 5,
      textAlign: "center",
    },
    paragraph: {
      color,
      fontFamily: "Ubuntu",
      fontSize: computeFS(17),
      fontStyle: "normal",
      lineHeight: computeFS(24),
      marginBottom: 25,
      marginTop: 15,
      textAlign: "left",
    },
    roundImage: {
      borderRadius: 200 / 2,
      height: 200,
      width: 200,
    },
    title: {
      color,
      fontFamily: "Ubuntu_M",
      fontSize: computeFS(25),
      fontWeight: "normal",
      marginBottom: 15,
      marginTop: 40,
      textAlign: "left",
    },
  });
};
