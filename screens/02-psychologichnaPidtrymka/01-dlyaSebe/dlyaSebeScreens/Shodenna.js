import React from "react";
import { Text, View, ScrollView } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Bullet from "/components/Bullet";
import Paragraph from "/components/Paragraph";
import Header from "/components/Header";
import resolveStyles from "/styles/subpage";
import ListItem from "/components/ListItem";
import Accordion from "/components/Accordion";

export default function Shodenna({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveStyles(computeTheme(), computeFontSize);

  return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Щоденна турбота про себе</Text>
          <Paragraph>
            Наша психіка сильна та спроможна витримати багато викликів.
            Однак, щоденно зустрічаючись з небезпекою та невизначеністю важливо мати та укріплювати внутрішню опору – нашу емоційну стійкість.
          </Paragraph>
          <Paragraph>
            Жити звичним життям неможливо, а з новим нічого не зрозуміло. Що робити, коли неможливо будувати плани на майбутнє? Як стабілізуватися в стані повної невизначеності Невизначеність - великий стрес для психіки. Всім нам потрібно адаптуватися до нових умов життя. Що може в цьому допомогти?
          </Paragraph>
          <Paragraph style={{ paddingBottom: 20 }}>
            Пропонуємо техніки та рекомендації, які направлені на підтримку в цей непростий, для кожного з нас, період.
          </Paragraph>

          <Accordion title="Відмежуйте продуктивні дії від непродуктивних">
            <Paragraph>Мова тут не про «культ продуктивності», а про те, що допомагає (або не допомагає) саме вам проживати ситуацію.</Paragraph>
            <Paragraph>Наприклад, телефонна розмова з тією людиною, спілкування з якою вас надихає - продуктивна дія.</Paragraph>
            <Paragraph>Раз за разом прокручувати в голові найгірші сценарії з можливих - непродуктивна.
              Неможливо завжди діяти раціонально, але спробуйте хоча б прагнути цього.</Paragraph>
          </Accordion>

          <Accordion title="Продовжуйте щоденну рутину">
            <Paragraph>Робота, домашні справи, турбота про близьких - побутові дії допомагають психіці адаптуватися до реальності, яка змінилась та змінюється далі.</Paragraph>
            <Paragraph>На ці звичні дії можна спертися, навіть коли здається, що навколо суцільний хаос.</Paragraph>
            <Paragraph>Навіть коли хочеть цілий день лежати - постарайтесь все ж піднімати себе і робити хоча б мінімальні дії.</Paragraph>
          </Accordion>

          <Accordion title="Практикуйте прийняття">
            <Paragraph>Прийняття не дорівнює смиренність.</Paragraph>
            <Paragraph>Це усвідомлення того, в якій ситуації ми знаходимось прямо зараз, та що відчуваємо з цього приводу.
              Воно рятує від залежностей, заперечення та витіснення емоцій.</Paragraph>
            <Paragraph>Саме з цієї точки прийняття краще всього приймати рішення та робити дії для власного майбутнього. Так, зараз не просто раціоналізувати кожну власну думку, особливо тривожну. Реальні причини для тривоги є у кожного. Та все ж, не кожна думка, яка є, є реалістичною.</Paragraph>
            <Paragraph>Якщо ви починаєте думати про те, що викликає панічний настрій - роздивіться цю думку з усіх боків та піддайте її критиці.</Paragraph>
            <Paragraph>Якщо не вдається - обговоріть її з людиною, котрій довіряєте, тою яка зараз більш спокійна.</Paragraph>
          </Accordion>

          <Accordion title="Шукайте сенс">
            <Paragraph>«Але в кожному випадку мужність жити або втома від життя залежала виключно від того, чи мала людина віру в сенс життя в своєму житті».</Paragraph>
            <Paragraph>Це слова Віктора Франкла - психолога, який пройшов через концтабори під час Другої Світової війни.</Paragraph>
            <Paragraph>Мета, якої ви прагнете надає сенсу вашому життю та дає сили. І це те, на що можна спертися в найважчі часи.</Paragraph>
          </Accordion>

          <Accordion title="Антистресові дії, доступні щодня">
            <Bullet symbol="•" style={styles.paragraph}>
              Гуляйте, коли безпечно
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              Створюйте рутину
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              Проводьте якомога більше часу з тими кого ви любите
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              Ліміт на новини
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              Допомагайте тим, хто потребує (станьте важливим для когось)
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              Свідомо переключайте свої думки з катастрофічних
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              Не розмовляйте з думками яких ви “не запрошували”
            </Bullet>
          </Accordion>

          <Text style={styles.subsectionTitle}>Практичні вправи</Text>
          <ListItem
            roundTop
            title="Швидкий рецепт психологічної стійкості"
            onPress={() => navigation.push("Shvydkiy")}
          />
          <ListItem
            title="Вправа “Внутрішній сад”"
            onPress={() => navigation.push("VnutrishnySad")}
          />
          <ListItem
            title="Вправа “Спокійне місце”"
            onPress={() => navigation.push("Spokiyne")}
          />
          <ListItem
            title="Вправа “Внутрішній сейф”"
            onPress={() => navigation.push("VnutrishnySeif")}
          />
          <ListItem
            title="Вправа “Чорно-біла фотографія”"
            onPress={() => navigation.push("ChornoBileFoto")}
          />
          <ListItem
            title="Вправа “Чорно-білий кадр”"
            onPress={() => navigation.push("ChornoBilyCadr")}
          />
          <ListItem
            title="Техніка самостійних обіймів"
            onPress={() => navigation.push("Tehnika")}
          />
          <ListItem
            title="Вправа “Квітка самопочуття”"
            onPress={() => navigation.push("Kvitka")}
          />
          <ListItem
            roundBottom title="Вправа “Я маю, я є, я можу і я буду”"
            onPress={() => navigation.push("YaMaiu")}
          />

          <View style={styles.spacer} />
        </View>
      </ScrollView >
    </View >
  );
}
