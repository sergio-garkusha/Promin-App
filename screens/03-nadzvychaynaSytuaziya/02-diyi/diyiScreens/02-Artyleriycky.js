import React from "react";
import { Text, View, ScrollView } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Accordion from "/components/Accordion";
import Bullet from "/components/Bullet";
import Header from "/components/Header";
import Paragraph from "/components/Paragraph";
import resolveStyles from "/styles/subpage";

export default function Artileriickii({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveStyles(computeTheme(), computeFontSize);
  return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>
            Артилерійський обстріл
          </Text>
          <Paragraph>
            Це один із найбільш небезпечних видів вогневого ураження під час воєнних
            конфліктів, в результаті якого можлива велика кількість випадкових жертв серед населення.
          </Paragraph>
          <Paragraph style={{ paddingBottom: 20 }}>
            Про початок обстрілу ви можете дізнатися, почувши віддалені звуки пострілів, гуркіт та спалахи від пуску
            ракет. У вас є декілька хвилин (або декілька секунд при ракетному обстрілі), щоб сховатися.
          </Paragraph>

          <Accordion title="Обстріл застав вас на вулиці">
            <Paragraph>
              Якщо артилерійський обстріл застав вас на вулиці, негайно лягте на землю
              (краще у канаву, яму), щільно притуліться до якогось виступу (бордюру, клумби, забору або до бетонної конструкції) та накрийте голову руками.
            </Paragraph>
            <Paragraph>
              Найчастіше причиною поранення є не пряме влучання снаряду, а результат
              попадання уламків та вплив вибухової хвилі. Снаряди та міни підриваються у верхньому шарі ґрунту, уламки після підриву летять на висоті 30-50 см над поверхнею землі.
            </Paragraph>
          </Accordion>

          <Accordion title="Обстріл застав вас в будівлі">
            <Paragraph>
              Негайно спускайтесь у підвал.
            </Paragraph>
            <Paragraph>
              Якщо підвал відсутній або зачинений, зайдіть до сусідів на першому поверсі. Існує правило: чим нижче, тим безпечніше. Як правило, снаряди попадають у верхні поверхи.
            </Paragraph>
            <Paragraph>
              Якщо артилерійський обстріл застав вас у будинку зненацька, і не залишилося часу зреагувати, швидко йдіть в кімнату, віддалену від напряму обстрілу.
            </Paragraph>
            <Paragraph>
              Лежачи або сидячи притуліться до несучої стіни, не стійте навпроти вікон.
              Найчастіше осколки потрапляють у приміщення через вікна.
            </Paragraph>
            <Paragraph>
              Якщо є можливість, завчасно заклейте скло вікон скотчем або забарикадуйте
              шафами, це врятує вас від уламків скла.
            </Paragraph>
            <Paragraph>
              Якщо обстріли є постійними, необхідно завчасно забарикадувати вікна
              мішками з піском, важкими меблями, речами.
            </Paragraph>
          </Accordion>

          <Accordion title="Обстріл застав вас в транспорті">
            <Paragraph>Попросіть водія зупинити транспортний засіб.</Paragraph>
            <Paragraph>
              Вийдіть з транспортного засобу та відбіжіть від дороги, багатоповерхівок
              і промислових об’єктів. Ляжте на землю і закрийте голову руками.
            </Paragraph>
            <Paragraph>
              Якщо вибухи застали вас у дорозі на власному автомобілі – не розраховуйте,
              що на авто ви зможете швидко втекти від обстрілу. Зупиніться, вийдіть з автомобіля та відбіжіть якомога
              далі від дороги.
            </Paragraph>
            <Paragraph>
              Загальні вимоги до укриття: воно має бути заглибленим, і разом з тим,
              знаходитися подалі від споруд, які можуть обвалитися на вас зверху при прямому попаданні, або можуть спалахнути.
            </Paragraph>
            <Paragraph>
              Ідеальний захист дає траншея чи канава (подібна до окопу) глибиною 1-2
              метри, на відкритому місці.
            </Paragraph>
          </Accordion>

          <Accordion title="Сховатися під час артобстрілу можна:">
            <Bullet symbol="•" style={styles.paragraph}>
              у спеціально обладнаному бомбосховищі;
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              в будь-якій канаві, траншеї, ямі;
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              в трубі водостоку під дорогою;
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              вздовж високого бордюру;
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              у підвалі під капітальними будинками старої забудови;
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              в оглядовій ямі гаражу, станції технічного обслуговування;
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              в каналізаційних люках; у „воронках», що лишилися від
              попередніх обстрілів.
            </Bullet>
          </Accordion>

          <Accordion title="Після закінчення артобстрілу">
            <Paragraph>Зачекайте приблизно 10 хв.</Paragraph>
            <Paragraph>
              Обережно підніміться, уважно огляньте місцевість навколо себе. Пересувайтесь не кваплячись та уважно оглядайте маршрут руху. Ноги ставте на вільну від уламків поверхню.
            </Paragraph>
            <Paragraph>
              Не піднімайте з землі незнайомі вам предмети. Не торкатеся їх.
            </Paragraph>
            <Paragraph>
              Снаряди можуть бути касетними, і місцевість в результаті застосування спеціальних
              боєприпасів може бути замінована. Бойові елементи касетних боєприпасів та снаряди, які не підірвалися, можуть вибухнути від найменшого дотику.
            </Paragraph>
            <Paragraph>
              Уважно слідкуйте за дітьми і підлітками, не дозволяйте їм торкатися
              до будь-яких предметів.
            </Paragraph>
            <Paragraph>Телефон виклику служби порятунку - 101.</Paragraph>
          </Accordion>

          <View style={styles.spacer} />
        </View>
      </ScrollView>
    </View>
  );
}
