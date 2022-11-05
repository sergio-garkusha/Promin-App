import React from "react";
import { Text, View, ScrollView } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Bullet from "/components/Bullet";
import Header from "/components/Header";
import resolveStyles from "/styles/subpage";
import Accordion from "/components/Accordion";
import Paragraph from "/components/Paragraph";

export default function Relaksaciini({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveStyles(computeTheme(), computeFontSize);
  return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Релаксаційні вправи</Text>

          <Paragraph style={{ paddingBottom: 20 }}>
            Викорінити чи боротися з стресом не має сенсу в умовах, коли так багато невизначеності
            в житті кожного громадянина нашої країни. Але в наших силах вчитися адаптуватися до нього та впливати на свій душевний
            стан. А найголовніше завдання кожного - перетворити стрес на ресурс для самовдосконалення. Варто більш детально вивчати
            себе, працювати над собою, пізнавати себе. Релаксаційні вправи допоможуть зняти підвищену психоемоційну напругу та опанувати
            тривожність. При підготовці до виконання цих вправ потурбуйтесь про зручне та безпечне місце, де ви зможете провести якийсь час присвятити собі.

          </Paragraph>

          <Accordion title="Вправа «Хмари»">
            <Bullet symbol="•" style={styles.paragraph}>
              Лежачи на спині, розслабтеся, дихайте животом.
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              З кожним видихом уявіть, що всі Ваші біди і проблеми вилітають з повітрям,
              і перетворюються на білі, пухнасті хмари.
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              Уявіть, що Ви лежите на зеленій травичці, дивлячись в небо, і спостерігаєте як теплий, літній вітер відносить ці
              хмари все далі, за горизонт. Тепле сонечко гріє Вас, і заповнює утворену всередині порожнечу своїм теплом.
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              Вдихайте це тепло з кожним вдихом.
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              Продовжуйте, поки не відчуєте, що Ваша свідомість повністю очистилась від негативних думок.
            </Bullet>
          </Accordion>

          <Accordion title="Вправа «Ситечко»">
            <Bullet symbol="•" style={styles.paragraph}>
              Уявіть, що Ви стоїте ногами на величезному ситечку з дрібними отворами.
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              Уявіть, що ситечко повільно починає підніматися вгору, проходячи крізь Вас.
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              Відчуйте як стрес відбивається в Вашому тілі - де болить або ниє.
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              На ситечку залишаються всі Ваші нездужання і фізичний дискомфорт. Проходячи через голову,
              це ситечко залишає на собі всі Ваші негативні думки, переживання.
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              Уявіть собі цей негатив як крупинки сміття, що залишаються на ситечку. Коли ситечко повністю
              піднялося над головою - уявіть золоте світло, що йде зверху, від великого Сонця.
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              Нехай воно розчиняє весь негатив разом з ситечком. Після цього золоте світло наповнює все
              Ваше тіло і свідомість. Ви повністю розслаблені.
            </Bullet>
          </Accordion>

          <Accordion title="Вправа «Скриня»">
            <Bullet symbol="•" style={styles.paragraph}>
              Уявіть, що всередині Вас, в області сонячного сплетіння, знаходиться велика скриня.
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              Подумки складіть у нього всі свої образи, тривоги, печалі.
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              Різко видихніть, уявляючи, що Ваша скриня відправляється в міжгалактичний політ до зірок, можете навіть дати їй
              якесь уявне напуття, на кшталт «в чорну діру, на переробку».
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              Видихайте стільки разів, скільки потрібно, щоб Ви повністю очистилися від негативу.
            </Bullet>
          </Accordion>

          <Accordion title="Зняття емоційного напруження">
            <Bullet symbol="•" style={styles.paragraph}>
              Стисніть пальці в кулак із загнутим усередину великим пальцем. Роблячи видих, спокійно,
              не кваплячись, стискайте кулак із зусиллям. Потім, послабляючи стиск кулака, зробіть вдих.
              Повторіть вправу п’ять разів. Виконання вправи із закритими очима подвоює ефект. Вправу слід
              виконувати двома руками одночасно.
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              Зробіть двома волоськими горіхами кругові рухи в одній долоні. Вправа розвиває моторику рук.
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              Злегка промасажуйте кінчик мізинця.
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              Покладіть горіх на кисть руки з боку мізинця (на долоні) і долонею іншої руки злегка натисніть
              і проробіть горіхом кругові рухи (3 хвилини).
            </Bullet>
          </Accordion>

          <Accordion title="Кінезіологічна вправа">
            <Bullet symbol="•" style={styles.paragraph}>
              Одну долоню покладіть на потилицю, іншу – на чоло.
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              Заплющіть очі й подумайте про якусь негативну ситуацію.
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              Зробіть глибокий вдих-видих.
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              Уявіть подумки цю саму ситуацію ще раз, але тільки в позитивному аспекті, обміркуйте
              й усвідомте те, як можна було б дану проблему вирішити.
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              Після появи своєрідної «пульсації» між потиличною й лобовою частинами
              самокорекція завершується глибоким вдихом-видихом.
            </Bullet>
            <Paragraph>
              Вправа виконується від 10 до 30 хв.
            </Paragraph>
          </Accordion>

          <Accordion title="Вправа «Промінь світла»">
            <Bullet symbol="•" style={styles.paragraph}>
              Направте яскравий промінь світла від ліхтарика на середину чола.
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              Тривалість вправи від 30 до 60 секунд.
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              Виконуючи вправу, дивіться на чорний аркуш паперу.
            </Bullet>
          </Accordion>

          <Accordion title="Вправа «Блискавка»">
            <Bullet symbol="•" style={styles.paragraph}>
              Проведіть рукою вздовж переднього серединного меридіана від нижньої губи до лобової кістки,
              потім у зворотному напрямы (розстібаючи і застібаючи «блискавку»).
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              Далі проведіть рукою вздовж заднього серединного меридіана від верхньої губи до куприка
              й у зворотному напрямі (розстібаючи і застібаючи «блискавку» ззаду).
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              Рухи вниз робити декілька разів. А закінчувати слід рухом угору.
            </Bullet>
          </Accordion>

          <Accordion title="Вправа «Ахілл»">
            <Paragraph>
              Легенько вщипніть обома руками ахіллові сухожилля,
              потім погладьте підколінні сухожилля декілька разів, ніби відводячи їх у сторони.
            </Paragraph>
          </Accordion>

          <Accordion title="Вправа «Вуха»">
            <Paragraph>
              М’яко розправте й розтягніть руками краєчки вух угору – назовні
              від верхньої частини до мочки – п’ять разів. Промасажуйте ділянку за вухом униз до ключиці –
              п’ять разів.
            </Paragraph>
          </Accordion>

          <Accordion title="Вправа «Постукування»">
            <Paragraph>
              Легким постукуванням у вигляді кругових рухів зліва направо
              промасажуйте ділянку вилочкової залози 10 – 20 разів.
            </Paragraph>
          </Accordion>

          <Accordion title="Вправа «Медуза»">
            <Paragraph>
              Сидячи на стільці, робіть плавні рухи руками, наслідуючи медузу, що плаває у воді.
            </Paragraph>
          </Accordion>

          <Accordion title="Вправа «Піджак на вішалці»">
            <Paragraph>
              Зняти напруження в м’язах можна не лише, лежачи або сидячи, а й стоячи чи навіть ідучи.
            </Paragraph>
            <Bullet symbol="•" style={styles.paragraph}>
              Для цього достатньо уявити себе «без кісток», зробленим ніби з гуми, або уявити своє тіло піджаком, що висить на вішалці.
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              Порухайте тілом, яке, наче вільно висить на хребті.
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              Відчуйте, як вільно гойдаються руки, плечі, тазовий пояс, коли ви рухаєте хребтом
            </Bullet>
            <Paragraph>
              Коли людина хвилюється, її дихання прискорюється і стає поверхневим.
              Щоб не допустити надмірної емоційної реакції під час стресових ситуацій, потрібно стежити за тим,
              щоб дихання залишилося глибоким і повільним.
            </Paragraph>
          </Accordion>

          <View style={styles.spacer} />
        </View>
      </ScrollView>
    </View>
  );
}
