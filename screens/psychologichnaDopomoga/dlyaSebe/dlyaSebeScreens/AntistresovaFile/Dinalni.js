import React from "react";
import { Text, View, ScrollView } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Bullet from "/components/Bullet";
import Header from "/components/Header";
import resolveStyles from "/styles/subpage";
import ListItem from "/components/ListItem";
import Accordion from "../../../../../components/Accordion";

export default function Dinalni({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveStyles(computeTheme(), computeFontSize);
  
  
  return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Дихальні вправи</Text>

          <Text style={styles.paragraph}>Дихальні техніки є дуже дієвим інструментом самокерування в ситуаціях стресу і тривоги,
           в часі фізичного або емоційного збудження. Вміння заспокоювати себе за допомогою дихання – це дуже практична і універсальна 
           навичка, оскільки дихання завжди з нами, ми можемо дихати будь-де і це природно. 
           Дихальні вправи спрямовані на подолання проявів стресу та збудження, зменшення тривожності, відновлення самоконтролю.
          </Text>

          {/*1 */}
          <Accordion title= "Дихання животом">

            <Bullet symbol="•" style={styles.paragraph}>
            Сядьте або ляжте в зручному положенні. Покладіть одну руку на живіт трохи нижче ребер, а іншу руку на груди.</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
            Зробіть глибокий вдих через ніс і дозвольте вашому животу підняти руку. 
            Ваш і груди не повинні рухатися.</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
            Видихніть, склавши губи трубочкою. Відчуйте, як рука на животі опустилася. 
            Робіть цю вправу від 3 до 10 разів. Не поспішайте з кожним вдихом. Зверніть увагу на те,
            як ви себе почуваєте в кінці вправи.</Bullet>

          </Accordion>
          {/*2 */}
          <Accordion title= "Дихання “Квадратом” 4:4:4:4">

            <Text style={styles.paragraph}>Для цієї вправи також використовується дихання животом.
            Можна робити сидячи або лежачи.</Text>

            <Bullet symbol="•" style={styles.paragraph}>
            Для початку покладіть одну руку на живіт, а іншу на груди. Зробіть глибокий, повільний вдих животом,
            під час вдиху подумки рахувати до 4.</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
            Затримайте дихання і знову порахуйте до 4.</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
            Повільно зробіть видих на рахунок 4.</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
            Затримайте дихання і знову порахуйте до 4.</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
            Повторіть від 3 до 7 разів або поки не відчуєте себе спокійним. Зверніть увагу, як ви себе почуваєте в кінці вправи.</Bullet>

          </Accordion>
          {/*3 */}
          <Accordion title= "Дихання 1:2">

            <Text style={styles.paragraph}>Чудова дихальна вправа, яка ефективно допомагає впоратися зі стресом
            або заснути. Важливо, щоб видих був у два рази довший за вдих. Ви можете підібрати для себе 
            найкомфортніше співвідношення (4:8 або 5:10). Для цієї вправи також використовується дихання животом. 
            Можна робити сидячи або лежачи.</Text>

            <Bullet symbol="•" style={styles.paragraph}>
            Для початку покладіть одну руку на живіт, а іншу на груди. Зробіть глибокий, повільний вдих животом, 
            під час вдиху подумки рахуйте до 4 або 5.</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
            Повільно зробіть видих, склавши губи трубочкою на рахунок 8 або 10.</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
            Повторіть від 3 до 7 разів або поки не відчуєте себе спокійними. Зверніть увагу, 
            як ви себе почуваєте в кінці вправи.</Bullet>

            <Text style={styles.paragraph}>Іноді може відчуватися легке запаморочення у процесі виконання вправи. 
            Це абсолютно нормально. Зробіть паузу, і коли відчуєте себе краще – повторіть.</Text>
          
          </Accordion>
          {/*4 */}
          <Accordion title= "Ранкове дихання">

            <Text style={styles.paragraph}>Використовуйте цю вправу, щоб зменшити м'язову скутість, напругу в тілі. </Text>

            <Bullet symbol="•" style={styles.paragraph}>
            У положенні стоячи нахиліться вперед, злегка зігнувши коліна, руки звисають біля підлоги.</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
            Повільно і глибоко вдихаючи, поверніться в стояче положення, повільно розгинаючись і піднімаючи голову в останню чергу. 
            Затримайте дихання на кілька секунд в цьому положенні стоячи.</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
            Повільно видихніть, коли повернетеся у вихідне положення, нахилившись вниз.
            Зверніть увагу, як ви себе почуваєте в кінці вправи.  </Bullet>

          </Accordion>
          {/*5 */}
          <Accordion title= "Дихання через кожну ніздрю по черзі">

            <Bullet symbol="•" style={styles.paragraph}>
            Сядьте в зручному положенні, тримаючи спину рівно.</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
            Розслабтеся протягом кількох хвилин.</Bullet>
            
            <Bullet symbol="•" style={styles.paragraph}>
            Великим пальцем правої руки закрийте праву ніздрю. Вдих через ліву ніздрю на рахунок 4. </Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
            Потім мізинцем правої руки закрийте ліву ніздрю. Видих через праву ніздрю на рахунок 4. </Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
            Тримаємо закритою ліву ніздрю і робимо вдих на рахунок 4 правою ніздрьою.</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
            Потім великим пальцем правої руки закрийте праву ніздрю. Вдих через ліву ніздрю на рахунок 4.</Bullet>

            <Text style={styles.paragraph}>Виконайте кілька циклів. Спершу ця техніка може здаватися складною,
            адже потрібно стежити за тим, щоб правильно закривати ту чи іншу ніздрю. Але коли ви звикнете,
            вправа стане дуже ритмічною та заспокійливою.</Text>
          
          </Accordion>
          {/*6 */}
          <Accordion title= "Вправа “Подвійний видих”">

            <Bullet symbol="•" style={styles.paragraph}>
            Спочатку вирівнюємо дихання на рахунок 4, роблячи паузу після видиху. </Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
            Потім вносимо ще один елемент: після видиху, на паузі, відчувши розкриття легенів,
            робимо ще одну спробу видихнути все повітря, яке ще залишилося в легенях. </Bullet>
            
            <Bullet symbol="•" style={styles.paragraph}>
            Потім відновлюємо дихання, і кілька разів дихаємо на рахунок 4 як і раніше.</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
            Заспокоюючи подих, ми переводимо організм в режим розслаблення, 
            адже при стресі не тільки м'язи напружені, але й дихання частішає. </Bullet>

          </Accordion>
          {/*7 */}
          <Accordion title= "Вправа “Повітряна кулька”">

            <Bullet symbol="•" style={styles.paragraph}>
            Лежачи на підлозі, поклади руки на живіт. </Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
            Роблячи повільний глибокий вдих, надувай живіт, одночасно уявляючи,
            що в животі надувається повітряна кулька.</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
            Затримай дихання на 5 секунд. Зроби повільний видих, живіт здувається. </Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
            Затримай дихання на 5 секунд.</Bullet>

            <Text style={styles.paragraph}>Виконувати можна 5-6 разів підряд.</Text>

          
          </Accordion>
          {/*8 */}
          <Accordion title= "Вправа “Плавець”">

            <Text style={styles.paragraph}>Вихідне положення - сидячи на підлозі, схрестивши ноги 
            (варіанти: сидячи на колінах або на п'ятах, ноги разом).</Text>

            <Bullet symbol="•" style={styles.paragraph}>
            Спина пряма. </Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
            Верхня частина тулуба імітує плавця кролем. </Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
            Руки почергово роблять «гребки», вдих з поворотом голови на 90%,
             видих на три помахи руками, голова прямо.</Bullet>

          </Accordion>
          {/*9 */}
          <Accordion title= "Вправа">

            <Text style={styles.paragraph}>Вихідне положення - сидячи на підлозі, схрестивши ноги 
            (варіанти: сидячи на колінах або на п'ятах, ноги разом).</Text>

            <Bullet symbol="•" style={styles.paragraph}>
            Спина пряма. </Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
            Піднімати руки вгору над головою з вдихом і опускати вниз, 
            на підлогу перед собою з видихом, трохи згинаючись при цьому в тулуб.</Bullet>

          </Accordion>
          {/*10 */}
          <Accordion title= "Вправа">

            <Text style={styles.paragraph}>Вихідне положення - сидячи на підлозі, схрестивши ноги 
            (варіанти: сидячи на колінах або на п'ятах, ноги разом). </Text>

            <Bullet symbol="•" style={styles.paragraph}>
            Спина пряма. Руки витягнуті над головою. </Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
            На видиху згинаємося вперед, дістаючи руками і лобом до підлоги.</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
            На вдиху розпрямляємось, повертаючись у вихідне положення.</Bullet>

          </Accordion>
          {/*11 */}
          <Accordion title= "Вправа">

            <Text style={styles.paragraph}>Вихідне положення - сидячи на підлозі, схрестивши ноги 
            (варіанти: сидячи на колінах або на п'ятах, ноги разом). Спина пряма. </Text>

            <Bullet symbol="•" style={styles.paragraph}>
            Прямі руки витягнуті вперед або в сторони на рівні плечей, долоні дивляться вниз. </Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
            З вдихом ліва кисть піднімається вгору, права опускається вниз. </Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
            З видихом - ліва кисть вниз, права вгору.</Bullet>

          </Accordion>

          <View style={styles.spacer} />
        </View>
      </ScrollView>
    </View>
  );
}
