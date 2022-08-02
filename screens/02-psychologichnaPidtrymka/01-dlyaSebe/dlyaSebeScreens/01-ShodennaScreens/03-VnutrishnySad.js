import React from "react";
import { Text, View, ScrollView } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Bullet from "/components/Bullet";
import Header from "/components/Header";
import resolveStyles from "/styles/subpage";

export default function VnutrishniiSad({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveStyles(computeTheme(), computeFontSize);

  return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Вправа “Внутрішній сад”</Text>

          <Text style={styles.header2}>Вправа «Внутрішній сад» спрямована на залучення нашої уяви до збільшення внутрішнього ресурсу та почуття контролю.
          </Text>

          <Bullet symbol="•" style={styles.paragraph}>
            Займіть зручну розслаблену позу тіла… або сидячи, або лежачи.
          </Bullet>

          <Bullet symbol="•" style={styles.paragraph}>
            Уявіть собі кусочок недоторканої землі, на якому нічого не росте. Він може бути таким маленьким, як наперсток, чи таким великим, як парковий ландшафт. Як Вам більше підходить…
          </Bullet>

          <Bullet symbol="•" style={styles.paragraph}>
            Посадіть тепер у Вашому саду рослини … Ви можете облаштувати Ваш сад за Вашим бажанням. Все те, що Ви собі бажаєте, стає  частиною Вашого саду… Ви можете чаклувати силою своєї уяви …
          </Bullet>

          <Bullet symbol="•" style={styles.paragraph}>
            Якщо Ви зауважили, що Вам хочеться зробити щось інакше, то пам’ятайте – за садом є місце, куди Ви складаєте відходи. Все, що Вам не подобається, Ви можете віднести туди, щоб воно перетворилося у корисну землю. У будь-який час Ви можете зробити зміни …
          </Bullet>

          <Bullet symbol="•" style={styles.paragraph}>
            Якщо захочеться, можете провести зрошення саду, закласти ставок, викопати криницю чи струмок. Якщо захочеться, впорядкуйте місце для відпочинку…
          </Bullet>

          <Bullet symbol="•" style={styles.paragraph}>
            Можливо, Ви хочете мати у саду тварин… птахів…
          </Bullet>

          <Bullet symbol="•" style={styles.paragraph}>
            Якщо Ваш сад облаштований вже так, як Вам хочеться, то Ви можете десь сісти і насолодитися своїм садом…
          </Bullet>

          <Bullet symbol="•" style={styles.paragraph}>
            Подумайте, чи хочете Ви запросити когось у свій сад…
          </Bullet>

          <Bullet symbol="•" style={styles.paragraph}>
            Ви завжди можете повернутися до свого саду…
          </Bullet>

          <Bullet symbol="•" style={styles.paragraph}>
            Ви завжди можете його міняти за Вашим бажанням…
          </Bullet>

          <Bullet symbol="•" style={styles.paragraph}>
            Озирніться довкола себе… Відчуйте задоволення від Вашого створеного саду. Зосередьте  увагу на своєму диханні… Зробіть глибокий видих… та огляньте приміщення, в якому Ви знаходитесь.
          </Bullet>


          <View style={styles.spacer} />
        </View>
      </ScrollView>
    </View>
  );
}
