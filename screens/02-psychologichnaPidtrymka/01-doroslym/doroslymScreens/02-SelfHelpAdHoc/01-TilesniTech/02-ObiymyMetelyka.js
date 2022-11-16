import React from "react";
import { Text, View, ScrollView } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Bullet from "/components/Bullet";
import Header from "/components/Header";
import resolveStyles from "/styles/subpage";
// VidchuvaySvoeTilo
export default function ContentPage({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveStyles(computeTheme(), computeFontSize);

  return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Техніка «Обійми метелика»</Text>
          <Bullet symbol="•" style={styles.paragraph}>Оберіть безпечне або умовно безпечне місце.</Bullet>
          <Bullet symbol="•" style={styles.paragraph}>Займіть зручну позу.</Bullet>
          <Bullet symbol="•" style={styles.paragraph}>Знайдіть опору для ваших стоп.</Bullet>
          <Bullet symbol="•" style={styles.paragraph}>Прикрийте або закрийте очі.</Bullet>
          <Bullet symbol="•" style={styles.paragraph}>Відчуйте у своєму тілі «точку спокою».</Bullet>
          <Bullet symbol="•" style={styles.paragraph}>Покладіть праву долоню на ліве плече та «навхрест» ліву долоню на праве плече (послідовність можна змінити, як найзручніше).</Bullet>
          <Bullet symbol="•" style={styles.paragraph}>Зосередьте увагу на «точці спокою».</Bullet>
          <Bullet symbol="•" style={styles.paragraph}>Почергово правою та лівою долонями м’яко та відчутно плескайте свої плечі протягом 20-60 секунд.</Bullet>
          <Bullet symbol="•" style={styles.paragraph}>Опустіть долоні.</Bullet>
          <Bullet symbol="•" style={styles.paragraph}>Зробіть три зосереджених вдихи та видихи.</Bullet>
          <Bullet symbol="•" style={styles.paragraph}>Повторіть сет почергового поплескування 20-60 секунд та 3-х свідомих вдихів - видихів ще 3-4 рази.</Bullet>
          <Text style={styles.paragraph}>Загальна рекомендована кількість сетів – 4-6</Text>
          <View style={styles.spacer} />
        </View>
      </ScrollView>
    </View>
  );
}
