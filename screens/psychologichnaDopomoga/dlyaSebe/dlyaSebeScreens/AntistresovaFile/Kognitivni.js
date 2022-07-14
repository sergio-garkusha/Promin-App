import React from "react";
import { Text, View, ScrollView } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Bullet from "/components/Bullet";
import Header from "/components/Header";
import resolveStyles from "/styles/subpage";
import ListItem from "/components/ListItem";

export default function Kognitivni({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveStyles(computeTheme(), computeFontSize);
  
  
  return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Когнітивні вправи</Text>

          <Text style={styles.paragraph}>Тим людям, яким простіше справлятись з важкими переживаннями через раціоналізацію того,
           що відбувається пропонуємо когнітивні вправи. Когнітивні вправи формують здібності до адекватних дій та впливають на 
           навички самоконтролю.  Емоційні реакції і поведінка людей можуть безпосередньо залежати від так званих «когніцій» — думок,
            переконань, інтепретацій, свідомо чи неусвідомлено наданих значень подіям і явищам життя. Таким чином, виникає ланцюжок: 
            ситуація/подія — значення, яке ми надаємо — емоція — поведінкова реакція. Тобто, впливаючи на когнітивну сферу, може бути 
            легше опановувати почуття, з якими ви стикаєтесь в нових для вас ситуаціях. 
          </Text>

          <Text style={styles.paragraph}>Памятайте, що самому собі необхідно дати час на відновлення, бо якщо ви допомагаєте собі, то тоді будете 
          </Text>
          

          <View style={styles.spacer} />
        </View>
      </ScrollView>
    </View>
  );
}
