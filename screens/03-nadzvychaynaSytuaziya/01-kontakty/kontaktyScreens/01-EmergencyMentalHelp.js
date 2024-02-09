import React from "react";
import { Text, View, ScrollView } from "react-native";
import * as Linking from "expo-linking";

import { IS_MOBILE } from "/helpers/utils";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import resolveStyles from "/styles/subpage";
import Header from "/components/Header";
import ListItem from "/components/ListItem";



const phoneCall = p => {
  Linking.openURL(`tel:${p}`);
};

const medLines = [
  {
    name: "#ВАРТОЖИТИ — допомоги і підтримки онко пацієнтів та їхніх близьких.",
    phone: 5522
  }
];

const miscLines = [
  {
    name: "Безоплатна Правова Допомога",
    phone: "0 800 213 103"
  },
  {
    name: "Національна Психологічна Асоціація",
    phone: "0 800 100 102"
  },
  {
    name: "Для Дітей та Молоді",
    phone: "0 800 500 225"
  },
];

const hotLines = [
  {
    name: "Стоп Паніка",
    phone: "0 800 50 18 92"
  },
  {
    name: "З Питань Запобігання Самогубствам",
    phone: "7333"
  },
  {
    name: "Для Учасників Війни та Їхніх Родичів",
    phone: "0 800 501 212"
  },
  {
    name: "Попередження Домашнього Насильства, Торгівлі Людьми та Гендерної Дискримінації",
    phone: "0 800 500 335"
  },
];

export default function Kontakty({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveStyles(computeTheme(), computeFontSize);

  return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={[styles.container, styles.withoutHeader]}>
          <Text style={styles.header}>Служби екстреної психологічної допомоги</Text>

          <Text style={styles.sectionHeader}>Гарячі лінії</Text>
          {hotLines.map((itm, idx) => (
            <ListItem
              roundTop={!idx}
              icon="📞"
              isButton
              title={itm.name}
              onPress={() => phoneCall(itm.phone)}
              roundBottom={idx + 1 === hotLines.length}
            />
          ))}

          <Text style={styles.sectionHeader}>Медична підтримка</Text>
          {medLines.map((itm, idx) => (
            <ListItem
              roundTop={!idx}
              icon="📞"
              isButton
              title={itm.name}
              onPress={() => phoneCall(itm.phone)}
              roundBottom={idx + 1 === medLines.length}
            />
          ))}

          <Text style={styles.sectionHeader}>Різне</Text>
          {miscLines.map((itm, idx) => (
            <ListItem
              roundTop={!idx}
              icon="📞"
              isButton
              title={itm.name}
              onPress={() => phoneCall(itm.phone)}
              roundBottom={idx + 1 === miscLines.length}
            />
          ))}
        </View>
        <View style={styles.spacer} />
      </ScrollView>
    </View>
  );
}
