import React from "react";
import { Text, View, ScrollView } from "react-native";
import { ThemeContext } from "@components/ThemeProvider";
import Bullet from "@components/Bullet";
import Header from "@components/Header";
import resolveStyles from "@styles/subpage";

export default function Strah({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const styles = resolveStyles(computeTheme());
  return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Страх</Text>

          <Text style={styles.header2}>В цій ситуації:</Text>

          <Bullet symbol="1." style={styles.paragraph}>
            Покладіть руку постраждалого собі на зап’ястя, щоб він відчув ваш
            спокійний пульс. Це буде сигналом: “Я зараз поряд, ти не один!”.
          </Bullet>
          <Bullet symbol="2." style={styles.paragraph}>
            Дихайте глибоко і рівно. Заохочуйте постраждалого дихати з вами в
            одному ритмі.
          </Bullet>
          <Bullet symbol="3." style={styles.paragraph}>
            Якщо постраждалий щось говорить, слухайте його, виражайте
            зацікавленість, розуміння, співчуття.
          </Bullet>
          <Bullet symbol="4." style={styles.paragraph}>
            Зробіть постраждалому легкий масаж найбільш напружених м’язів тіла.
          </Bullet>

          <View style={styles.spacer} />
        </View>
      </ScrollView>
    </View>
  );
}
