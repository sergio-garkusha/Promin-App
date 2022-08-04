import React from "react";
import { Text, View, ScrollView } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Bullet from "/components/Bullet";
import Header from "/components/Header";
import Paragraph from "/components/Paragraph";
import resolveStyles from "/styles/subpage";
import Accordion from "/components/Accordion";

export default function Kognitivni({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveStyles(computeTheme(), computeFontSize);
  return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Когнітивні вправи</Text>

          <Paragraph>
            Тим людям, яким простіше справлятись з важкими переживаннями через раціоналізацію того,
            що відбувається пропонуємо когнітивні вправи. Когнітивні вправи формують здібності до адекватних дій та впливають на
            навички самоконтролю.  Емоційні реакції і поведінка людей можуть безпосередньо залежати від так званих «когніцій» — думок,
            переконань, інтепретацій, свідомо чи неусвідомлено наданих значень подіям і явищам життя. Таким чином, виникає ланцюжок:
            ситуація/подія — значення, яке ми надаємо — емоція — поведінкова реакція. Тобто, впливаючи на когнітивну сферу, може бути
            легше опановувати почуття, з якими ви стикаєтесь в нових для вас ситуаціях.
          </Paragraph>

          <Paragraph style={{ paddingBottom: 20 }}>
            Памятайте, що самому собі необхідно дати час на відновлення, бо якщо ви допомагаєте собі, то тоді будете
          </Paragraph>

          <Accordion title="Вправа “Ну і що”">
            <Bullet symbol="•" style={styles.paragraph}>
              Візьміть аркуш паперу і ручку. Напишіть саму тривожну Вашу проблему.
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              Припустимо, Ви погано виконали звіт на роботі.
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              Після чого поставте собі питання «Ну і що?».
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              Запишіть першу відповідь, який прийшов в голову, наприклад «мене звільнять з роботи».
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              Повторно задайте собі те ж питання «Ну і що?», І запишіть нову відповідь, наприклад «я залишуся без грошей».
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              Продовжуйте до тих пір, поки Ваші страхи не будуть повністю виписані, до кінця вправи Ви відчуєте легкість, веселощі,
              колишня проблема не буде вже здаватися такою жахливою.
            </Bullet>
          </Accordion>

          <Accordion title="Техніка “5-4-3-2-1”">
            <Paragraph>
              Техніка спрямована на заземлення, допомагає залишатися в моменті
              і зберігати спокій, коли ми відчуваємо занепокоєння.
            </Paragraph>
            <Bullet symbol="•" style={styles.paragraph}>
              Роздивіться навколо себе та знайдіть очима 5 предметів синього кольору. Назвіть їх;
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              Доторкніться рукою та відчуйте 4 різні поверхні. Назвіть, які вони на дотик;
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              Відчуйте 3 різні відчуття у тілі. Назвіть їх;
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              Відчуйте два різні запахи. Назвіть їх;
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              Визначте щось на смак. Назвіть, що ви відчули на смак? (можливо, ви відчуєте смак у роті,
              а якщо маєте можливість, то випийте трішки води та відчуйте, який у неї смак).
            </Bullet>
          </Accordion>

          <Accordion title="Пошук кольорів">
            <Paragraph>
              Варто обрати 1 будь-яких колір і в повній тиші,
              протягом декількох хвилин шукати предмети такого кольору.
            </Paragraph>
            <Paragraph>
              Ця вправа допомагає розфокусуватися з того, що токсично
              забирає вашу енергію.
            </Paragraph>
          </Accordion>

          <Accordion title="Абстрагування у просторі">
            <Bullet symbol="•" style={styles.paragraph}>
              Заплющте очі та зосередьтесь на навколишніх звуках.
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              Прислухайтеся до всього, що відбувається навколо, протягом 1 хвилини.
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              Ви почуєте багато шумових факторів, які раніше не помічали, та водночас зосередитеся
              на власному сприйнятті "тут і зараз".
            </Bullet>
            <Paragraph>Вправа може стати в нагоді також у роботі з групою,
              якщо втрачена увага чи група (дітей, наприклад) надто збуджена.
            </Paragraph>
          </Accordion>

          <Accordion title="Рахування у зворотньому порядку">
            <Paragraph>
              Оберіть будь яку трьохзначну цифру і визначте крок для рахунку
              (скільки будете віднімати від початкової цифри).
            </Paragraph>
            <Paragraph>
              Необхідно розпочати віднімати цифру кроку кожного разу від отриманого результату.
              Наприклад: цифра 300, крок 3
            </Paragraph>
            <Paragraph>Результат виглядатиме так: 300, 297, 294, 291, 288…</Paragraph>
          </Accordion>

          <View style={styles.spacer} />
        </View>
      </ScrollView>
    </View>
  );
}
