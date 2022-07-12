VnutrishniiSeif

import React from "react";
import { Text, View, ScrollView } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Bullet from "/components/Bullet";
import Header from "/components/Header";
import resolveStyles from "/styles/subpage";
import ListItem from "/components/ListItem";

export default function VnutrishniiSeif({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveStyles(computeTheme(), computeFontSize);
  const navigateAway = () => {// eslint-disable-next-line no-console console.log("navigation");
 };
  
 return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Вправа “Внутрішній сейф”</Text>

          <Text style={styles.header2}>Вправа «Внутрішній сейф» спрямована на залучення нашої уяви до «зберігання» небезпечних і обтяжливих спогадів на час неможливості інтегрування із залученням психотерапевта.
          </Text>
          <Text style={styles.header2}>Уявіть собі ящик для неприємних чи небезпечних спогадів. Це місце збереження може бути різного плану. Важливо, що це ящик. Він щільний і закривається на ключ. Це може бути сейф, надійний ящик, скриня. Це може бути також кімната, бункер чи магічне підземелля.
          Не поспішайте, знайдіть такий ящик і уявіть його собі… у якому оточені він повинен знаходитися?
          Подумайте, як функціонує механізм замка… Чи це ключ, чи комбінація цифр, чи, можливо, чарівні слова…?
          Якщо Ви чітко уявили місце збереження і замок, спробуйте разів відімкнути та замкнути.
          Тепер для перевірки уявіть собі, як Ви берети у руки фотографію, картинку, як Ви кладете цю картину у сейф. Візьміть нейтральну картинку, щось із щоденного життя…
          Спробуйте зробити те саме із неприємним спогадом… Як зображений цей спогад на картинці?... Уявіть його як фотографію… Ви берете фото і повторюєте процес …. І кладете його у сейф.
          Ви знову закриваєте сейф…
          А тепер поверніться у всіх своїх зосередженнях у приміщення.
          </Text>
          

          <View style={styles.spacer} />
        </View>
      </ScrollView>
    </View>
  );
}
