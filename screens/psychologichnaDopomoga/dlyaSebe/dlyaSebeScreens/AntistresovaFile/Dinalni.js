import React from "react";
import { Text, View, ScrollView } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Bullet from "/components/Bullet";
import Header from "/components/Header";
import resolveStyles from "/styles/subpage";
import ListItem from "/components/ListItem";

export default function Dinalni({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveStyles(computeTheme(), computeFontSize);
  
  
  return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Дихальні вправи</Text>

          <Text style={styles.paragraph}>Дихальні техніки є дуже дієвим інструментом самокерування в ситуаціях стресу і тривоги,
           в часі фізичного або емоційного збудження. Вміння заспокоювати себе за допомогою дихання – це дуже практична і універсальна 
           навичка, оскільки дихання завжди з нами, ми можемо дихати будь-де і це природно. 
Дихальні вправи спрямовані на подолання проявів стресу та збудження, зменшення тривожності, відновлення самоконтролю.
          </Text>
          



          <View style={styles.spacer} />
        </View>
      </ScrollView>
    </View>
  );
}
