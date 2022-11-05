import React from "react";
import { Text, View, ScrollView } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Bullet from "/components/Bullet";
import Header from "/components/Header";
import resolveStyles from "/styles/subpage";

export default function Isteryka({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveStyles(computeTheme(), computeFontSize);

  return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Істерика</Text>

          <Text style={styles.header2}>В цій ситуації:</Text>

          <Bullet symbol="1. " style={styles.paragraph}>
            Попросіть глядачів піти. Залишіться з потерпілим наодинці, якщо це
            безпечно для вас.
          </Bullet>
          <Bullet symbol="2. " style={styles.paragraph}>
            Неочікувано зробіть якусь дію, яка може сильно здивувати (можна щось голосно кинути, облити водою, різко крикнути на потерпілого, дати ляпаса).
          </Bullet>
          <Bullet symbol="3. " style={styles.paragraph}>
            Говоріть з потерпілим короткими фразами, впевненим тоном («Випий
            води», «Вмийся»).
          </Bullet>
          <Bullet symbol="4. " style={styles.paragraph}>
            Після істерики наступає виснаження. Покладіть постраждалого спати.
            До прибуття спеціаліста наглядайте за його станом.
          </Bullet>

          <View style={styles.spacer} />
        </View>
      </ScrollView>
    </View>
  );
}
