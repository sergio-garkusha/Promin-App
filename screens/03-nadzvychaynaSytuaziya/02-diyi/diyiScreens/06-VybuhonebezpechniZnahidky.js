import React from "react";
import { Text, View, ScrollView } from "react-native";

import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Accordion from "/components/Accordion";
import Bullet from "/components/Bullet";
import Header from "/components/Header";
import ListItem from "/components/ListItem";
import resolveStyles from "/styles/subpage";

export default function VybuhonebezpechniZnahidky({ navigation }) {
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
              Негайно повідомте черговій служби органів внутрішніх справ, цивільного захисту 101 або 102.
            </Bullet>
            <Bullet symbol="2." style={styles.paragraph}>Заборонено:</Bullet>
            <View style={styles.subBullet}>
              <Bullet symbol="•" style={styles.paragraph}>
                наближатися до предмету;
              </Bullet>
              <Bullet symbol="•" style={styles.paragraph}>
                пересувати його або брати в руки;
              </Bullet>
              <Bullet symbol="•" style={styles.paragraph}>
                розряджати, кидати, ударяти по ньому;
              </Bullet>
              <Bullet symbol="•" style={styles.paragraph}>
                розпалювати поряд багаття або кидати в нього предмет;
              </Bullet>
              <Bullet symbol="•" style={styles.paragraph}>
                приносити предмет до дому, у табір, школу.
              </Bullet>
            </View>

            <Bullet symbol="3." style={styles.paragraph}>
              Позначте підручними предметами місцезнаходження підозрілої знахідки. Не допускайте до знахідки інших людей.
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
              нагрівання. Поводження з ними вимагає особливої уваги та обережності!
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
