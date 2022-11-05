import React from "react";
import { Text, View, ScrollView } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Accordion from "/components/Accordion";
import Bullet from "/components/Bullet";
import Header from "/components/Header";
import Paragraph from "/components/Paragraph";
import resolveStyles from "/styles/subpage";

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
          <Accordion title="Як дізнатися про повітряну тривогу">
            <Paragraph>
              З метою привернення уваги населення до сигналів оповіщення цивільного
              захисту вмикаються електричні сирени. Які дублюються протяжними гудками інших звукових пристроїв
              суб’єктів господарювання та транспортних засобів.
            </Paragraph>
            <Paragraph>
              Лунає  протягом 2-3 хвилин.
            </Paragraph>
            <Paragraph>
              Після цього у мовному режимі через засоби масової інформації
              (вуличні гучномовці, радіо, телебачення тощо) до населення доводиться сигнал «Повітряна Тривога»
              та порядок дій за цим сигналом.
            </Paragraph>
            <Paragraph>
              З моменту подачі сигналу «Повітряна Тривога» до початку нападу може
              минути лише кілька хвилин. Використайте цей час максимально ефективно.
            </Paragraph>
          </Accordion>

          <Text style={styles.sectionHeader}>Після сигналу «Повітряна тривога»</Text>
          <Accordion title="Якщо ви вдома:">
            <Bullet symbol="1." style={styles.paragraph}>
              Ввімкніть приймач радіотрансляційної мережі, телевізор, радіоприймач,
              уважно прослухати інформацію.
            </Bullet>
            <Bullet symbol="2." style={styles.paragraph}>
              Якщо є можливість попередьте сусідів та одиноких людей,
              які мешкають поруч.
            </Bullet>
            <Bullet symbol="3." style={styles.paragraph}>
              Зачиніть вікна, вимкніть усі електричні та нагрівальні прилади.
            </Bullet>
            <Bullet symbol="4." style={styles.paragraph}>
              Перекрийте квартирний газовий вентиль, загасіть печі, вимкніть світло.
            </Bullet>
            <Bullet symbol="5." style={styles.paragraph}>
              Швидко одягніться та одягніть дітей. Перевірьте наявність пришитих
              із внутрішньої боку одягу у дітей дошкільного віку нашивок на яких зазначено: прізвище, ім’я, по-батькові, адреса, вік, номери мобільних телефонів батьків.
            </Bullet>
            <Bullet symbol="6." style={styles.paragraph}>
              Візьміть:
            </Bullet>
            <View style={styles.subBullet}>
              <Bullet symbol="•" style={styles.paragraph}>
                індивідуальні засоби захисту;
              </Bullet>
              <Bullet symbol="•" style={styles.paragraph}>
                завчасно підготовлений запас продуктів і води;
              </Bullet>
              <Bullet symbol="•" style={styles.paragraph}>
                особисті документи;
              </Bullet>
              <Bullet symbol="•" style={styles.paragraph}>
                кишеньковий ліхтар та найкоротшим шляхом прямуйте до найближчої захисної споруди;
              </Bullet>
            </View>
          </Accordion>

          <Accordion title="Якщо ви на роботі:">
            <Bullet symbol="1." style={styles.paragraph}>
              Виконайте заходи, передбачені на цей випадок планом реагування на надзвичайні ситуації
              суб’єктами господарювання, інструкцією щодо дій персоналу суб’єкта господарювання у разі загрози або виникнення надзвичайних ситуацій.
            </Bullet>
            <Bullet symbol="2." style={styles.paragraph}>
              Дійте за вказівками керівництва суб’єкта господарювання.
            </Bullet>
            <Bullet symbol="3." style={styles.paragraph}>
              Швидко, без паніки займіть місце у захисній споруді
              (сховищі, підвальному приміщенні).
            </Bullet>
            <Bullet symbol="4." style={styles.paragraph}>
              Виконуйте вимоги старшого (коменданта).
            </Bullet>
          </Accordion>

          <Accordion title="Якщо ви в громадському місці:">
            <Paragraph>
              Вислухайте вказівки адміністрації.
              Дійте у відповідності з ними – ідіть у зазначені сховища або укриття.
            </Paragraph>
          </Accordion>

          <Accordion title="Якщо ви у транспорті:">
            <Bullet symbol="1." style={styles.paragraph}>
              Попросіть водія зупинити транспортний засіб.
            </Bullet>
            <Bullet symbol="2." style={styles.paragraph}>
              Вийдіть з транспортного засобу та рухайтесь в напрямі протилежному від
              багатоповерхівок та промислових об’єктів (парку, скверу, пустиря).
            </Bullet>
            <Bullet symbol="3." style={styles.paragraph}>
              Пройдіть до найближче укриття.
              (сховищі, підвальному приміщенні).
            </Bullet>
            <Bullet symbol="4." style={styles.paragraph}>
              Швидко, без паніки займіть місце у захисній споруді
              (сховищі, підвальному приміщенні).
            </Bullet>
          </Accordion>

          <Accordion title="Як поводитися у захисній споруді:">
            <Bullet symbol="1." style={styles.paragraph}>
              Зайняти місце у захисній споруді.
            </Bullet>
            <Bullet symbol="2." style={styles.paragraph}>
              Виконувати вимоги старшого (коменданта), якщо такий є.
            </Bullet>
            <Bullet symbol="3." style={styles.paragraph}>
              Не палити та не смітити.
            </Bullet>
            <Bullet symbol="4." style={styles.paragraph}>
              Голосно не розмовляти.
            </Bullet>
            <Bullet symbol="5." style={styles.paragraph}>
              Зберігати спокій і дотримуватися порядку.
            </Bullet>
            <Bullet symbol="6." style={styles.paragraph}>
              Допомагати дітям, літнім людям та інвалідам.
            </Bullet>
            <Bullet symbol="7." style={styles.paragraph}>
              Уважно слідкувати за розпорядженнями та сигналами оповіщення.
            </Bullet>
          </Accordion>

          <View style={styles.spacer} />
        </View>
      </ScrollView>
    </View>
  );
}
