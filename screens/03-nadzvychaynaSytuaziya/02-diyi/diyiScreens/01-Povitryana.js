import React from "react";
import { Text, View, ScrollView } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Bullet from "/components/Bullet";
import Header from "/components/Header";
import resolveStyles from "/styles/subpage";
import Accordion from "/components/Accordion";

export default function Povitryana({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveStyles(computeTheme(), computeFontSize);

  return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Повітряна тривога</Text>

          {/*1 from 6 */}
          <Accordion title="Як дізнатися про повітряну тривогу”">

            <Text style={styles.paragraph}>З метою привернення уваги населення до сигналів оповіщення цивільного
              захисту вмикаються електричні сирени. Які дублюються протяжними гудками інших звукових пристроїв
              суб’єктів господарювання та транспортних засобів.</Text>

            <Text style={styles.paragraph}>Лунає  протягом 2-3 хвилин.</Text>

            <Text style={styles.paragraph}>Після цього у мовному режимі через засоби масової інформації
              (вуличні гучномовці, радіо, телебачення тощо) до населення доводиться сигнал «Повітряна Тривога»
              та порядок дій за цим сигналом.</Text>

            <Text style={styles.paragraph}>З моменту подачі сигналу «Повітряна Тривога» до початку нападу може
              минути лише кілька хвилин. Використайте цей час максимально ефективно.</Text>

          </Accordion>

          <Text style={styles.paragroph}>Після сигналу “Повітряна тривога”</Text>

          {/*2 from 6 */}
          <Accordion title="Якщо ви вдома:">

            <Text style={styles.paragraph}>1. Ввімкніть приймач радіотрансляційної мережі, телевізор, радіоприймач,
              уважно прослухати інформацію.</Text>
            <Text style={styles.paragraph}>2. Якщо є можливість попередьте сусідів та одиноких людей,
              що мешкають поруч.</Text>
            <Text style={styles.paragraph}>3. Зачиніть вікна, вимкніть усі електричні та нагрівальні прилади.</Text>
            <Text style={styles.paragraph}>4. Перекрийте квартирний газовий вентиль, загасіть печі, вимкніть світло.</Text>
            <Text style={styles.paragraph}>5. Швидко одягніться та одягніть дітей. Перевірьте наявність пришитих
              із внутрішньої боку одягу у дітей дошкільного віку нашивок на яких зазначено: прізвище, ім’я, по-батькові, адреса, вік, номер домашнього телефону.</Text>
            <Text style={styles.paragraph}>6. Візьміть:</Text>

            <Bullet symbol="•" style={styles.paragraph}>індивідуальні засоби захисту;</Bullet>
            <Bullet symbol="•" style={styles.paragraph}>завчасно підготовлений запас продуктів і води;</Bullet>
            <Bullet symbol="•" style={styles.paragraph}>особисті документи;</Bullet>
            <Bullet symbol="•" style={styles.paragraph}>кишеньковий ліхтар та найкоротшим шляхом прямуйте до найближчої захисної споруди;</Bullet>

          </Accordion>

          {/*3 from 6 */}
          <Accordion title="Якщо ви на роботі:">

            <Text style={styles.paragraph}>1. Виконайте заходи, передбачені на цей випадок Планом реагування на надзвичайні ситуації
              суб’єктами господарювання , Інструкція щодо дій персоналу суб’єкта господарювання у разі загрози або виникнення надзвичайних ситуацій.</Text>
            <Text style={styles.paragraph}>2. Дійте за вказівками керівництва суб’єкта господарювання.</Text>
            <Text style={styles.paragraph}>3. Швидко, без паніки займіть місце у захисній споруді
              (сховищі, підвальному приміщенні).</Text>
            <Text style={styles.paragraph}>4. Виконуйте вимоги старшого (коменданта).</Text>

          </Accordion>

          {/*4 from 6 */}
          <Accordion title="Якщо ви в громадському місці:">

            <Text style={styles.paragraph}>Вислухайте вказівки адміністрації.
              Дійте у відповідності з ними – ідіть у зазначені сховища або укриття..</Text>

          </Accordion>

          {/*5 from 6 */}
          <Accordion title="Якщо ви в транспорті:">

            <Text style={styles.paragraph}>1. Попросіть водія зупинити транспортний засіб. У разі відсутності в
              радіусі 500 м від будинку захисної споруди використовуйте для укриття підвальне приміщення під будинком.
              Не можна після сигналу «ПОВІТРЯНА ТРИВОГА» залишатися в будинках, особливо на верхніх поверхах.
              Внаслідок вибуху вони будуть руйнуватися від впливу ударної хвилі.</Text>
            <Text style={styles.paragraph}>2. Вийдіть з транспортного засобу та рухайтесь в напрямі протилежному від
              багатоповерхівок та промислових об’єктів (парку, скверу, пустиря).</Text>
            <Text style={styles.paragraph}>3. Швидко, без паніки займіть місце у захисній споруді
              (сховищі, підвальному приміщенні).</Text>

          </Accordion>

          {/*1 from 6 */}
          <Accordion title="Як поводитися в захисній споруді:">

            <Text style={styles.paragraph}>1.Зайняти місце у захисній споруді.</Text>
            <Text style={styles.paragraph}>2.Виконувати вимоги старшого (коменданта), якщо такий є.</Text>
            <Text style={styles.paragraph}>3.Не палити та не смітити.</Text>
            <Text style={styles.paragraph}>4.Голосно не розмовляти.</Text>
            <Text style={styles.paragraph}>5.Зберігати спокій і дотримуватися порядку.</Text>
            <Text style={styles.paragraph}>6.Допомагати дітям, літнім людям та інвалідам.</Text>
            <Text style={styles.paragraph}>7.Уважно слідкувати за розпорядженнями та сигналами оповіщення.</Text>

          </Accordion>



          <View style={styles.spacer} />
        </View>
      </ScrollView>
    </View>
  );
}
