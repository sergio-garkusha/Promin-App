import React from "react";
import { Text, View, ScrollView } from "react-native";
import { crossPlatformNav } from "/helpers/utils";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Header from "/components/Header";
import ListItem from "/components/ListItem";
import resolveStyles from "/styles/subpage";

export default function MainMenu({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveStyles(computeTheme(), computeFontSize);

  return (
    <View>
      <Header navigation={navigation} homeDisabled />
      <ScrollView>
        <View style={[styles.container, styles.withoutHeader]}>
          <Text style={styles.sectionHeader}>Екстрена допомога</Text>
          <ListItem
            icon="🆘"
            roundTop
            roundBottom
            title="Екстрена психологічна допомога"
            onPress={() => crossPlatformNav("Екстрена психологічна допомога", navigation)}
          />

          <Text style={styles.sectionHeader}>Психологічна підтримка</Text>
          <ListItem
            icon="👩"
            roundTop
            title="Дорослим"
            onPress={() => crossPlatformNav("Дорослим", navigation)}
          />
          <ListItem
            icon="👦"
            roundBottom
            title="Дітям"
            onPress={() => crossPlatformNav("Дітям", navigation)}
          />

          <Text style={styles.sectionHeader}>Надзвичайна ситуація</Text>
          <ListItem
            icon="🚑"
            roundTop
            title="Контакти служб порятунку"
            onPress={() => crossPlatformNav("Контакти служб порятунку", navigation)}
          />
          <ListItem
            icon="👉"
            title="Дії в надзвичайних ситуаціях"
            onPress={() => crossPlatformNav("Дії в надзвичайних ситуаціях", navigation)}
            roundBottom
          />
        </View>
      </ScrollView>
    </View>
  );
}
