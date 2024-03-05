import React from "react";
import { Text, View, ScrollView } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Header from "/components/Header";
import ListItem from "/components/ListItem";
import resolveStyles from "/styles/subpage";
import { crossPlatformNav } from "/helpers/utils";

export default function EkstrennaDopomoga({ navigation }) {
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
        <View style={[styles.container, styles.withoutHeader]}>
          <Text style={[styles.sectionHeader, styles.Subtitle]}>Екстрена психологічна допомога</Text>
          <ListItem
            roundTop
            icon="😱"
            title="Страх"
            onPress={() => goTo("Екстрена психологічна допомога/Страх")}
          />
          <ListItem
            icon="😟"
            title="Істерика"
            onPress={() => goTo("Екстрена психологічна допомога/Істерика")}
          />
          <ListItem
            icon="😭"
            title="Плач"
            onPress={() => goTo("Екстрена психологічна допомога/Плач")}
          />
          <ListItem
            icon="🫣"
            title="Ступор"
            onPress={() => goTo("Екстрена психологічна допомога/Ступор")}
          />
          <ListItem
            icon="🥶"
            title="Нервове тремтіння"
            onPress={() => goTo("Екстрена психологічна допомога/Нервове Тремтіння")}
          />
          <ListItem
            icon="😡"
            title="Агресія"
            onPress={() => goTo("Екстрена психологічна допомога/Агресія")}
          />
          <ListItem
            icon="😵‍💫"
            title="Марення і галюцинації"
            onPress={() => goTo("Екстрена психологічна допомога/Марення і галюцинації")}
          />
          <ListItem
            roundBottom
            icon="🤯"
            title="Перезбудження"
            onPress={() => goTo("Екстрена психологічна допомога/Перезбудження")}
          />
        </View>
      </ScrollView>
    </View>
  );
}
