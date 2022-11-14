import React from "react";
import { Text, View, ScrollView } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Bullet from "/components/Bullet";
import Header from "/components/Header";
import resolveStyles from "/styles/subpage";

export default function VnutrishnySeif({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveStyles(computeTheme(), computeFontSize);
  return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Вправа «Внутрішній сейф»</Text>

          <Text style={styles.Subtitle}>Вправа  спрямована на залучення нашої уяви до «зберігання» небезпечних і обтяжливих спогадів на час неможливості звернення до психотерапевта.
          </Text>

          <Bullet symbol="•" style={styles.paragraph}>
            Уявіть собі ящик для неприємних чи небезпечних спогадів. Це місце збереження може бути різного плану. Важливо, що це ящик. Він щільний і закривається на ключ. Це може бути сейф, надійний ящик, скриня. Це може бути також кімната, бункер чи магічне підземелля.
          </Bullet>
          <Bullet symbol="•" style={styles.paragraph}>
            Не поспішайте, знайдіть такий ящик, і уявіть його собі… у якому оточені він повинен знаходитися?
            Подумайте, як функціонує механізм замка… Чи це ключ, чи комбінація цифр, чи, можливо, чарівні слова?
          </Bullet>
          <Bullet symbol="•" style={styles.paragraph}>
            Якщо Ви чітко уявили місце збереження і замок, спробуйте декілька разів відімкнути та замкнути.
            Тепер для перевірки уявіть собі, як Ви берете в руки фотографію, малюнок, як Ви кладете цю його у сейф. Візьміть нейтральний малюнок, щось із щоденного життя.
          </Bullet>
          <Bullet symbol="•" style={styles.paragraph}>
            Спробуйте зробити те саме із неприємним спогадом. Як зображений цей спогад на малюнку? Уявіть його як фотографію… Ви берете фото і повторюєте процес… І кладете його у сейф.
          </Bullet>
          <Bullet symbol="•" style={styles.paragraph}>
            Ви знову закриваєте сейф.
          </Bullet>
          <Bullet symbol="•" style={styles.paragraph}>
            А тепер поверніться у всіх своїх зосередженнях у приміщення, де Ви реально знаходитесь.
          </Bullet>

          <View style={styles.spacer} />
        </View>
      </ScrollView>
    </View>
  );
}
