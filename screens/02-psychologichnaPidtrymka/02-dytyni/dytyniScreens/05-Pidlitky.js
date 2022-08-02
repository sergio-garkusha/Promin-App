import React from "react";
import { Text, View, ScrollView } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Bullet from "/components/Bullet";
import Header from "/components/Header";
import resolveStyles from "/styles/subpage";
import Accordion from "/components/Accordion";

export default function Pidlitki({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveStyles(computeTheme(), computeFontSize);


  return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Підлітки</Text>

          <Text style={styles.paragraph}>Для проживання цього непростого періоду кожній людині потрібна підтримка. Підліткам це теж дуже важливо.
            Вони можуть цього не визнавати, або демонструвати невизнання, та батькам тут важливо бути уважними.</Text>

          <Text style={styles.paragraph}>Підліткам дуже важливо відчувати себе прийнятими на рівні з дорослими.
            Однак, дорослим все ж слід пам’ятати, що підлітки все ще не дорослі. У підлітковому віці важливим
            є реалізувати право на проживання та демонстрацію емоцій, а також мати доступ до достовірної
            “дорослої” інформації та діяльності.</Text>

          <Text style={styles.paragraph}>Практичні рекомендації</Text>

          {/*1 from 3 */}
          <Accordion title="Антистресова ментальна активність">

            <Text style={styles.paragraph}>Як говорити з підлітками зараз? Є декілька тез, які пропонуємо взяти до уваги:</Text>

            <Bullet symbol="•" style={styles.paragraph}>
              Пояснити, відповідно віку, що відбувається війна</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
              Що захищатись - це потрібно і нормально</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
              Чому нападати на інших, руйнувати те, що для них важливо - це погано</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
              Кожен має право відрізнятись від інших та бути собою</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
              Якщо ти не згоден з кимось - не можна нападати, нав'язувати свою думку - потрібно говорити та обговорювати</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
              Чому говорити неправду це погано - говорять правильні слова, а роблять по іншому</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
              Переживати сильні емоції - це нормально, називайте емоції та поведінку підлітка, запропонуйте альтернативну поведінку та емоції</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
              Опирайтесь на базові потреби людини (кордони, ідентичність, незалежність)</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
              Бути добрим - не значить не захищатись</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
              Навчіть розрізняти ворога взагалі та оцінювати дії різних людей</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
              Проживати сильні емоції - нормально, але вчіть поводитися в контексті ситуації</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
              Задавайте запитання підліткам, питайте їхню думку</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
              Розкажіть про інформаційну війну - обговорюйте новини, пояснюйте</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
              Говоріть про історію, читайте книжки, покажіть фільми</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
              Будьте готові до їхньої власної думки</Bullet>

          </Accordion>

          {/*2 from 3 */}
          <Accordion title="Антистресова поведінкова активність">

            <Text style={styles.paragraph}>Активності, які можна та слід запропонувати підлітку:</Text>

            <Bullet symbol="•" style={styles.paragraph}>
              Знайти  грані камінці, можна вкласти їх в взуття, щоб краще їх відчувати та відволікатися від важких думок;</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
              Цукерки різних смаків (солоні, гіркі, кислі, солодкі);</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
              М’ячик-їжачок в руці, як засіб для відволікання від нав’язливих думок. Його можна перекочувати по руці, порахувати точки від нього на шкірі;</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
              Щоденник фото, буде чудово, якщо з описом настрою;</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
              Спорт і будь-які доступні фізичні вправи;</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
              Жонглювання;</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
              Ігри зі словами, але задом наперед;</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
              Пошук у кімнаті (знайди все овальне, все червоне, все їстівне і т.д.)</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
              Сприйняття та розрізнення звуків навколо;</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
              Допомога комусь у чомусь;</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
              Гра у «Навпаки» - коли хочеться чогось – зробити протилежне. Замість того щоб лягти – поприсідай,
              замість того щоб помовчати – поспівай;</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
              Вправи на уважність;</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
              Дихальні вправи;</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
              Зав’язувати та зав’язувати різні вузли;</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
              Орігамі;</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
              Скакалка;</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
              Малювання або складання з мозаїки;</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
              Дебати на спонтанні теми;</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
              Словесний пінг-понг “Так… , але…”</Bullet>

          </Accordion>

          {/*3 from 3 */}
          <Accordion title="Вправа “Барабани без барабана”">

            <Text style={styles.paragraph}>Це гарна вправа на зосередженність, яка фокусує вашу увагу на вашому чутті слуху, на руках рук і,
              звичайно, як і у випадку з багатьма іншими вправами, ви можете її трохи модифікувати та виконувати на самоті.</Text>

            <Text style={styles.paragraph}>Вправа досить проста і не вимагає наявності барабана, адже її можна виконувати на столі, стегнах,
              тупаючись по підлозі або будь-якій іншій поверхні.</Text>

            <Text style={styles.paragraph}>Спочатку хтось із групи задає ритм постукування. Наприклад, ви можете почати з легкого постукування кінчиками пальців по столу,
              чергуючи спочатку праву та ліву руку. У подальшому інтенсивність (силу) можна змінити,
              наприклад, постукуючи всією рукою або постукуючи обома руками одночасно. </Text>

            <Text style={styles.paragraph}>Тепер група має знайти спільний ритм, аж поки хтось не спробує встановити новий ритм або змінити гучність,
              а група спробує до нього долучитися.</Text>

            <Text style={styles.paragraph}>Для гри на барабанах можна використовувати будь-які поверхні,
              постукувати по стегнах, ногами по підлозі. У вас можуть виникнути зовсім інші та нові ідеї.</Text>

          </Accordion>

          <View style={styles.spacer} />
        </View>
      </ScrollView>
    </View>
  );
}
