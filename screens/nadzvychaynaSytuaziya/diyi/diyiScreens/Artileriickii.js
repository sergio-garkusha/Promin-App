import React from "react";
import { Text, View, ScrollView } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Bullet from "/components/Bullet";
import Header from "/components/Header";
import resolveStyles from "/styles/subpage";
import Accordion from "////components/Accordion";

export default function Artileriickii({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveStyles(computeTheme(), computeFontSize);

  return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Артилерійський обстріл</Text>

          <Text style={styles.paragroph}>Один із найбільш небезпечних видів вогневого враження під час воєнних 
          конфліктів, в результаті якого можлива велика кількість випадкових жертв серед населення. 
          Про початок обстрілу ви можете дізнатися почувши віддалені звуки пострілів, гуркіт та спалахи від пуску 
          ракет. У вас є декілька хвилин (або декілька секунд при ракетному обстрілі), щоб сховатися.</Text>

          {/*1 from 5 */}
          <Accordion title= "Якщо обстріл застав вас на вулиці">

            <Text style={styles.paragraph}>Якщо артилерійський обстріл застав вас на вулиці, негайно лягте на землю 
            (краще у канаву, яму), щільно притуліться до якогось виступу: бордюру, клумби, забору або до бетонної 
            конструкції та накрийте голову руками.</Text>
            <Text style={styles.paragraph}>Найчастіше причиною поранення є не пряме влучання снаряду, а результат 
            попадання уламків та вплив вибухової хвилі. Снаряди та міни підриваються у верхньому шарі грунту, уламки 
            після підриву летять на висоті 30-50 см. над поверхнею землі.</Text>

          </Accordion>

          {/*2 from 5 */}
          <Accordion title= "Якщо обстріл застав вас в будівлі:">

            <Text style={styles.paragraph}>Негайно спускайтесь у підвал, у випадку якщо підвал відсутній, або 
            зачинений зайдіть до сусідів на першому поверсі. Існує правило: чим нижче  тим безпечніше. Як правило 
            снаряди попадають у верхні поверхи.</Text>
            <Text style={styles.paragraph}>Якщо артилерійський обстріл застав вас у будинку зненацька і не 
            залишилося часу зреагувати, швидко йдіть в кімнату віддалену від напряму обстрілу.</Text>
            <Text style={styles.paragraph}>Лежачи або сидячи притуліться до несучої стіни, не стійте навпроти вікон. 
            Найчастіше осколки потрапляють у приміщення через вікна.</Text>
            <Text style={styles.paragraph}>Якщо є можливість завчасно заклейте скло вікон скотчем або забарикадуйте 
            шафами, це врятує вас від уламків скла.</Text>
            <Text style={styles.paragraph}>Якщо обстріли є постійними, необхідно завчасно забарикадувати вікна 
            мішками з піском, важкими меблями, речами.</Text>

          </Accordion>

          {/*3 from 5 */}
          <Accordion title= "Якщо обстріл застав вас в транспорті:">

            <Text style={styles.paragraph}>Попросіть водія зупинити транспортний засіб.</Text>
            <Text style={styles.paragraph}>Вийдіть з транспортного засобу та відбіжіть від дороги, багатоповерхівок 
            і промислових об’єктів. Ляжте на землю і закрийте голову руками. </Text>
            <Text style={styles.paragraph}>Якщо вибухи застали вас у дорозі на власному автомобілі – не розраховуйте, 
            що на авто ви зможете швидко втекти від обстрілу. Зупиніться, вийдіть з автомобіля та відбіжіть якомога 
            далі від дороги. </Text>
            <Text style={styles.paragraph}>Загальні вимоги до укриття. Воно має бути заглибленим і разом із тим 
            знаходитися подалі від споруд, які можуть обвалитися на вас зверху при прямому попаданні, або можуть 
            спалахнути.</Text>
            <Text style={styles.paragraph}>Ідеальний захист дає траншея чи канава (подібна до окопу) глибиною 1-2 
            метри, на відкритому місці.</Text>

          </Accordion>

          {/*4 from 5 */}
          <Accordion title= "Укритись під час артилерійського обстрілу можна:">

            <Bullet symbol="•" style={styles.paragraph}>у спеціально обладнаному бомбосховищі;</Bullet>
            <Bullet symbol="•" style={styles.paragraph}>в будь якій канаві, траншеї, ямі;</Bullet>
            <Bullet symbol="•" style={styles.paragraph}>в трубі водостоку під дорогою; </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>вздовж високого бордюру;</Bullet>
            <Bullet symbol="•" style={styles.paragraph}>у підвалі під капітальними будинками старої забудови;</Bullet>
            <Bullet symbol="•" style={styles.paragraph}>в оглядовій ямі гаражу, станції технічного обслуговування;</Bullet>
            <Bullet symbol="•" style={styles.paragraph}>в каналізаційних люках;  у „воронках”, що лишилися від 
            попередніх обстрілів.</Bullet>

          </Accordion>

          {/*5 from 5 */}
          <Accordion title= "Після закінчення арт. обстрілу">

            <Text style={styles.paragraph}>Зачекайте приблизно 10хв.</Text>
            <Text style={styles.paragraph}>Обережно підніміться, уважно огляньте місцевість навколо себе. Пересувайтесь не кваплячись та уважно оглядайте маршрут руху. Ноги ставте на вільну від уламків поверхню.</Text>
            <Text style={styles.paragraph}>Не піднімайте з землі незнайомі вам предмети.</Text>
            <Text style={styles.paragraph}>Снаряди можуть бути касетними і місцевість в результаті застосування спеціальних 
            боєприпасів може бути замінована. Бойові елементи касетних боєприпасів та снаряди які не підірвалися можуть 
            вибухнути від найменшого дотику.</Text>
            <Text style={styles.paragraph}>Уважно слідкуйте за дітьми і підлітками, не дозволяйте їм торкатися 
            до будь яких предметів.</Text>
            <Text style={styles.paragraph}>Телефон виклику служби порятунку - 101</Text>

          </Accordion>

          <View style={styles.spacer} />
        </View>
      </ScrollView>
    </View>
  );
}
