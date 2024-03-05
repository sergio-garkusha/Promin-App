import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Header from "/components/Header";
import ListItem from "/components/ListItem";
import Paragraph from "/components/Paragraph";
import resolveStyles from "/styles/subpage";
import { crossPlatformNav } from "/helpers/utils";

export default function Diyi({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveStyles(computeTheme(), computeFontSize);

  const goTo = (destination) => {
    crossPlatformNav(destination, navigation);
  };

  return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Дії в надзвичайних ситуаціях</Text>
          <Paragraph>
            Нас не готували до війни/кризи. Але ми вміємо просити та приймати
            допомогу.
          </Paragraph>
          <Paragraph>
            Звернись до підготовлених кваліфікованих спеціалістів. Користуйся порадами фахівців.
          </Paragraph>
          <Paragraph style={{ paddingBottom: 20 }}>
            Разом ми вистоїмо у надзвичайні часи.
          </Paragraph>
          <ListItem
            roundTop
            icon="🚨"
            title="Повітряна тривога"
            onPress={() => goTo("Дії в надзвичайних ситуаціях/Повітряна тривога")}
          />
          <ListItem
            icon="🖌"
            title="Артилерійський обстріл"
            onPress={() => goTo("Дії в надзвичайних ситуаціях/Артилерійський обстріл")}
          />
          <ListItem
            icon="📺"
            title="Вимкнули телебачення"
            onPress={() => goTo("Дії в надзвичайних ситуаціях/Вимкнули телебачення")}
          />
          <ListItem
            icon="🧪"
            title="Застосування хімічної зброї"
            onPress={() => goTo("Дії в надзвичайних ситуаціях/Застосування хімічної зброї")}
          />
          <ListItem
            icon="🚌"
            title="Евакуація"
            onPress={() => goTo("Дії в надзвичайних ситуаціях/Евакуація")}
          />
          <ListItem
            icon="🧨"
            title="Вибухонебезпечні знахідки"
            onPress={() => goTo("Дії в надзвичайних ситуаціях/Вибухонебезпечні знахідки")}
            roundBottom
          />

          <View style={styles.spacer} />
        </View>
      </ScrollView>
    </View>
  );
}
