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
          <Text style={styles.header}>Техніка заземлення в русі</Text>
          <Bullet symbol="•" style={styles.paragraph}>Рухайтеся!</Bullet>
          <Bullet symbol="•" style={styles.paragraph}>Покачайте ногами, звертаючи увагу на відчуття, як рухається кожна нога окремо.</Bullet>
          <Bullet symbol="•" style={styles.paragraph}>Спробуйте, як може рухатися нога окремо, коли всі інші частини тіла залишаються нерухомими.</Bullet>
          <Bullet symbol="•" style={styles.paragraph}>Виконайте те ж саме з пальцями, відчуваючи силу в м’язах, їх напруга і розслаблення під час виконання руху.</Bullet>
          {/* <View style={styles.spacer} /> */}
        </View>
      </ScrollView>
    </View>
  );
}
