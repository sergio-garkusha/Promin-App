import React from "react";
import { Text, View, Image, ScrollView } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Bullet from "/components/Bullet";
import Header from "/components/Header";
import resolveStyles from "/styles/subpage";

import Head from "/assets/images/head.jpg";
import Thumbs from "/assets/images/thumbs.jpg";
import Two from "/assets/images/twoPeople.jpg";

export default function Stupor({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveStyles(computeTheme(), computeFontSize);
  return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Ступор</Text>

          <Text style={styles.Subtitle}>В цій ситуації:</Text>

          <Bullet symbol="1." style={styles.paragraph}>
            Загніть постраждалій усі пальці на руках окрім великих. Великі
            пальці мають бути виставлені назовні.
          </Bullet>

          <View style={[styles.paragraph, { justifyContent: "center", alignItems: "center" }]}>
            <Image source={Thumbs} style={{ width: 293, height: 200 }} />
          </View>

          <Bullet symbol="2." style={styles.paragraph}>
            Кінчиками великого та вказівного пальців масажуйте постраждалій
            точки, розташовані на лобі, над очима рівно посередині між лінією
            росту волосся і бровами, чітко над зіницями.
          </Bullet>

          <View style={[styles.paragraph, { justifyContent: "center", alignItems: "center" }]}>
            <Image source={Head} style={{ width: 293, height: 250 }} />
            <Image source={Two} style={{ width: 293, height: 250 }} />
          </View>

          <Bullet symbol="3." style={styles.paragraph}>
            Долоню вільної руки покладіть на грудну клітину постраждалої.
            Підлаштуйте ритм свого дихання під дихання постраждалої.
          </Bullet>

          <Bullet symbol="4." style={styles.paragraph}>
            Людина, що знаходиться в ступорі, може чути і бачити. Тому говоріть
            їй на вухо тихо, повільно і чітко те, що може викликати сильні
            емоції (краще негативні). Необхідно будь-якими методами добитись
            реакції постраждалої, вивести її з оціпеніння.
          </Bullet>

          <View style={styles.spacer} />
        </View>
      </ScrollView>
    </View>
  );
}
