import React from "react";
import { Text, View, ScrollView } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Bullet from "/components/Bullet";
import Header from "/components/Header";
import resolveStyles from "/styles/subpage";

export default function Marennya({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveStyles(computeTheme(), computeFontSize);

  return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Марення і галюцинації</Text>

          <Text style={styles.header2}>В цій ситуації:</Text>

          <Bullet symbol="1. " style={styles.paragraph}>
            Зверніться до медичних працівників, викличте бригаду швидкої
            психіатричної допомоги.
          </Bullet>

          <Bullet symbol="2. " style={styles.paragraph}>
            До прибуття спеціалістів слідкуйте за тим щоб постраждалий не
            зашкодив собі та оточуючим.
          </Bullet>

          <Bullet symbol="3. " style={styles.paragraph}>
            Ізолюйте постраждалого але не залишайте наодинці.
          </Bullet>

          <Bullet symbol="4. " style={styles.paragraph}>
            Говоріть з постраждалим спокійним голосом. Погоджуйтесь з ним, не
            намагайтесь переконати його. Пам’ятайте, в такій ситуації переконати
            постраждалого неможливо.
          </Bullet>

          <View style={styles.spacer} />
        </View>
      </ScrollView>
    </View>
  );
}
