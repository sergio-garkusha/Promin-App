import React from "react";
import { Text, View, ScrollView } from "react-native";
import * as Linking from "expo-linking";

import { isMobile } from "/helpers/utils";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import resolveStyles from "/styles/subpage";
import Header from "/components/Header";
import ListItem from "/components/ListItem";

const FIREFIGHTERS = 101;
const POLICE = 102;
const EMERGENCY = 103;
const GASSERVICE = 104;

const IS_WEB = !isMobile();

const phoneCall = p => {
  !IS_WEB && Linking.openURL(`tel:${p}`);
};

export default function Kontakty({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveStyles(computeTheme(), computeFontSize);

  return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={[styles.container, styles.withoutHeader]}>
          <Text style={styles.sectionHeader}>Телефони служб порятунку в Україні</Text>
          <ListItem
            roundTop
            icon="📞"
            isButton
            title={"Пожежна" + (IS_WEB ? ` - ${FIREFIGHTERS}` : "")}
            onPress={() => phoneCall(FIREFIGHTERS)}
          />
          <ListItem
            icon="📞"
            isButton
            title={"Поліція" + (IS_WEB ? ` - ${POLICE}` : "")}
            onPress={() => phoneCall(POLICE)}
          />
          <ListItem
            icon="📞"
            isButton
            title={"Швидка допомога" + (IS_WEB ? ` - ${EMERGENCY}` : "")}
            onPress={() => phoneCall(EMERGENCY)}
          />
          <ListItem
            icon="📞"
            isButton
            title={"Аварійна служба газу" + (IS_WEB ? ` - ${GASSERVICE}` : "")}
            onPress={() => phoneCall(GASSERVICE)}
            roundBottom
          />
        </View>
        {/* <View style={styles.container}>
          <ListItem
            roundTop
            icon="📞"
            title="Телефони служб психологічної допомоги в Україні"
            onPress={() => navigation.push("EmergencyMentalHelp")}
            roundBottom
          />
        </View>
        <View style={styles.container}>
          <ListItem
            roundTop
            icon="💬"
            title="Психологічна допомога онлайн"
            onPress={() => navigation.push("EmergencyMentalHelp")}
            roundBottom
          />
        </View> */}
        <View style={styles.spacer} />
      </ScrollView>
    </View>
  );
}
