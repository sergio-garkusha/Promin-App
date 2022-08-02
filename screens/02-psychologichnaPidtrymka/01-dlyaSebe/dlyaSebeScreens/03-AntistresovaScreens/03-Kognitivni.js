import React from "react";
import { Text, View, ScrollView } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Bullet from "/components/Bullet";
import Header from "/components/Header";
import resolveStyles from "/styles/subpage";
import ListItem from "/components/ListItem";
import Accordion from "../../../../../components/Accordion";

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

          <Text style={styles.paragraph}>Тим людям, яким простіше справлятись з важкими переживаннями через раціоналізацію того,
           що відбувається пропонуємо когнітивні вправи. Когнітивні вправи формують здібності до адекватних дій та впливають на 
           навички самоконтролю.  Емоційні реакції і поведінка людей можуть безпосередньо залежати від так званих «когніцій» — думок,
            переконань, інтепретацій, свідомо чи неусвідомлено наданих значень подіям і явищам життя. Таким чином, виникає ланцюжок: 
            ситуація/подія — значення, яке ми надаємо — емоція — поведінкова реакція. Тобто, впливаючи на когнітивну сферу, може бути 
            легше опановувати почуття, з якими ви стикаєтесь в нових для вас ситуаціях. 
          </Text>

          <Text style={styles.paragraph}>Памятайте, що самому собі необхідно дати час на відновлення, бо якщо ви допомагаєте собі, то тоді будете 
          </Text>

            {/*1 */}
            <Accordion title= "Вправа “Ну і що”">

              <Bullet symbol="•" style={styles.paragraph}>
              Візьміть аркуш паперу і ручку. Напишіть саму тривожну Вашу проблему.    </Bullet>

              <Bullet symbol="•" style={styles.paragraph}>
              Припустимо, Ви погано виконали звіт на роботі.  </Bullet>

              <Bullet symbol="•" style={styles.paragraph}>
              Після чого поставте собі питання «Ну і що?». </Bullet>

              <Bullet symbol="•" style={styles.paragraph}>
              Запишіть першу відповідь, який прийшов в голову, наприклад «мене звільнять з роботи».  </Bullet>

              <Bullet symbol="•" style={styles.paragraph}>
              Повторно задайте собі те ж питання «Ну і що?», І запишіть нову відповідь, наприклад «я залишуся без грошей». </Bullet>

              <Bullet symbol="•" style={styles.paragraph}>
              Продовжуйте до тих пір, поки Ваші страхи не будуть повністю виписані, до кінця вправи Ви відчуєте легкість, веселощі, 
              колишня проблема не буде вже здаватися такою жахливою. </Bullet>

            </Accordion>

              {/*2 */}
            <Accordion title= "Техніка “5-4-3-2-1”">

              <Text style={styles.paragraph}>Техніка спрямована на заземлення, допомагає залишатися в моменті 
              і зберігати спокій, коли ми відчуваємо занепокоєння. </Text>

              <Bullet symbol="•" style={styles.paragraph}>
              Роздивіться навколо себе та знайдіть очима 5 предметів синього кольору. Назвіть їх;</Bullet>

              <Bullet symbol="•" style={styles.paragraph}>
              Доторкніться рукою та відчуйте 4 різні поверхні. Назвіть, які вони на дотик;</Bullet>

              <Bullet symbol="•" style={styles.paragraph}>
              Відчуйте 3 різні відчуття у тілі. Назвіть їх;</Bullet>

              <Bullet symbol="•" style={styles.paragraph}>
              Відчуйте два різні запахи. Назвіть їх;
              </Bullet>

              <Bullet symbol="•" style={styles.paragraph}>
              Визначте щось на смак. Назвіть, що ви відчули на смак? (можливо, ви відчуєте смак у роті,
              а якщо маєте можливість, то випийте трішки води та відчуйте, який у неї смак).</Bullet>

            </Accordion>

              {/*3 */}
            <Accordion title= "Пошук кольорів">

              <Text style={styles.paragraph}>Варто обрати 1 будь-яких колір і в повній тиші,
              протягом декількох хвилин шукати предмети такого кольору.  </Text>

              <Text style={styles.paragraph}>Ця вправа допомагає розфокусуватися з того, що токсично 
              забирає вашу енергію. </Text>

            </Accordion>

              {/*4 */}
            <Accordion title= "Абстрагування у просторі">

              <Bullet symbol="•" style={styles.paragraph}>
              Заплющте очі та зосередьтесь на навколишніх звуках. </Bullet>

              <Bullet symbol="•" style={styles.paragraph}>
              Прислухайтеся до всього, що відбувається навколо, протягом 1 хвилини.</Bullet>

              <Bullet symbol="•" style={styles.paragraph}>
              Ви почуєте багато шумових факторів, які раніше не помічали, та водночас зосередитеся 
              на власному сприйнятті "тут і зараз". </Bullet>

              <Text style={styles.paragraph}>Вправа може стати в нагоді також у роботі з групою,
              якщо втрачена увага чи група (дітей, наприклад) надто збуджена.</Text>

            </Accordion>

              {/*5 */}
            <Accordion title= "Рахування у зворотньому порядку">

             <Text style={styles.paragraph}>Оберіть будь яку трьохзначну цифру і визначте крок для рахунку
              (скільки будете віднімати від початкової цифри).</Text>

             <Text style={styles.paragraph}>Необхідно розпочати віднімати цифру кроку кожного разу від отриманого результату.
              Наприклад, цифра 300, крок 3: 300, 297, 294, 291, 288…</Text>

            </Accordion>


          <View style={styles.spacer} />
        </View>
      </ScrollView>
    </View>
  );
}
