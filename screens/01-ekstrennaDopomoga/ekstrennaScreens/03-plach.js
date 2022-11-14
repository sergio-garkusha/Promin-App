import React from "react";
import { Text, View, ScrollView } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Bullet from "/components/Bullet";
import Header from "/components/Header";
import resolveStyles from "/styles/subpage";

export default function Plach({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveStyles(computeTheme(), computeFontSize);

  return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Плач </Text>

          <Text style={styles.Subtitle}>В цій ситуації:</Text>

          <Bullet symbol="1." style={styles.paragraph}>
            Не залишайте потерпілого одного.
          </Bullet>

          <Bullet symbol="2." style={styles.paragraph}>
            Встановіть фізичний контакт з потерпілим (візьміть за руку,
            покладіть свою руку йому на плече або спину, погладьте його по
            голові). Дайте потерпілому відчути, що ви поряд.
          </Bullet>
          <Bullet symbol="3." style={styles.paragraph}>
            Не намагайтесь заспокоїти потерпілого. Дайте йому можливість
            виплакатись і виговоритись, «виплеснути» із себе горе, страх,
            образу.
          </Bullet>
          <Bullet symbol="4." style={styles.paragraph}>
            Нічого не питайте, не давайте порад. Ваше завдання - вислухати.
          </Bullet>

          <View style={styles.spacer} />
        </View>
      </ScrollView>
    </View>
  );
}
