import React from "react";
import { Text, View, ScrollView } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Bullet from "/components/Bullet";
import Header from "/components/Header";
import resolveStyles from "/styles/subpage";
import Accordion from "/components/Accordion";

export default function Igry({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveStyles(computeTheme(), computeFontSize);


  return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>

          <Text style={styles.header}>Ігри та вправи для зняття стресу у дітей </Text>
          <Text style={styles.paragroph}>Гра – це основний вид діяльності дітей, метод дитини в пізнанні світу.
            Завдяки грі дитина вчиться спілкуватися з однолітками, дотримуватися правила, поступатися, доводити своє
            право у виборі гри. Отже, справитися з  найяскравішими емоціями та напруженням дитині є найприроднішим саме через гру.
            При використанні цих ігор – пам’ятайте, все що дитина робить в такій грі, має йти від її бажання та приносити
            результат. Допоможіть дитині помітити цей результат – через розмову або запитання.
            Тут зібрано декілька ігор, які допоможуть дитині зняти підвищене емоційне напруження.</Text>

          <Accordion title="Теоретичне пояснення">

            <Text style={styles.paragraph}>У дітей емоційна напруга завжди проявляється по-різному.
              Діти можуть ставати мовчазними, уникати друзів, демонструвати ознаки депресії, у них проявляються
              напади роздратування або спалахи люті, в цілому їх поведінка стає дуже важкою, вони часто
              втрачають контроль над собою.Саме керована ігрова діяльність допоможе дитині зменшити емоційне
              напруження. </Text>

          </Accordion>

          <Text style={styles.paragroph}>Практичні вправи </Text>

          {/* Accordion Number 19, 20 and 21 text needs to be in poem view, don't know how  to do so*/}

          {/*1 */}
          <Accordion title="Гра “Де я?”">

            <Text style={styles.paragraph}> Спрямована на виведення  дитини з неприємних спогадів та переживань за допомоги фіксації на теперішньому моменті. </Text>
            <Text style={styles.paragraph}> У будь-який час запитуйте дитину "Де ти?", а та у відповідь нехай розповість про навколишнє середовище із залученням всіх
              органів чуття: "Я на вулиці, слухаю шурхіт листя, теплі сонячні промені торкаються обличчя, а у повітрі аромат булочок з кафе поблизу". </Text>

          </Accordion>
          {/*2 */}
          <Accordion title="Гра “Розшифрування імені”">

            <Text style={styles.paragraph}>Спрямована на перемикання уваги.</Text>
            <Text style={styles.paragraph}> До кожної букви імені доберіть позитивну якість характеру, що починається на таку саму букву (наприклад, Оля: Охайна, Ласкава, Яскрава). </Text>

          </Accordion>

          {/*3 */}
          <Accordion title="Гра “Дві маски”">

            <Text style={styles.paragraph}>Спрямована на формування почуття внутрішньої сили та збільшення внутрішніх ресурсів.</Text>
            <Text style={styles.paragraph}> Потрібно купити, а краще виготовити власноруч з дитиною дві маски. Одна буде "сильною",
              у ній дитина почуватиметься впевнено; інша — "слабка". Спочатку нехай дитина надягне "сильну" та поговорить за неї. Потім настане черга
              "слабкої" маски, дитина розповість її переживання. Поміркуйте разом, як перша маска може допомогти другій, і коли вона стала б у пригоді йому самому.
              Така гра вчить дитину відстежувати та коригувати свій емоційний стан. Дуже обережно потрібно говорити про почуття дитини, особливо після сильних емоційніх потрясінь.
              Нехай дитина скаже, лише те, що хоче сама, не допитуйтесь та не заглиблюйте в переживання. Зверніть увагу в розмові саме на те, що може перша
              "Маска" дати або запропонувати другій. </Text>

          </Accordion>

          {/*4 */}
          <Accordion title="Гра “Пластилін”">

            <Text style={styles.paragraph}>Спрямована на відновлення емоційної активності.</Text>
            <Text style={styles.paragraph}>Внаслідок психологічної травми обличчя людини (не тільки дитини) часто наче застигає,
              його вираз майже не змінюється. Щоб повернути емоційну активність, візьміть спочатку шматок пластиліну і разом з дитиною розминайте його.
              Потім запропонуйте дитині уявити, що її обличчя — також пластилінове, і почніть його "розминати": смикайте за щічки, прохайте їх надути чи втягнути.
              Урешті-решт, влаштуйте конкурс "кривляки" на найкращу гримасу!</Text>

          </Accordion>
          {/*5 */}
          <Accordion title="Гра “Різнокольорові дні”">

            <Text style={styles.paragraph}>Спрямована на відновлення відчуття теперішнього часу</Text>
            <Text style={styles.paragraph}>Після переживань можуть виникнути проблеми з плином часу, бо пам’ять постійно повертається до неприємних подій.
              Дитина ніби дивиться постійно вглиб себе. Щоб повернути її у теперішній час, підкреслити, що час спливає, призначте кожному дню тижня свій колір
              (дуже зручно — сім днів та сім барв у веселці). Припустимо, четвер у вас зелений. Шукайте цього дня зелені предмети, вибирайте зелені фрукти та овочі,
              одягайте за можливості зелений одяг.</Text>

          </Accordion>
          {/*6 */}
          <Accordion title="Вправа “Квітка та свічка”">

            <Text style={styles.paragraph}>Вправа спрямована на розслаблення та глибоке дихання.</Text>

            <Bullet symbol="•" style={styles.paragraph}>
              Уявіть, що у вас в одній руці приємно пахне квітка, а в іншій — запалена свічка.</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
              Повільно зробіть вдих через ніс й уявіть, що відчуваєте запах квітки.</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
              Повільно видихніть через рот, наче задуваєте свічку.</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
              Повторіть кілька разів.</Bullet>

          </Accordion>
          {/*7 */}
          <Accordion title="Вправа “Лимони”">

            <Text style={styles.paragraph}>Вправа спрямована на зняття м’язового напруження.</Text>

            <Bullet symbol="•" style={styles.paragraph}>
              Уявіть, що у вас у руці лимон.</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
              Уявіть, ніби ви підходите до дерева та зриваєте два лимони, по одному в кожну руку. </Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
              Сильно здавіть лимони, щоби вичавити сік – вичавлюйте, вичавлюйте, вичавлюйте!</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
              Киньте лимони на підлогу та розслабте руки.</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
              Потім повторюйте, доки соку не набереться на склянку лимонаду.</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
              Після останнього натискання та кидка струсіть руки, щоби розслабитися.</Bullet>

          </Accordion>
          {/*8 */}
          <Accordion title="Вправа “Лінивий кіт”">

            <Text style={styles.paragraph}>Вправа спрямована на зняття м’язового напруження.</Text>

            <Bullet symbol="•" style={styles.paragraph}>
              Уявіть, що ви лінивий кіт, який щойно прокинувся після приємного довгого сну.</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
              Широко позіхніть.</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
              Помурчіть, як кіт: "мяу-мяу”.</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
              Тепер витягніть руки, ноги та спину – і потягніться повільно, як кіт. Розслабтеся.</Bullet>

          </Accordion>
          {/*9 */}
          <Accordion title="Вправа “Пір’їнка і статуя”">

            <Text style={styles.paragraph}> Вправа спрямована на зняття м’язового напруження.</Text>

            <Bullet symbol="•" style={styles.paragraph}>
              Уявіть, що ви пір’їнка, що літає в повітрі приблизно десять секунд.</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
              Раптом ви завмираєте й перетворюєтеся на статую. Не рухайтеся!</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
              Потім повільно розслабтеся, знову перетворюючись на пір’їнку, що літає в повітрі. </Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
              Повторіть кілька разів. Переконайтеся, що закінчите пір’їнкою в розслабленому стані.</Bullet>

          </Accordion>
          {/*10 */}
          <Accordion title="Вправа “М’яч для зняття стресу”">

            <Text style={styles.paragraph}> Вправа спрямована на зняття м’язового напруження та масаж рук.</Text>

            <Bullet symbol="•" style={styles.paragraph}>
              Зробіть собі м’ячик для зняття стресу. Наприклад, для цього ви можете наповнити повітряні кульки сухим горохом або рисом.</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
              Візьміть м’яч у руку, можете взяти два в обидві руки, стисніть м’яч і розслабте руку.</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
              Поекспериментуйте зі стисканням м’яча. Знайдіть спосіб, який підходить саме вам, змінюйте швидкість стискання, силу та тривалість стискань так, як вам буде подобатися.</Bullet>

          </Accordion>
          {/*11 */}
          <Accordion title="Вправа “Черепаха”">

            <Text style={styles.paragraph}> Вправа спрямована на зняття м’язового напруження.</Text>

            <Bullet symbol="•" style={styles.paragraph}>
              Уявіть, що ви черепаха, яка йде на повільну, розслаблену прогулянку.</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
              Уявіть, ніби раптово почався дощ.</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
              Щільно згорніться в калачик під панциром десь на десять секунд.</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
              ПУявіть, що знову вийшло сонце, тому можна вилазити з панцира та продовжити розслаблену прогулянку.</Bullet>

            <Bullet symbol="•" style={styles.paragraph}>
              Повторіть кілька разів. Переконайтеся, що завершуєте вправу прогулянкою, щоби ваше тіло розслабилося.</Bullet>

          </Accordion>
          {/*12 */}
          <Accordion title="Вправа “Корабель і вітер”">

            <Text style={styles.paragraph}> Вправа спрямована на стабілізацію емоційного стану.</Text>
            <Text style={styles.paragraph}> Уявіть собі, що наш вітрильник пливе по хвилях, але раптом він зупинився. Давайте допоможемо йому і запросимо на допомогу вітер.
              Вдихніть в себе повітря, сильно втягніть щоки... А тепер голосно видихніть через рот повітря, і нехай вирвався на волю вітер підганяє кораблик. Давайте спробуємо ще раз.
              Я хочу почути, як шумить вітер! Вправу можна повторити 3 рази.</Text>

          </Accordion>

          {/*13 */}
          <Accordion title="Вправа «Сопілочка»">

            <Text style={styles.paragraph}> Вправа спрямована на розслаблення м’язів обличчя</Text>
            <Text style={styles.paragraph}> Давайте пограємо на сопілочці. Неглибоко вдихніть повітря, піднесіть уявну сопілку до губ. Починайте повільно видихати,
              і на видиху спробуйте витягнути губи в трубочку. Потім почніть спочатку. Грайте! Який чудовий оркестр!</Text>

          </Accordion>

          {/*14 */}
          <Accordion title="Вправа “Рот на замок”">

            <Text style={styles.paragraph}>Вправа спрямована на розслаблення м’язів губ та нижньої щелепи.</Text>
            <Text style={styles.paragraph}> Уявить собі, як би міг виглядати насправді образний вираз "Рот на замок!". Сильно стисніть губи. Тепер, не відпускаючи, підтисніть їх так,
              щоб їх зовсім не було видно. Так потрібно протриматися кілька секунд, а потім можна розслабити губи. Підкресліть, що тепер губи стали знову м'якими і розслабленими.</Text>
            <Text style={styles.paragraph}>Цю гру бажано повторити кілька разів для більшого ефекту. Щоб дитині не стало нудно, можна чергувати її з аналогічною грою "Слон", коли дитина витягує губи вперед трубочкою,
              зображуючи хобот слона, а потім розслаблює їх.</Text>

          </Accordion>

          {/*15 */}
          <Accordion title="Вправа “Повітряна кулька”">

            <Text style={styles.paragraph}> Вправа спрямована на розслаблення м’язів живота.</Text>
            <Text style={styles.paragraph}> Для початку згадайте з дитиною, коли ви в останній раз надували повітряні кулі. Як змінюється обсяг кульки коли ми її надуваємо?
              Звичайно, вона збільшується в розмірі і напружується, стінки її стають пружними і їх непросто продавити пальцем. Тепер нехай дитина уявить себе такою повітряною кулею.
              Потрібно зробити дуже глибокий вдих і затамувати подих. Попросіть покласти руку на живіт і відчути, чи став він круглим і напруженим. Якщо почав,
              то можна видихнути і відчути, як приємно, коли живіт розслаблений. Повторіть гру ще три-п'ять разів: напруження на вдиху, затримка на кілька секунд,
              видих і розслаблення.</Text>
            <Text style={styles.paragraph}>Примітка. Зверніть увагу на те, щоб напружувався саме живіт, простежте за плечима дитини - вони не повинні підніматися.
              Другий важливий момент - видих повинен бути зроблений без зусилля, повітря саме вийде, якщо перестати напружувати живіт.</Text>

          </Accordion>

          {/*16 */}
          <Accordion title="Вправа “Хто сильніше”">

            <Text style={styles.paragraph}>Вправа спрямована на формування почуття безпеки.</Text>
            <Text style={styles.paragraph}>Запропонуйте дитині обійнятися. Можна спробувати вимірювати силу обіймів «Обійми мене сильніше ніж я тебе».
              Призначте її головною за підрахунок обіймів за день.</Text>

          </Accordion>

          {/*17 */}
          <Accordion title="Вправа “Ліпимо своє тіло”">

            <Text style={styles.paragraph}>Вправа спрямована на відновлення відчуття контакту з власним тілом.</Text>
            <Text style={styles.paragraph}> Можна зайнятися ніби «ліпкою» - ліпимо тіло як пластилін. Вчимо дитину робити це разом з вами.
              Таким чином дитина, вивчає межі свого тіла та навчається саморегуляції через відчуття свого тіла.</Text>

          </Accordion>

          {/*18 */}
          <Accordion title="Вправа “Я у схованці”">

            <Text style={styles.paragraph}> Вправа спрямована на формування почуття безпеки.</Text>
            <Text style={styles.paragraph}> Посадіть дитину спинкою до себе та міцно обійміть. В залежності від ситуації та часу, можна трохи погойдувати.</Text>

          </Accordion>

          {/*19   (Number 19, 20 and 21 text needs to be in poem view, don't know how  to do so) */}
          <Accordion title="Вправа “У мене кругла голова”">

            <Text style={styles.paragraph}>Вправа спрямована на відновлення відчуття контакту з власним тілом.</Text>
            <Text style={styles.paragraph}>Промовлянка, з віддтворенням рухів:</Text>

            <Bullet symbol="" style={styles.paragraph}> У мене кругла голова</Bullet>
            <Bullet symbol="" style={styles.paragraph}> Очка два, вушка два,</Bullet>
            <Bullet symbol="" style={styles.paragraph}> Ніс один і рот маленький,</Bullet>
            <Bullet symbol="" style={styles.paragraph}> І волоссячко біленьке.</Bullet>
            {/*
            <Text style={styles.paragraph}>У мене кругла голова
                                           Очка два, вушка два,
                                           Ніс один і рот маленький,
                                           І волоссячко біленьке.
                                           </Text>
*/}
          </Accordion>

          {/*20 */}
          <Accordion title="Доброго ранку”">

            <Text style={styles.paragraph}> Вправа спрямована на відновлення відчуття контакту навколишнім світом.</Text>
            <Text style={styles.paragraph}> Прокидаючись вранці можна запропонувати дитині таку промовлянку: – Пальцями правої руки по черзі „вітатися" з пальцями лівої руки,
              торкаючись один до одного кінчиками.</Text>

            <Bullet symbol="" style={styles.paragraph}> Доброго ранку</Bullet>
            <Bullet symbol="" style={styles.paragraph}> Доброго ранку, сонце привітне!</Bullet>
            <Bullet symbol="" style={styles.paragraph}> Доброго ранку, небо блакитне!</Bullet>
            <Bullet symbol="" style={styles.paragraph}> Доброго ранку, у небі пташки!</Bullet>
            <Bullet symbol="" style={styles.paragraph}> Доброго ранку тобі i мeнi!</Bullet>
            {/*
            <Text style={styles.paragraph}> Доброго ранку
                                            Доброго ранку, сонце привітне!
                                            Доброго ранку, небо блакитне!
                                            Доброго ранку, у небі пташки!
                                            Доброго ранку тобі i мeнi!</Text>
*/}
            <Text style={styles.paragraph}> Пальцями правої руки по черзі “вітатися” з пальцями лівої руки, торкаючись один до одного кінчиками.</Text>
          </Accordion>
          {/*21 */}
          <Accordion title="Пальчикові ігри">

            <Text style={styles.paragraph}> Вправа спрямована на розслаблення м’язів рук та пальців.</Text>

            <Bullet symbol="" style={styles.paragraph}> Перший пальчик — наш дiдycь,</Bullet>
            <Bullet symbol="" style={styles.paragraph}> Другий пальчик — то бабуся,</Bullet>
            <Bullet symbol="" style={styles.paragraph}> Третій пальчик — наш татусь,</Bullet>
            <Bullet symbol="" style={styles.paragraph}> А четвертий — то матуся,</Bullet>
            <Bullet symbol="" style={styles.paragraph}> А мізинчик — наш малюк,</Bullet>
            <Bullet symbol="" style={styles.paragraph}> Biн сховався тут.</Bullet>
            {/*
            <Text style={styles.paragraph}> Перший пальчик — наш дiдycь,
                                            Другий пальчик — то бабуся,
                                            Третій пальчик — наш татусь,
                                            А четвертий — то матуся,
                                            А мізинчик — наш малюк,
                                            Biн сховався тут.</Text>
*/}
            <Text style={styles.paragraph}> Показуємо на пальчик та кажемо: “перший пальчик”..., i продовжуємо гру, загинаючи кожен пальчик</Text>

            <Bullet symbol="" style={styles.paragraph}> Задрімав мізинчик трішки,</Bullet>
            <Bullet symbol="" style={styles.paragraph}> Безіменний — стриб у ліжко,</Bullet>
            <Bullet symbol="" style={styles.paragraph}> А середній там лежить,</Bullet>
            <Bullet symbol="" style={styles.paragraph}> Вказівний давно вже спить.</Bullet>
            <Bullet symbol="" style={styles.paragraph}> Вранці вci вони схопились враз</Bullet>
            <Bullet symbol="" style={styles.paragraph}> В дитсадочок бігти час.</Bullet>
            {/*
            <Text style={styles.paragraph}> Задрімав мізинчик трішки,
                                            Безіменний — стриб у ліжко,
                                            А середній там лежить,
                                            Вказівний давно вже спить.
                                            Вранці вci вони схопились враз —
                                            В дитсадочок бігти час.</Text>
*/}
            <Text style={styles.paragraph}> По черзі загинаємо пальчики до долоні. Потім великим пальцем торкаємося всіх інших - “будимо”. Розкриваємо всі пальці „враз".</Text>

            <Bullet symbol="" style={styles.paragraph}> Старший встав — не лінувався.</Bullet>
            <Bullet symbol="" style={styles.paragraph}> Вказівний за ним піднявся —</Bullet>
            <Bullet symbol="" style={styles.paragraph}> Розбудив сусід його.</Bullet>
            <Bullet symbol="" style={styles.paragraph}> Той — свого, а той свого.</Bullet>
            <Bullet symbol="" style={styles.paragraph}> Встали вчасно вci брати —</Bullet>
            <Bullet symbol="" style={styles.paragraph}> На роботу треба йти.</Bullet>
            {/*
            <Text style={styles.paragraph}> Старший встав — не лінувався.
                                            Вказівний за ним піднявся —
                                            Розбудив сусід його.
                                            Той — свого, а той свого.
                                            Встали вчасно вci брати —
                                            На роботу треба йти.</Text>
*/}
            <Text style={styles.paragraph}> Стиснути пальчики в кулачок. По черзі розгинати їх, починаючи з великого. А зі словами: „Встали вчасно вci..." широко розчепірити пальці.</Text>

          </Accordion>

        </View>
      </ScrollView>
    </View>
  );
}