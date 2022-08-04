import React from "react";
import { Text, View, ScrollView } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Bullet from "/components/Bullet";
import Header from "/components/Header";
import resolveStyles from "/styles/subpage";
import Accordion from "/components/Accordion";

export default function Evakuachiya({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveStyles(computeTheme(), computeFontSize);
  return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Евакуація</Text>

          <Accordion title="Коли відбувається евакуація">
            <Text style={styles.paragraph}>
              Евакуація населення проводиться у разі виникнення безпосередньої
              загрози життю та заподіяння шкоди здоров’ю людини.
            </Text>
            <Text style={styles.paragraph}>
              Рішення про проведення евакуації приймає керівник органу влади
              (голова обласної або районної адміністрації, мер міста, голова сільради), підприємства, установи,
              організації.
            </Text>
            <Text style={styles.paragraph}>
              У невідкладних випадках рішення приймає керівник робіт з ліквідації
              наслідків надзвичайної ситуації, а в разі його відсутності – керівник  аварійно – рятувальної служби,
              який першим прибув у зону надзвичайної ситуації.
            </Text>
          </Accordion>

          <Accordion title="Оповіщення здійснюється шляхом">
            <Bullet symbol="•" style={styles.paragraph}>
              передачі через місцеві канали радіо та телебачення;
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              через системи зв’язку підприємств, установ, організацій;
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              застосуванням гучномовців патрульних автомобілів міліції;
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              обходу будинків та квартир співробітниками ЖЕО та МВС;
            </Bullet>
          </Accordion>

          <Accordion title="Підготовка до евакуації">
            <Text style={styles.paragraph}>Зберіть необхідні речі:</Text>
            <Bullet symbol="•" style={styles.paragraph}>
              Одяг, взуття, запасна білизна
              (бажано мати плащ та взуття на гумовій основі), предмети гігієни (мило, зубна паста, рушник);
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              Підготуйте медичну аптечку, засоби індивідуального захисту
              (обов’язково засоби захисту органів дихання);
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              Вказане майно, особисті документи і гроші;
            </Bullet>

            <Text style={styles.paragraph}>
              Підготуйте продукти харчування та води із розрахунку до 3х діб
              (хліб, печиво, консерви), вода 2л на людину/добу.
            </Text>
            <Text style={styles.paragraph}>
              Усі речі і продукти харчування повинні бути запаковані у рюкзаки, мішки,
              сумки. При розрахунку кількості речей і продуктів враховувати, що людині самій доведеться їх нести
              (при евакуації транспортом загальна маса багажу на одну дорослу
              людину не повинна перевищувати 50 кг).
            </Text>
            <Text style={styles.paragraph}>
              Безпосередньо перед виходом із будинку чи квартири треба:
            </Text>

            <Bullet symbol="•" style={styles.paragraph}>
              відключити газ
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              відключити електроживлення,
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              перекрити водопостачання
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              закрити вікна і двері.
            </Bullet>

            <Text style={styles.paragraph}>
              Після здійснення цих заходів у встановлений час прибути на
              вказаний у повідомленні збірний пункт з евакуації
            </Text>
          </Accordion>

          <View style={styles.spacer} />
        </View>
      </ScrollView>
    </View>
  );
}
