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
          <Text style={styles.header}>Техніка заземлення з відтворенням ритму</Text>
          <Bullet symbol="•" style={styles.paragraph}>Постукайте ногою по підлозі</Bullet>
          <Bullet symbol="•" style={styles.paragraph}>Знайдіть об’єкт, що видає м’який звук, постукайте пальцями по столу і тихенько по склу або будь-якій іншій поверхні</Bullet>
          <Bullet symbol="•" style={styles.paragraph}>Знайдіть приємний звук, а потім створіть ритм і повторюйте його, намагаючись фокусуватися на початку і в кінці кожного створеного вами звуку</Bullet>
          <View style={styles.spacer} />
        </View>
      </ScrollView>
    </View>
  );
}
