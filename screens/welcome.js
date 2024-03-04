import React from "react";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { Text, View, ScrollView } from "react-native";
import ListItem from "/components/ListItem";

import { IS_ANDROID, IS_MOBILE, IS_WEB } from "/helpers/utils";
import FullLogo from "/components/FullLogo";
import NextButton from "/components/NextButton";
import MedBtn from "/icons/buttons/01-medical-disclaimer";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";

import resolveStyles from "/styles/subpage";

const topHalfHeight = responsiveHeight(40);


function WelcomeScreen({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveStyles(computeTheme(), computeFontSize);
  const iconsColor = computeTheme() === "light" ? "#666": "#FFF";

  // console.log(topHalfHeight);

  const computeDisclaimerPosition = () => {
    if (IS_ANDROID)
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

          {IS_MOBILE && (
            <>
              <View style={computeDisclaimerPosition()} />
              <ListItem
                roundTop
                icon={
                  <MedBtn
                    style={[styles.iconBtn, {marginBottom: -8}]}
                    prefthemecolor={iconsColor}
                  />}
                title="Медичний Дисклеймер"
                onPress={() => navigation.push("DisclaimerScreen")}
                roundBottom
              />
            </>
          )}
        </View>
      </View>
    </ScrollView>
  );
}

export default WelcomeScreen;
