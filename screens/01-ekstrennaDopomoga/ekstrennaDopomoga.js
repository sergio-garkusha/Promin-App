import React from "react";
import { Text, View, ScrollView } from "react-native";

import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Header from "/components/Header";
import ListItem from "/components/ListItem";
import resolveStyles from "/styles/subpage";

export default function EkstrennaDopomoga({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveStyles(computeTheme(), computeFontSize);

  return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={[styles.container, styles.withoutHeader]}>
          <Text style={[styles.sectionHeader, styles.Subtitle]}>Екстрена психологічна допомога:</Text>
          <ListItem
            roundTop
            icon="😱"
            title="Страх"
            onPress={() => navigation.push("Strah")}
          />
          <ListItem
            icon="😟"
            title="Істерика"
            onPress={() => navigation.push("Isteryka")}
          />
          <ListItem
            icon="😭"
            title="Плач"
            onPress={() => navigation.push("Plach")}
          />
          <ListItem
            icon="🫣"
            title="Ступор"
            onPress={() => navigation.push("Stupor")}
          />
          <ListItem
            icon="🥶"
            title="Нервове тремтіння"
            onPress={() => navigation.push("NervoveTremtinnya")}
          />
          <ListItem
            icon="😡"
            title="Агресія"
            onPress={() => navigation.push("Agresiya")}
          />
          <ListItem
            icon="😵‍💫"
            title="Марення і галюцинації"
            onPress={() => navigation.push("Marennya")}
          />
          <ListItem
            roundBottom
            icon="🤯"
            title="Перезбудження"
            onPress={() => navigation.push("Perezbudzennya")}
          />
        </View>
      </ScrollView>
    </View>
  );
}
