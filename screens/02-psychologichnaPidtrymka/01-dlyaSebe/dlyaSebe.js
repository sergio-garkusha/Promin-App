import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Header from "/components/Header";
import Paragraph from "/components/Paragraph";
import ListItem from "/components/ListItem";
import resolveStyles from "/styles/subpage";

export default function DlyaSebe({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveStyles(computeTheme(), computeFontSize);

  const goTo = (destination) => {
    navigation.push(destination);
  };

  return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Для Себе</Text>
          <Paragraph style={{ paddingBottom: 20 }}>
            Ми сильні. Ми разом. Ми впораємось. Допоможи собі у складні часи. Турбуйся про себе плануючи поточні щоденні справи, тримай свою психологічну стійкість на поготові завдяки технікам самодопомоги, долай стрес активністю.Дослідження свідчать, що людська психіка здатна здолати найскладніші перешкоди за умови підтримки та піклування.
          </Paragraph>
          <ListItem
            roundTop
            title="Щоденна турбота для себе"
            onPress={() => navigation.push("Shodenna")}
          />
          <ListItem
            title="Техніки самодопомоги в моменті.."
            onPress={() => goTo("Techniky")}
          />
          <ListItem
            title="Антистресова активність"
            onPress={() => goTo("Antistresova")}
            roundBottom
          />
        </View>
      </ScrollView>
    </View>
  );
}
