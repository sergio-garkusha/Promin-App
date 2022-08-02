import React from "react";
import { Text, View, ScrollView } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Bullet from "/components/Bullet";
import Header from "/components/Header";
import resolveStyles from "/styles/subpage";
import Accordion from "/components/Accordion";

export default function Zastosuvannya({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveStyles(computeTheme(), computeFontSize);

  return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Застосування хімічної зброї</Text>

          {/*1 from 7 */}
          <Accordion title="Ознаки застосування хімічної зброї">

            <Bullet symbol="•" style={styles.paragraph}>Двоє або більше осіб стали недієздатними з незрозумілих причин;</Bullet>
            <Bullet symbol="•" style={styles.paragraph}>Знайдено невідомі рідини, порошки або пари;</Bullet>
            <Bullet symbol="•" style={styles.paragraph}>Відчуваються незрозумілі запахи або смаки;</Bullet>
            <Bullet symbol="•" style={styles.paragraph}>Знайдено невідомі та/або покинуті без нагляду матеріали, пристрої чи обладнання;</Bullet>
            <Bullet symbol="•" style={styles.paragraph}>Спостерігається масова швидка загибель дрібних тварин (птахів, комах);</Bullet>
            <Bullet symbol="•" style={styles.paragraph}>Спостерігається масовий вияв фізичних симптомів ураження хімічними речовинами;</Bullet>

          </Accordion>

          {/*2 from 7 */}
          <Accordion title="Основні фізичні симптоми ураження хімічними речовинами">

            <Text style={styles.paragraph}>Вправа спрямована на перемикання уваги.</Text>

            <Bullet symbol="•" style={styles.paragraph}>Міоз - звуження зіниць;</Bullet>
            <Bullet symbol="•" style={styles.paragraph}>Дезорієнтація та пітливість;</Bullet>
            <Bullet symbol="•" style={styles.paragraph}>Посмикування та судоми;</Bullet>
            <Bullet symbol="•" style={styles.paragraph}>Подразнення дихальних шляхів і ускладнене дихання;</Bullet>
            <Bullet symbol="•" style={styles.paragraph}>Подразнення очей і шкіри;</Bullet>
            <Bullet symbol="•" style={styles.paragraph}>Нудота та блювота;</Bullet>
            <Bullet symbol="•" style={styles.paragraph}>Втрата свідомості;</Bullet>

          </Accordion>

          <Text style={styles.paragraph}>Першочергові дії в зоні хімічного ураження</Text>

          {/*3 from 7 */}
          <Accordion title="Якщо відчуваєте симптоми ураження">

            <Bullet symbol="•" style={styles.paragraph}>Зніміть верхній шар одягу. Якщо можливо, покладіть одяг
              у пакет і закрийте його.</Bullet>
            <Bullet symbol="•" style={styles.paragraph}>Помістіть цей пакет у інший пакет і заклейте клейкою
              стрічкою. Пізніше будуть надані инструкції щодо його утилізації або очищення.</Bullet>
            <Bullet symbol="•" style={styles.paragraph}>Якщо у вас є ознаки або симптоми впливу їдких або
              подразливих речовин - наприклад, почервоніння, свербіж та печіння очей або шкіри - промийте їх водою.</Bullet>
            <Bullet symbol="•" style={styles.paragraph}>Не використовуйте мило для промивання очей. Не торкайтеся
              інших людей, щоб уникнути можливого поширення хімікату.</Bullet>

          </Accordion>

          {/*4 from 7 */}
          <Accordion title="Надворі">

            <Bullet symbol="•" style={styles.paragraph}>Залиште територію ураження</Bullet>
            <Bullet symbol="•" style={styles.paragraph}>Намашайтесь рухатись швидко, але не бігти</Bullet>
            <Bullet symbol="•" style={styles.paragraph}>Дихайте повільно щоб вдихати якнайменше отрути</Bullet>
            <Bullet symbol="•" style={styles.paragraph}>Знайдіть укриття поблизу. Якщо це можливо, повертайтесь у
              своє помешкання.</Bullet>

          </Accordion>

          {/*5 from 7 */}
          <Accordion title="В приміщенні">

            <Bullet symbol="•" style={styles.paragraph}>Підніміться на найвищий поверх та знайдіть кімнату з якомога
              меншою кількістю вікон та дверей</Bullet>
            <Bullet symbol="•" style={styles.paragraph}>Закрийте вікна, двері, вентиляційні отвори та все інше, що
              допомагає потрапляти повітрю в приміщення ззовні</Bullet>
            <Bullet symbol="•" style={styles.paragraph}>Не їжте і не пийте нічого, що могло зазнати
              впливу хімічних речовин</Bullet>
            <Bullet symbol="•" style={styles.paragraph}>Увімкніть новини та дочекайтесь повідомлення, коли вихід на
              вулицю стане безпечним</Bullet>

          </Accordion>

          {/*6 from 7 */}
          <Accordion title="В автомобілі">

            <Bullet symbol="•" style={styles.paragraph}>Зʼїжджайте на узбіччя, не заважайте руху аварійних
              автомобілів</Bullet>
            <Bullet symbol="•" style={styles.paragraph}>Вимкніть двигун і закрийте всі вентиляційні отвори,
              які втягують зовнішнє повітря, включаючи вентиляційні отвори кондиціонера.</Bullet>
            <Bullet symbol="•" style={styles.paragraph}>Прикрийте рот і ніс тканиною: шарфом, хустинкою чи маскою
              для обличчя.</Bullet>

          </Accordion>

          {/*7 from 7 */}
          <Accordion title="Евакуація">

            <Text style={styles.paragraph}>Під час евакуації з зони ураження хімічною зброєю:</Text>

            <Bullet symbol="•" style={styles.paragraph}>вдягайте чистий щільний одяг, який максимально
              закриває всі ділянки тіла. </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>Якщо є можливість, вдягніть окуляри, маски, шапки та
              рукавички, а також дощовик.</Bullet>
            <Bullet symbol="•" style={styles.paragraph}>Якщо ви маєте перебувати в укритті, зробіть запас води,
              їжі та предметів першої необхідності.</Bullet>

            <Text style={styles.paragraph}>Не повертайтесь у зону ураження без відповідних розпоряджень ДСНС та
              інших екстрених служб, адже території можуть бути небезпечними тривалий час (навіть декілька місяців)</Text>

          </Accordion>

          <View style={styles.spacer} />
        </View>
      </ScrollView>
    </View>
  );
}
