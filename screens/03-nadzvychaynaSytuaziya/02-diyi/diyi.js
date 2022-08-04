import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Header from "/components/Header";
import ListItem from "/components/ListItem";
import Paragraph from "/components/Paragraph";
import resolveStyles from "/styles/subpage";

export default function Diyi({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveStyles(computeTheme(), computeFontSize);

  const goTo = (dest) => {
    navigation.push(dest);
  };

  return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Надзвичайна ситуація - дії</Text>
          <Paragraph style={{ paddingBottom: 20 }}>
            Нас не готували до війни/кризи. Але ми вміємо просити та приймати
            допомогу. Звернись до підготовлених кваліфікованих спеціалістів. Користуйся порадами фахівців.
            Разом ми вистоємо у надзвичайні часи
          </Paragraph>
          <ListItem
            roundTop
            title="Повітряна тривога"
            onPress={() => goTo("Povitryana")}
          />
          <ListItem
            title="Артилерійський обстріл"
            onPress={() => goTo("Artyleriycky")}
          />
          <ListItem
            title="Вимкнули телебачення"
            onPress={() => goTo("Telebachennya")}
          />
          <ListItem
            title="Застосування хімічної зброї"
            onPress={() => goTo("Zastosuvannya")}
          />
          <ListItem
            title="Евакуація"
            onPress={() => goTo("Evakuatciya")}
          />
          <ListItem
            roundBottom
            title="Вибухонебезпечні знахідки"
            onPress={() => goTo("VybuhonebezpechniZnahidky")}
          />

          <View style={styles.spacer} />
        </View>
      </ScrollView>
    </View>
  );
}
