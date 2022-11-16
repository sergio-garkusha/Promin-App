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
          <Text style={styles.header}>Техніка заземлення через активні дії</Text>
          <Bullet symbol="•" style={styles.paragraph}>Займіться активністю, яка б залучала всі частини тіла.</Bullet>
          <Bullet symbol="•" style={styles.paragraph}>Зробіть генеральне прибирання.</Bullet>
          <Bullet symbol="•" style={styles.paragraph}>Займіться роботою на ділянці.</Bullet>
          <Bullet symbol="•" style={styles.paragraph}>Складіть та пересортуйте речі.</Bullet>
          <Bullet symbol="•" style={styles.paragraph}>Спробуйте щось нове з рукоділля: вишивка, в’язання та інше.</Bullet>
          <View style={styles.spacer} />
        </View>
      </ScrollView>
    </View>
  );
}
