YaMau

import React from "react";
import { Text, View, ScrollView } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Bullet from "/components/Bullet";
import Header from "/components/Header";
import resolveStyles from "/styles/subpage";
import ListItem from "/components/ListItem";

export default function YaMau({ navigation }) {
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
          <Text style={styles.header}>Вправа “Я маю, я є, я можу і я буду”</Text>

          <Text style={styles.header2}>Час від часу корисно подумати про свої ресурси.
          </Text>
          
          <Text style={styles.header2}>Робити це означає пам’ятати про свою стійкість і нагадувати про неї. Ця вправа для тих, кому може знадобитися розумовий заряд і нагадування про те, що мотивує Вас у повсякденному житті.
          </Text>

          <Text style={styles.header2}>Для виконання вправи знадобиться папір і ручка.
          </Text>

          <Bullet symbol="•" style={styles.paragraph}>
          Спочатку широко розкрийте долоню і пальці. Покладіть руку на аркуш паперу і обведіть руку.
          </Bullet>

          <Bullet symbol="•" style={styles.paragraph}>
          Напишіть одним пальцем «Я МАЮ» і перерахуйте імена, людей, зображення, місця, тварин, на яких ви можете покластися в підтримці.
          </Bullet>

          <Bullet symbol="•" style={styles.paragraph}>
          Напишіть «Я Є» на іншому пальці і напишіть те, чим ви пишаєтеся.
          </Bullet>

          <Bullet symbol="•" style={styles.paragraph}>
          Напишіть на іншому пальці «Я МОЖУ» і напишіть навички, вміння, види діяльності, якими ви займаєтесь.
          </Bullet>

          <Bullet symbol="•" style={styles.paragraph}>
          Напишіть на іншому пальці «Я БУДУ» і напишіть, що ви будете робити, щоб заспокоїти себе у важкі часи.
          </Bullet>

          <Bullet symbol="•" style={styles.paragraph}>
          Поставте собі великий палець вгору (вподобайку) в кінці вправи!
          </Bullet>

          
          <View style={styles.spacer} />
        </View>
      </ScrollView>
    </View>
  );
}
