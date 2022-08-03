import React from "react";
import { Text, View, Image, ScrollView } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Bullet from "/components/Bullet";
import Header from "/components/Header";
import resolveStyles from "/styles/subpage";

export default function Shvidkii({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveStyles(computeTheme(), computeFontSize);

  return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Швидкий рецепт психологічної стійкості</Text>

          <Text style={styles.header2}>Цей «рецепт» спрямований на формування внутрішньої опори через усвідомлення можливості вистояти перед випробуваннями життя.</Text>

          <Text style={styles.header2}>Інгредієнти:</Text>

          <Bullet symbol="1." style={styles.paragraph}>
            Цінності. Наші цінності є основою, у них будемо занурювати все інше; це те, що найголовніше, заради чого вся наша боротьба – любові, дітей, майбутнього і т.д. Цінності дають відчуття сенсу, Правди, незламну підтримку та відданість йти до кінця.
          </Bullet>

          <Bullet symbol="2." style={styles.paragraph}>
            Дія у надії. Наші дії – це основна частина. Ефективно, організовано діяти, зайнявши своє місце в Строю. Діяти з Надією, глибокими знаннями, що кожен крок наближає нас до неминучої Перемоги сил Світла. Збалансована дія: і для праці, і для відновлення.
          </Bullet>

          <Bullet symbol="3." style={styles.paragraph}>
            Мудрі, світлі думки. Додаємо при потребі нашу думки, насправді, їх треба не багато – але рівно стільки, щоби скерувати наші дії та мудро сприймати виклики. Надихаючі вислови, молитви, бойові мантри, поезія – різні форми, але наповнені тим самим – мудрістю й Світлом.
          </Bullet>

          <Text style={styles.header2}>Приготування:</Text>

          <Bullet symbol="•" style={styles.paragraph}>
            Змішуємо інгредієнти, даємо трішки настоятися, думкам і діям просочитися цінностями.
          </Bullet>

          <Bullet symbol="•." style={styles.paragraph}>
            Звіряємо смак – має бути сповнено відчуттям мужності та рішучості, містити аромат любові та глибокого миру. Може включати в залежності від місця і часу виготовлення також елементи тривоги, смутку, праведного гніву – але без гіркоти відчаю, присмаку паніки чи озлоблення. Часто містить відчуття радості та вдячності.
          </Bullet>

          <Bullet symbol="•" style={styles.paragraph}>
            Якщо щось смакує не так – коригуємо:
          </Bullet>

          <View style={styles.subBullet}>
            <Bullet symbol="-" style={styles.paragraph}>
              є відчай – додаємо надії
            </Bullet>
            <Bullet symbol="-" style={styles.paragraph}>
              паніку нейтралізуємо відвагою
            </Bullet>
            <Bullet symbol="-" style={styles.paragraph}>багато смутку і болю – потребуємо співчуття…
            </Bullet>
          </View>

          <Bullet symbol="•" style={styles.paragraph}>
            Вживаємо!
          </Bullet>

          <Text style={styles.header2}>Підказки:</Text>

          <Bullet symbol="•" style={styles.paragraph}>
            Найкраще готувати разом з іншими, тоді виходить дуже гарна композиція.
          </Bullet>

          <Bullet symbol="•" style={styles.paragraph}>
            Не бійтеся експериментувати – з досвідом буде кожен раз краще!
          </Bullet>

          <Bullet symbol="•" style={styles.paragraph}>
            Не забувайте теж пригощати тих, хто є поруч, та частуватися у них навзаєм – у кожного стійкість має свій присмак, свій відтінок.
          </Bullet>

          <Bullet symbol="•" style={styles.paragraph}>
            І пам’ятайте – це для усієї родини – і дітей, і дорослих!
          </Bullet>








          <View style={styles.spacer} />
        </View>
      </ScrollView>
    </View>
  );
}
