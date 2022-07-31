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
          <Text style={styles.header}>Техніка заземлення за відчуттями ніг</Text>
          <Bullet symbol="•" style={styles.paragraph}>Відзначте, як ваші стопи стоять на підлозі.</Bullet>
          <Bullet symbol="•" style={styles.paragraph}>Ви можете встати і міцно «врости» стопами в підлогу, зняти взуття і наступати кожною ногою на землю або на підлогу, відчуваючи, ніби ваші ноги – це фундамент добротного будинку, міцно пов’язаного із землею, відчути в прямому сенсі ґрунт під ногами і силу земного тяжіння.</Bullet>
          <Bullet symbol="•" style={styles.paragraph}>Ви можете зробити це і сидячи на стільці або лежачи.</Bullet>
          <View style={styles.spacer} />
        </View>
      </ScrollView>
    </View>
  );
}
