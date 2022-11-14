import React from "react";
import { Text, View, ScrollView } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Bullet from "/components/Bullet";
import Header from "/components/Header";
import resolveStyles from "/styles/subpage";

export default function Telebachennya({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveStyles(computeTheme(), computeFontSize);
  return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Вимкнули телебачення</Text>
          <Text style={styles.Subtitle}>
            Крім ефірного мовлення, отримати безкоштовний доступ до українських
            телеканалів можна кількома способами:
          </Text>
          <Bullet symbol="1." style={styles.paragraph}>
            Через супутник. Українські телеканали розкодовані на супутнику. Це
            означає, що доступ до мовлення безкоштовний. Щоб дивитися
            телебачення, потрібен супутниковий ресивер і супутникова антена.
          </Bullet>
          <Bullet symbol="2." style={styles.paragraph}>
            YouTube.com. Більшість українських каналів мають власні канали на
            Youtube. Якщо у вас є швидкий інтернет, знайдіть в мобільному
            додатку або на веб-сторінці на Youtube бажаний канал. Якщо швидкість
            інтернету невисока, виберіть в налаштуваннях відео розширення нижче
            (якість відео: 360р або 480р).
          </Bullet>
          <Bullet symbol="3." style={styles.paragraph}>
            Доступ на ОТТ-сервісах. На платформах YouTV, Sweet TV, Omega TV,
            MEGOGO, Kyivstar TV, Oll tv доступ до українського телебачення тепер
            теж безкоштовний. Знайдіть бажаний канал у додатку або на
            веб-сторінці улюбленої платформи.
          </Bullet>
          <Bullet symbol="4." style={styles.paragraph}>
            Українське радіомовлення в інтернет-радіо: radioplayer.ua,
            Українське радіо (радіостанція Суспільного) в АМ-діапазоні – радіо
            працює на частотах 549 Кгц, 657 Кгц, 873 Кгц та 1404 Кгц.
          </Bullet>

          <View style={styles.spacer} />
        </View>
      </ScrollView>
    </View>
  );
}
