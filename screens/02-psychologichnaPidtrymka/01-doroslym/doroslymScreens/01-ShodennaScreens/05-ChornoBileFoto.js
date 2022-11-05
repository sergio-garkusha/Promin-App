import React from "react";
import { Text, View, ScrollView } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Bullet from "/components/Bullet";
import Header from "/components/Header";
import resolveStyles from "/styles/subpage";

export default function CheroBilaFoto({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveStyles(computeTheme(), computeFontSize);
  return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Вправа «Чорно-біла фотографія»</Text>

          <Text style={styles.header2}>
            Ця вправа спрямована на зменшення інтенсивності впливу травматичних спогадів та на те, щоб локалізувати їх.
          </Text>

          <Bullet symbol="•" style={styles.paragraph}>
            Уявіть стіну, на якій наклеєні фотографії з різних моментів Вашого життя.
          </Bullet>
          <Bullet symbol="•" style={styles.paragraph}>
            Ось Ви йдете в школу, ось Ваше перше кохання, ось Ви заробили перші гроші, ось трапляється кошмар,
            який Ви намагаєтеся забути... Всі значущі і навіть деякі рядові моменти Вашого життя повинні бути на цій стіні.
          </Bullet>
          <Bullet symbol="•" style={styles.paragraph}>
            Уявіть всі фотографії кольоровими, лише негативну подію – чорно-білою. Відійдіть та подивіться на стіну Вашого життя збоку.
          </Bullet>
          <Bullet symbol="•" style={styles.paragraph}>
            Побачте, як багато кольору на ній і як, у масштабі, мала ця чорно-біла фотографія.
          </Bullet>
          <Bullet symbol="•" style={styles.paragraph}>
            Тепер подумки утисніть її до розмірів 3 на 4 см. Далі, продовжуйте "клеїти" фотографії на стіну Вашого життя. Клейте майбутнє.
          </Bullet>
          <Bullet symbol="•" style={styles.paragraph}>
            Продовжуйте заповнювати стіну кольорами. Будь-які Ваші мрії, приємні моменти, відпустки, подорожі…
            Зображення, в яких Ви допомагаєте іншим людям... Картинки, де люди захоплюються Вами. В результаті,
            чорно-біле фото буде з усіх боків оточене кольоровими фотографіями, які йдуть від нього далеко в сторони.
          </Bullet>
          <Bullet symbol="•" style={styles.paragraph}>
            Ви дивитеся на стіну і розумієте, що подія, яку Ви хочете забути, це лише поодинока подія. Вона має свої межі, вона локальна і тепер займає лише мізерну частину Вашої стіни життя. Це чорно-біле фото – це не Ваше життя, а лише момент, який минув.
          </Bullet>
          <Bullet symbol="•" style={styles.paragraph}>
            В результаті цієї вправи негативні спогади були локалізовані, і навколо них з'явилося життя, повне щастя та подій.
          </Bullet>
          <Bullet symbol="•" style={styles.paragraph}>
            Ви не забули минуле, ви його обмежили, і воно більше не поширюється на сьогодення та майбутнє.
          </Bullet>

          <View style={styles.spacer} />
        </View>
      </ScrollView >
    </View >
  );
}
