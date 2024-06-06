import React from "react";
import { Text, View, ScrollView } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Header from "/components/Header";
import Paragraph from "/components/Paragraph";
import ListItem from "/components/ListItem";
import resolveStyles from "/styles/subpage";
import { crossPlatformNav } from "/helpers/utils";

export default function DlyaSebe({ navigation }) {
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
          <Text style={styles.header}>Дорослим</Text>
          <Paragraph>
            Ми сильні! Ми разом! Ми впораємось!
          </Paragraph>
          <Paragraph>
            Допоможи собі у складні часи. Турбуйся про себе, плануючи поточні щоденні справи, тримай свою психологічну стійкість на поготові завдяки технікам самодопомоги, долай стрес активністю.
          </Paragraph>
          <Paragraph style={{ paddingBottom: 20 }}>
            Дослідження свідчать, що людська психіка здатна здолати найскладніші перешкоди за умови підтримки та піклування.
          </Paragraph>
          <ListItem
            icon="🫶"
            roundTop
            title="Щоденна турбота про себе"
            onPress={() => goTo("Дорослим/Щоденна турбота про себе")}
          />
          <ListItem
            icon="💪"
            title="Техніки самодопомоги тут і зараз"
            onPress={() => goTo("Дорослим/Техніки самодопомоги тут і зараз")}
          />
          <ListItem
            icon="🧘"
            title="Антистресова активність"
            onPress={() => goTo("Дорослим/Антистресова активність")}
            roundBottom
          />
        </View>
      </ScrollView>
    </View>
  );
}
