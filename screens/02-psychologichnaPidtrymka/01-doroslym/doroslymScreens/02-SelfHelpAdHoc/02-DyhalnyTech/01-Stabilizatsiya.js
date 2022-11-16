import React from "react";
import { Br, Text, View, ScrollView } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Bullet from "/components/Bullet";
import Header from "/components/Header";
import resolveStyles from "/styles/subpage";
// VidchuvaySvoeTilo
export default function ContentPage({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveStyles(computeTheme(), computeFontSize);

  return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Дихальна техніка стабілізації</Text>
          <Bullet symbol="1." style={styles.paragraph}>
            Прискорене дихання.
          </Bullet>
          <View style={styles.subBullet}>
            <Bullet symbol="•" style={styles.paragraph}>Займіть зручну позу.</Bullet>
            <Bullet symbol="•" style={styles.paragraph}>Опустіть нижню щелепу та висуньте язик (як песик).</Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              Зробіть 7-10 коротких поверхневих вдихів-видихів (Не більше 5 секунд!!!)</Bullet>
          </View>

          <Bullet symbol="2." style={styles.paragraph}>
            Спокійне дихання
            .</Bullet>
          <View style={styles.subBullet}>
            <Text style={styles.paragraph}>Залишаючись у зручній позі, зробіть вдих носом, а видих ротом – три рази.</Text>
          </View>

          <View style={styles.spacer} />
        </View>
      </ScrollView>
    </View>
  );
}
