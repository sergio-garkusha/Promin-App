import React from "react";
import { Text, View, ScrollView } from "react-native";
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
          <Text style={styles.header}>Дихальна техніка «3-5-7»</Text>
          <Bullet symbol="•" style={styles.paragraph}>Займіть зручну позу</Bullet>
          <Bullet symbol="•" style={styles.paragraph}>Розгорніть плечі та «розкрийте» грудну клітину</Bullet>
          <Bullet symbol="•" style={styles.paragraph}>Слідкуйте, щоб плечі не були підняті вище рівня ключиці</Bullet>
          <Bullet symbol="•" style={styles.paragraph}>Розслабте м’язи живота</Bullet>
          <Bullet symbol="•" style={styles.paragraph}>На рахунок 1-2-3 зробіть вдих</Bullet>
          <Bullet symbol="•" style={styles.paragraph}>На рахунок 1-2-3-4-5 затримайте дихання</Bullet>
          <Bullet symbol="•" style={styles.paragraph}>На рахунок 1-2-3-4-5-6-7 зробіть видих</Bullet>
          <Text style={styles.paragraph}>Повторіть «трикутник 3-5-7» 3-5 разів</Text>
          <View style={styles.spacer} />
        </View>
      </ScrollView>
    </View>
  );
}
