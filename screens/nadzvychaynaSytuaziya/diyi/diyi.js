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

export default function Diyi({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveLocalStyles(computeTheme(), computeFontSize);

  return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <View style={{ padding: 20 }}>
            <Text style={styles.title}>Надзвичайна ситуація - дії</Text>

            <Text style={styles.paragraph}> Нас не готували до війни/кризи. Але ми вміємо просити та приймати
              допомогу. Звернись до підготовлених кваліфікованих спеціалістів. Користуйся порадами фахівців.
              Разом ми вистоємо у надзвичайні часи</Text>

            <ListItem roundTop title="Повітряна тривога" onPress={() => navigation.push("Povitryana")} />

            <ListItem title="Артилерійський обстріл" onPress={navigateAway} />
            <ListItem title="Вимкнули телебачення" onPress={() => navigation.push("Telebachennya")} />
            <ListItem title="Застосування хімічної зброї" onPress={navigateAway} />
            <ListItem title="Евакуація" onPress={navigateAway} />

            <ListItem roundBottom title="Вибухонебезпечні знахідки" onPress={() => navigation.push("VibuhonebezpechniZnahidki")} />

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
