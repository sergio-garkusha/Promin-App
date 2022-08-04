import React from "react";
import { Text, View, ScrollView } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Header from "/components/Header";
import Bullet from "/components/Bullet";
import resolveStyles from "/styles/subpage";

export default function Spokiyne({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveStyles(computeTheme(), computeFontSize);


  return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Вправа “Спокійне місце””</Text>

          <Text style={styles.header2}>Вправа «Спокійне місце» спрямована на залучення нашої уяви до відновлення почуття спокою та впевненості.
          </Text>
          <Bullet symbol="•" style={styles.paragraph}>
            Займіть зручну розслаблену позу тіла: або сидячи, або лежачи.
          </Bullet>
          <Bullet symbol="•" style={styles.paragraph}>
            Прислухайтесь до свого дихання. Прислухайтесь до свого тіла. Пошукайте внутрішнє місце, в якому Ви можете відчути себе впевнено та спокійно. Нехай у Вашій уяві виникають образи та думки про таке місце. Надайте місцю спокою та впевненості межі. Ви можете обирати, якими будуть ці межі. Лише Вирішуєте хто та коли може перетинати межі місця спокою та впевненості. Це місце відчуваєте лише Ви, лише Ви можете відвідувати його та залишати в ньому стільки, скільки потрібно саме Вам. За Вашим бажанням, Ви можете запросити в своє місце спокою та впевненості потрібних Вам істот… людей… реальних або нереальних.
          </Bullet>
          <Bullet symbol="•" style={styles.paragraph}>
            Не поспішайте… Шукайте та деталізуйте місце спокою та впевненості.
            Якщо Вам зустрілися картинки та образи, якимось чином для Вас не приємні – йдіть далі, залишаючи їх позаду та без Вашої уваги.
          </Bullet>
          <Bullet symbol="•" style={styles.paragraph}>
            Усвідомте, що для пошуку та облаштування Вашого внутрішнього місця спокою та впевненості у Вашому розпорядженні всі можливі засоби, так, ніби Ви можете чаклувати…
          </Bullet>
          <Bullet symbol="•" style={styles.paragraph}>
            Опишіть Ваше місце спокою та впевненості. Переконайтесь, що саме в цьому місці Ви відчуваєте спокій, впевненість, захист, внутрішню силу…
          </Bullet>
          <Bullet symbol="•" style={styles.paragraph}>
            Подумайте, як Вам буде в цьому місці зручніше… Облаштуйте це місце так, що це стало можливим…
          </Bullet>
          <Bullet symbol="•" style={styles.paragraph}>
            Після того як Ви облаштували своє внутрішнє місце спокою та впевненості, почуваєте себе в ньому добре… зверніть увагу… які відчуття зараз у Вашому тілі… з якими почуттями пов’язано перебування там… що Ви бачите… чи Вам зараз приємно… якщо неприємно – змініть все, що необхідно для приємних відчуттів… що Ви чуєте… чи це приємно… якщо ні – змініть це… який там запах… які відчуття є на шкірі… що Ви відчуваєте у м’язах… Прислухайтесь до всіх відчуттів… наскільки вони приємні у місці спокою та впевненості… Зосереджуйтесь на Ваших приємних відчуттях у внутрішньому спокійному місці потягом хвилин 2-х…
          </Bullet>
          <Bullet symbol="•" style={styles.paragraph}>
            Завжди, коли Вам захочеться – Ви можете повертатися у Ваше внутрішнє місце спокою…  Ви можете придумати собі знак, з допомогою якого Ви можете швидше потрапити до свого внутрішнього місця… наприклад, скласти руки особливим способом або підняти палець… Цей знак – жест Ви можете робити, коли потребуєте внутрішнього спокою та впевненості… Ви можете зараз спробувати цей знак – жест, щоб Ваше тіло швидше згадало добрі почуття в цьому місці…
          </Bullet>
          <Bullet symbol="•" style={styles.paragraph}>
            Відчуйте ще раз спокій та впевненість… І поверніться у приміщення…
          </Bullet>

          <View style={styles.spacer} />
        </View >
      </ScrollView >
    </View >
  );
}
