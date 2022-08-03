import React from "react";
import { Text, View, ScrollView } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Bullet from "/components/Bullet";
import Header from "/components/Header";
import resolveStyles from "/styles/subpage";
import ListItem from "/components/ListItem";

export default function CheroBilaFoto({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveStyles(computeTheme(), computeFontSize);

  return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Вправа “Чорно-біла фотографія”</Text>

          <Text style={styles.header2}>Ця вправа направлена на зменшення інтенсивності впливу травматичних спогадів та локалізувати їх.
          </Text>
          <Text style={styles.header2}>Уявіть стіну, на якій наклеєні фотографії з різних моментів Вашого життя.
            Ось Ви йдете в школу, ось Ваше перше кохання, ось Ви заробили перші гроші, ось трапляється кошмар,
            який Ви намагаєтеся забути ... Всі значущі і навіть деякі рядові моменти Вашого життя повинні бути на цій стіні.
            Уявіть всі фотографії кольоровими, лише негативна подія – чорно-білою. Відійдіть та подивіться на стіну Вашого життя збоку.
            Побачте, як багато кольору на ній і як, у масштабі, мала ця чорно-біла фотографія.
            Тепер подумки утисніть її до розмірів 3 на 4 см. Далі, продовжуйте "клеїти" фотографії на стіну Вашого життя. Клейте майбутнє.
            Продовжуйте заповнювати стіну кольорами. Будь-які Ваші мрії, приємні моменти, відпустки, подорожі…
            Зображення, в яких Ви допомагаєте іншим людям... Картинки, де люди захоплюються Вами. В результаті,
            чорно-біле фото буде з усіх боків оточене кольоровими фотографіями, які йдуть від нього далеко в сторони.
            Ви дивитеся на стіну і розумієте, що подія, яку Ви хочете забути, це лише поодинока подія. Вона має свої межі,
            вона локальна і тепер займає лише мізерну частину Вашої стіни життя. Це чорно-біле фото - це не Ваше життя.
            В результаті цієї вправи негативні спогади були локалізовані, і навколо них з'явилося життя повне щастя та подій.
            Ви не забули минуле, ви його обмежили, і воно більше не поширюється на сьогодення та майбутнє.
          </Text>


          <View style={styles.spacer} />
        </View>
      </ScrollView>
    </View>
  );
}
