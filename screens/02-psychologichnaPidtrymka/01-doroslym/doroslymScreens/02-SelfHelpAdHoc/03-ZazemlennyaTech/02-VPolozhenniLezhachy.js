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
          <Text style={styles.header}>Техніка заземлення в положенні лежачи</Text>
          <Text style={styles.Subtitle}>В прямому сенсі заземлення:</Text>
          <Bullet symbol="•" style={styles.paragraph}>Ляжте на підлогу.</Bullet>
          <Bullet symbol="•" style={styles.paragraph}>Швидко проскануйте своє тіло, щоб відзначити в яких саме місцях підлога торкається вашого тіла, які частини тіла відчувають її і сфокусуйтеся на цьому відчутті тиску, текстури, температури.</Bullet>
          <Bullet symbol="•" style={styles.paragraph}>Відзначте всі вібрації, які ви зараз можете відчути в будинку. Ви можете поставити на підлогу музичну колонку і відчувати її вібрації.</Bullet>
          <View style={styles.spacer} />
        </View>
      </ScrollView>
    </View>
  );
}
