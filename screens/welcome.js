import React from "react";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import FullLogo from "@components/FullLogo";
import NextButton from "@components/NextButton";
import { ThemeContext } from "@components/ThemeProvider";
import { FontSizeContext } from "@components/FontSizeProvider";

const topHalfHeight = responsiveHeight(50);

function WelcomeScreen({ navigation }) {
  const toMainMenu = () => {
    navigation.push("MainMenu");
  };

  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveStyles(computeTheme(), computeFontSize);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.topHalf}>
          <FullLogo />
        </View>

        <NextButton onPress={toMainMenu} />

        <View style={{ padding: 32, marginTop: 5 }}>
          <Text style={styles.paragraph}>👋 Вітаємо вас, любі!</Text>
          <Text style={styles.paragraph}>
            Промінь - це ваш кишеньковий довідник психологічної допомоги у
            кризових ситуаціях.
          </Text>
          <Text style={styles.paragraph}>
            Тут ви можете знайти поради та перевірені техніки як покращити свій
            психологічний стан та стан людей навколо вас.
          </Text>
          <Text style={styles.paragraph}>Тримаймося.</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const resolveStyles = (theme, computeFS) => {
  const backgroundColor = theme === "dark" ? "#18203A" : "#F3F3F3";
  const color = theme === "dark" ? "#FFF" : "#000";

  return StyleSheet.create({
    container: {
      backgroundColor,
      flex: 1,
      justifyContent: "center",
    },
    paragraph: {
      color,
      fontFamily: "Ubuntu",
      fontSize: computeFS(17),
      fontStyle: "normal",
      lineHeight: computeFS(24),
      marginBottom: 15,
      marginTop: 15,
      textAlign: "left",
    },
    topHalf: {
      backgroundColor: "#5177ff",
      height: topHalfHeight,
    },
  });
};

export default WelcomeScreen;
