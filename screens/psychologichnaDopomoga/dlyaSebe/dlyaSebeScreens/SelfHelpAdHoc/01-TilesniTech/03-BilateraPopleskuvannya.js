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
          <Text style={styles.header}>Техніка білатеральної стабілізації – білатеральні поплескування</Text>
          <Bullet symbol="•" style={styles.paragraph}>Оберіть безпечне або умовно безпечне місце</Bullet>
          <Bullet symbol="•" style={styles.paragraph}>Займіть зручну позу</Bullet>
          <Bullet symbol="•" style={styles.paragraph}>Знайдіть опору для ваших стоп</Bullet>
          <Bullet symbol="•" style={styles.paragraph}>Прикрийте або закрийте очі</Bullet>
          <Bullet symbol="•" style={styles.paragraph}>Покладіть праву долонь на праве коліно та ліву долоню на ліве коліно</Bullet>
          <Bullet symbol="•" style={styles.paragraph}>Почергово правою та лівою долонями м’яко та відчутно плескайте свої коліна протягом 20-60 сек</Bullet>
          <Bullet symbol="•" style={styles.paragraph}>Зупиніть поплескування та залиште долоні на колінах</Bullet>
          <Bullet symbol="•" style={styles.paragraph}>Зробіть 3 /три/ зосереджених вдихи та видихи</Bullet>
          <Bullet symbol="•" style={styles.paragraph}>Повторіть сет почергового поплескування 20-60 сек та 3-х свідомих вдихів - видихів ще 3-4 рази</Bullet>
          <Text style={styles.paragraph}>Загальна рекомендована кількість сетів – 4-6</Text>
          <View style={styles.spacer} />
        </View>
      </ScrollView>
    </View>
  );
}
