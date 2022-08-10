import React from "react";
import { Text, View, ScrollView } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Accordion from "/components/Accordion";
import Bullet from "/components/Bullet";
import Header from "/components/Header";
import ListItem from "/components/ListItem";
import resolveStyles from "/styles/subpage";

export default function VibuhonebezpechniZnahidki({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveStyles(computeTheme(), computeFontSize);
  return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Вибухонебезпечні знахідки</Text>
          <Accordion title="Дії">
            <Bullet symbol="1." style={styles.paragraph}>
              Негайно повідомте чергові служби органів внутрішніх справ, цивільного захисту 101 або 102
            </Bullet>
            <Bullet symbol="2." style={styles.paragraph}>Заборонено:</Bullet>
            <View style={styles.subBullet}>
              <Bullet symbol="•" style={styles.paragraph}>
                Наближатися до предмету;
              </Bullet>
              <Bullet symbol="•" style={styles.paragraph}>
                Пересувати його або брати в руки;
              </Bullet>
              <Bullet symbol="•" style={styles.paragraph}>
                Розряджати, кидати, ударяти по ньому;
              </Bullet>
              <Bullet symbol="•" style={styles.paragraph}>
                Розпалювати поряд багаття або кидати в нього предмет;
              </Bullet>
              <Bullet symbol="•" style={styles.paragraph}>
                Приносити предмет до дому, у табір, школу.
              </Bullet>
            </View>

            <Bullet symbol="3." style={styles.paragraph}>
              Відмітье підручними предметами місцезнаходження підозрілої знахідки. Не допускайте до знахідки інших людей.
            </Bullet>
            <Bullet symbol="4." style={styles.paragraph}>
              Припиніть всі види робіт в районі виявлення вибухонебезпечного предмету.
            </Bullet>
            <Bullet symbol="5." style={[styles.paragraph, { paddingBottom: 20 }]}>
              Дочекайтеся прибуття фахівців, вкажіть місце знахідки та повідомте час її виявлення.
            </Bullet>

            <Text style={styles.header2}>Пам’ятайте!</Text>
            <Bullet symbol="•" style={styles.paragraph}>
              Одна з основних причин нещасних випадків з вибуховими пристроями – грубе
              порушення елементарних правил безпеки.
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              Практично всі вибухові речовини отруйні, чутливі до механічних дій і
              нагрівання. Поводження з ними вимагає граничної уваги і обережності!
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              Розмінуванням, знешкодженням або знищенням вибухонебезпечних предметів
              займаються тільки підготовлені фахівці-сапери, допущені до цього виду робіт.
            </Bullet>
          </Accordion>

          <ListItem
            roundTop
            title="Вибухонебезпечні предмети"
            onPress={() => navigation.push("VybuhonebezpechniPredmety")}
            roundBottom
          />

          <View style={styles.spacer} />
        </View>
      </ScrollView>
    </View>
  );
}

const resolveLocalStyles = (theme, computeFS) => {
  const backgroundColor = theme === "dark" ? "#18203A" : "#F3F3F3";
  const color = theme === "dark" ? "#848EB0" : "#666";
  return StyleSheet.create({
    container: {
      backgroundColor,
      marginTop: 100
    },
    title: {
      color,
      fontFamily: "Ubuntu",
      fontSize: computeFS(18),
      lineHeight: computeFS(21),
      marginBottom: 16,
      marginTop: 32,
      textAlign: "left",
    },
  });
};
