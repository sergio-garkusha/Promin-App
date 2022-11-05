import React from "react";
import { Text, View, ScrollView } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Bullet from "/components/Bullet";
import Header from "/components/Header";
import resolveStyles from "/styles/subpage";

export default function ContentPage({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveStyles(computeTheme(), computeFontSize);
  return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Відчуваю своє тіло</Text>
          <Text style={styles.header2}>Прислухайтесь до своїх відчуттів. Запишіть «почуте»:</Text>
          <Bullet symbol="•" style={styles.paragraph}>мої стопи відчувають…</Bullet>
          <Bullet symbol="•" style={styles.paragraph}>мої коліна відчувають…</Bullet>
          <Bullet symbol="•" style={styles.paragraph}>мої стегна відчувають…</Bullet>
          <Bullet symbol="•" style={styles.paragraph}>мії живіт відчуває…</Bullet>
          <Bullet symbol="•" style={styles.paragraph}>моє сонячне сплетіння відчуває…</Bullet>
          <Bullet symbol="•" style={styles.paragraph}>моя грудна клітина відчуває…</Bullet>
          <Bullet symbol="•" style={styles.paragraph}>мої плечі відчувають…</Bullet>
          <Bullet symbol="•" style={styles.paragraph}>мої руки відчувають…</Bullet>
          <Bullet symbol="•" style={styles.paragraph}>мої пальці відчувають…</Bullet>
          <Bullet symbol="•" style={styles.paragraph}>моя шия відчуває…</Bullet>
          <Bullet symbol="•" style={styles.paragraph}>моє лице відчуває…</Bullet>
          <Bullet symbol="•" style={styles.paragraph}>моє чоло відчуває…</Bullet>
          <Bullet symbol="•" style={styles.paragraph}>моя потилиця відчуває…</Bullet>
          <View style={styles.spacer} />
        </View>
      </ScrollView>
    </View>
  );
}
