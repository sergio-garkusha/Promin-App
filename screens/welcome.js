import React from "react";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import ListItem from "/components/ListItem";

import { isAndroid, isMobile } from "/helpers/utils";
import FullLogo from "/components/FullLogo";
import NextButton from "/components/NextButton";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";

import resolveStyles from "/styles/subpage";

const topHalfHeight = responsiveHeight(40);
const IS_WEB = !isMobile();

function WelcomeScreen({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveStyles(computeTheme(), computeFontSize);

  console.log(topHalfHeight);

  const computeDisclaimerPosition = () => {
    if (isAndroid())
      return { height: topHalfHeight / 4 };
    return styles.spacer;
  }

  const toMainMenu = () => {
    navigation.push("MainMenu");
  };

  return (
    <ScrollView>
      <View style={styles.wContainer}>
        <View style={styles.topHalf}>
          <FullLogo />
        </View>

        <NextButton onPress={toMainMenu} />

        <View style={[styles.bottomHalf, IS_WEB && styles.web]}>
          <Text style={styles.paragraph}>👋 Вітаємо вас, любі!</Text>
          <Text style={styles.paragraph}>
            Промінь - це ваш кишеньковий довідник психологічної допомоги у
            кризових ситуаціях.
          </Text>
          <Text style={styles.wParagraph}>
            Тут ви можете знайти поради та перевірені техніки, які допоможуть покращити свій
            психологічний стан та стан людей навколо вас.
          </Text>
          <Text style={styles.paragraph}>Тримаймося.</Text>

          <View style={computeDisclaimerPosition()} />
          <ListItem
            icon="⚠️"
            roundTop
            roundBottom
            title="Медичний Дисклеймер"
            onPress={() => navigation.push("DisclaimerScreen")}
          />
        </View>
      </View>
    </ScrollView>
  );
}

export default WelcomeScreen;
