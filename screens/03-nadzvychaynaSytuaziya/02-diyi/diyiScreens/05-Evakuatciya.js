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
              Рішення про проведення евакуації приймає керівник органу державної влади (голова обласної або районної адміністрації / військової адміністрації, мер міста, голова сільради), підприємства, установи, організації.
            </Text>
            <Text style={styles.paragraph}>
              У невідкладних випадках рішення приймає керівник робіт з ліквідації
              наслідків надзвичайної ситуації, а в разі його відсутності – керівник аварійно-рятувальної служби, який першим прибув у зону надзвичайної ситуації.
            </Text>
          </Accordion>

          <Accordion title="Як здійснюється сповіщення">
            <Bullet symbol="•" style={styles.paragraph}>
              шляхом передачі через місцеві канали інтернет, радіо та телебачення.
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              через системи зв'язку підприємств, установ, організацій.
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              із застосуванням гучномовців патрульних автомобілів поліції.
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              шляхом обходу будинків та квартир співробітниками ЖЕО та МВС.
            </Bullet>
          </Accordion>

          <Accordion title="Підготовка до евакуації">
            <Text style={styles.paragraph}>Зберіть необхідні речі:</Text>
            <Bullet symbol="•" style={styles.paragraph}>
              одяг, взуття, запасну білизну (бажано мати плащ та взуття на гумовій основі), предмети гігієни (мило, зубна паста, рушник).
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              медичну аптечку, засоби індивідуального захисту
              (обов’язково засоби захисту органів дихання).
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              особисті документи і гроші.
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              телефон, смартфон, планшет, зарядний пристрій, павербанк.
            </Bullet>

            <Text style={styles.paragraph}>
              Підготуйте продукти харчування та воду із розрахунку до трьох діб
              (хліб, печиво, консерви), вода - 2 л на людину / на добу.
            </Text>
            <Text style={styles.paragraph}>
              Усі речі та продукти харчування повинні бути запаковані у рюкзаки, мішки,
              сумки. При розрахунку кількості речей і продуктів враховувати, що людині самій доведеться їх нести
              (при евакуації транспортом загальна маса багажу на одну дорослу
              людину не повинна перевищувати 50 кг).
            </Text>
            <Text style={styles.paragraph}>
              Безпосередньо перед виходом із будинку чи квартири треба:
            </Text>

            <Bullet symbol="•" style={styles.paragraph}>
              відключити газ;
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              відключити електроживлення;
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              перекрити водопостачання;
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              закрити вікна і двері.
            </Bullet>

            <Text style={styles.paragraph}>
              Після здійснення цих заходів у встановлений час прибути на вказаний у повідомленні збірний пункт з евакуації.
            </Text>
          </Accordion>

          <View style={styles.spacer} />
        </View>
      </ScrollView>
    </View>
  );
}
