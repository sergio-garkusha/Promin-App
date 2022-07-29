import React from "react";
import { Text, View, ScrollView } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Bullet from "/components/Bullet";
import Header from "/components/Header";
import resolveStyles from "/styles/subpage";
import ListItem from "/components/ListItem";
import Accordion from "../../../../../components/Accordion";

export default function Tilesni({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveStyles(computeTheme(), computeFontSize);
  
  
  return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Тілесні вправи</Text>

          <Text style={styles.paragraph}>Очевидно, що вплив стресу відображається на всьому тілі. Хтось відчуває важкість у грудях,
           хтось відчуває ноги “важкими”.  Для того щоб вийти з циклу стресової реакції та якісно її прожити, звісно ж, необхідно 
           задіяти тіло та всі фізичні можливості, які є для вас доступними в даний час. Після кожної вправи, відслідкуйте, як змінюються
            відчуття в тілі. Якщо відчуваєте, що хочеться зробити декілька вправ - зробіть їх. Ефективно буде поєднувати з когнітивними 
            техніками та дихальними вправами. Не існує єдиного рецепту - орієнтуйтесь на власні потреби тут і зараз. 
          </Text>
          {/*1 */}
          <Accordion title= "Вправа Пружинки">
            
            <Bullet symbol="•" style={styles.paragraph}>
            Уявіть, що на підошві Ваших ніг - пружини.  </Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
              Починаємо стрибки на місці, ноги поступово напружуються все більше і більше, немов Ви дійсно стрибаєте на пружинах. </Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
            Після максимального напруження - в черговий раз приземляємося і повністю розслаблюємо ноги і все тіло, наче пружинки з Вас нарешті зняли.   </Bullet>

            <Text style={styles.paragraph}> Рекомендовано робити 20 стрибків на місці або присідання (теж 20 разів). </Text>

          </Accordion>
          {/*2 */}
          <Accordion title= "Вправа “Силач”">

          <Bullet symbol="•" style={styles.paragraph}>
          Уявіть, що Ви піднімаєте штангу.  </Bullet>

          <Bullet symbol="•" style={styles.paragraph}>
          Це дуже важко, Ви відчуваєте напругу в тілі все більше і більше.  </Bullet>

          <Bullet symbol="•" style={styles.paragraph}>
          Підняли штангу - максимально напружуємо тіло, руки вгору. Потім різко «кидаємо» штангу,
          і повністю розслаблюємо тіло, відпочиваємо.  </Bullet>
            
          </Accordion>

         {/*3 */}
         <Accordion title= "Вправа “Муха”">
          
          <Bullet symbol="•" style={styles.paragraph}>
          Сядьте зручно: руки вільно покладіть на коліна, плечі і голова опущені, очі заплющені.    </Bullet>

          <Bullet symbol="•" style={styles.paragraph}>
          Подумки уявіть, що на ваше обличчя намагається сісти муха. Вона сідає то на ніс, то на рот, то на лоб, то на очі.   </Bullet>

          <Bullet symbol="•" style={styles.paragraph}>
          Ваше завдання: не відкриваючи очей, задіявши тільки м'язи обличчя, зігнати настирливу комаху.   </Bullet>

          <Bullet symbol="•" style={styles.paragraph}>
          Після кількох хвилин такої "гри" розплющте очі, і побачите, що мухи не існує.  </Bullet>

          </Accordion>

          {/*4 */}
          <Accordion title= "Вправа “Лимон”">
          
          <Bullet symbol="•" style={styles.paragraph}>
          Сядьте зручно: руки вільно, покладіть на коліна (долонями вгору), плечі і голова опущені, очі заплющені.   </Bullet>

          <Bullet symbol="•" style={styles.paragraph}>
          Подумки уявіть собі, що у вас в правій руці лежить лимон.  </Bullet>

          <Bullet symbol="•" style={styles.paragraph}>
          Починайте повільно його стискати до тих пір, поки не відчуєте, що "вичавили" весь сік, розслабтеся.  </Bullet>

          <Bullet symbol="•" style={styles.paragraph}>
          Запам'ятайте свої відчуття, тепер уявіть собі, що лимон знаходитися в лівій руці. Повторіть вправу.  </Bullet>

          <Bullet symbol="•" style={styles.paragraph}>
          Знову розслабтеся і запам'ятайте свої відчуття. Потім виконайте вправи одночасно двома руками. Розслабтеся.  </Bullet>

          </Accordion>
          {/*5 */}
          <Accordion title= "Вправа “Перехресні кроки”">

          <Bullet symbol="•" style={styles.paragraph}>
          Звичайна ходьба на місці в швидкому темпі.   </Bullet>

          <Bullet symbol="•" style={styles.paragraph}>
          На кожен раз, коли ваше ліве коліно піднімається, торкайтеся нього правою рукою. І навпаки.
          </Bullet>

          <Bullet symbol="•" style={styles.paragraph}>
          Рухи повинні бути настільки енергійними, щоб помах рук був вище голови в той момент, коли коліно тільки опускається.  </Bullet>

          <Bullet symbol="•" style={styles.paragraph}>
          Повторіть вправу кілька разів, міняючи руку і ногу.  </Bullet>
            
          <Text style={styles.paragraph}> Вправу можна робити стоячи, сидячи (для зміцнення преса і зняття напруги
          зі спини) і лежачи. Таке тренування не тільки активізує роботу головного мозку, але і знімає шкідливі 
          наслідки стресорних впливів. </Text>

          </Accordion>
          {/*6 */}
          <Accordion title= "Вправа “Вухо-ніс”">
            
          <Bullet symbol="•" style={styles.paragraph}>
          Пальцями лівої руки торкніться кінчика носа, а правою рукою – лівого вуха.    </Bullet>
          
          <Bullet symbol="•" style={styles.paragraph}>
          Одночасно відпустіть вухо та ніс, хлопніть у долоні та здійснить торкання навпаки 
          правою рукою кінчик носа, лівою рукою праве вухо.   </Bullet>

          </Accordion>
          {/*7 */}
          <Accordion title= "Вправа “Ледача вісімка”">
            
          <Bullet symbol="•" style={styles.paragraph}>
          Витягнути вперед руку, стиснуту в кулак і з піднятим догори великим пальцем. </Bullet>

          <Bullet symbol="•" style={styles.paragraph}>
          Потім почати повільно описувати в повітрі великий знак нескінченності (у вигляді лежачої вісімки). </Bullet>

          <Bullet symbol="•" style={styles.paragraph}>
          Далі слід повторити цю вправу по 4 рази кожною рукою, потім – зчепивши обидві руки.  </Bullet>

          <Bullet symbol="•" style={styles.paragraph}>
          На останньому етапі необхідно включити все тіло, описуючи цю вісімку вже всім корпусом.???  </Bullet>

          </Accordion>
          {/*8 */}
          <Accordion title= "Вправа “Самомасаж”">
            
            <Text style={styles.paragraph}>Застосовуйте будь яку можливість зробити собі самомасаж всіх 
            зон тіла до яких може доторкнутися та дотягнутися. Це може бути прохлопування тіла, розтирання 
            тіла руками, рушником, валіком або іншими засобами.  </Text>

          </Accordion>
          {/*9 */}
          <Accordion title= "Вправа “Монотонні рухи”">
            
            <Text style={styles.paragraph}> Здійснюйте однакові, типові рухи – клацання пальцями, підскокування, 
            стрибки на місці тощо. </Text>

          </Accordion>
          {/*10 */}
          <Accordion title= "Вправа “Метелик”">
            
            <Text style={styles.paragraph}> Сядьте зручно: схрестіть руки так щоб кисті рук торкались протилежного
             плеча. Почергово у темпі сердцебиття здійнюйте легкі поплескування по плечам. </Text>

          </Accordion>
          {/*11 */}
          <Accordion title= "Вправа “Орангутанг”">
            
            <Text style={styles.paragraph}> Кулачками легенько простукувати зону грудної клітини, бажано за часовою стрілкою
            ( приблизно 1 торкання в 1 секунду).  </Text>

          </Accordion>
          {/*12 */}
          <Accordion title= "Вправа “Мокрий пес”">
            
            <Text style={styles.paragraph}> Уявіть, що зараз ви песик, якого облили водою.
             Спробуйте імітуючи поведінку собачки струсити з себе зайву воду. Протрусити все тіло, 
             кожен м’яз рук, ніг, тулуба, обличчя. </Text>

          </Accordion>

          {/*13 */}
          <Accordion title= "Вправа «Грабельки»">
            
            <Text style={styles.paragraph}> Уявіть, що ваші ноги на піску і ви начебто пальцями 
            ніг намагаєтесь ухопити камінець або мушлю. Робіть ритмічно такі рухи активізуючи усю стопу. </Text>

          </Accordion>

          {/*14 */}
          <Accordion title= "Вправа “П’ятачок”">
            
            <Text style={styles.paragraph}>Доторкнутися до кінчика носа і натискаючи робити кругові рухи, 
            спочатку за годинниковою стрілкою 5-7 разів, потім у зворотному напрямку.   </Text>

          </Accordion>

          {/*15 */}
          <Accordion title= "Прогресивна нервово-м’язова релаксація за Джекобсоном. ">
            
            <Text style={styles.paragraph}> Прогресивна нервово-м’язова релаксація Джекобсона заснована на послідовному напруженні і 
            розслабленні різних груп м’язів.  </Text>

            <Text style={styles.paragraph}> Схема виконується за одним і тим самим алгоритмом:  </Text>

            <Bullet symbol="•" style={styles.paragraph}>
            спочатку потрібно напружити певні м’язи;  </Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
            потім усвідомити, відчути цю напругу; </Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
            розслабити ці м’язи;  </Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
            звернути особливу увагу на контраст між станом спокою і напруженням.  </Bullet>

          </Accordion>

          <Text style={styles.header2}>Засоби активізації відчуттів у тілі</Text>

          <Accordion title= "Дотик">

            <Bullet symbol="•" style={styles.paragraph}>
            Опора ногами, опора об стінку.   </Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
            Взяти щось до рук  </Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
            Швидко та сильно потупотіти ногами  </Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
            Активно розім’яти обличчя </Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
            Покривлятися, висунутися язика </Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
            Розтерти долоні до гарячого відчуття </Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
            Позіхай в повну силу, не менше 5 разів </Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
            Холодна вода.  </Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
            Обійняти дерево.   </Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
            З’їсти морозиво.  </Bullet>

          </Accordion>

          <Accordion title= "Зір">
            
            <Bullet symbol="•" style={styles.paragraph}>
            Озирнутися довкола   </Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
            Назвати усі предмети, які потрапляють в поле зору </Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
            Швидко покліпати очима  </Bullet>

          </Accordion>

          <Accordion title= "Слух">
            
            <Bullet symbol="•" style={styles.paragraph}>
            Зосередитися на диханні   </Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
            Зосередитися на чиємось голосі  </Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
            Зосередитися на нейтральній розмові  </Bullet>

          </Accordion>

          <Accordion title= "Смак і запах">

            <Bullet symbol="•" style={styles.paragraph}>
            З’їсти апельсин чи лимон  </Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
            Згадати улюблені запахи </Bullet>

          </Accordion>
          

          <View style={styles.spacer} />
        </View>
      </ScrollView>
    </View>
  );
}
