import React from "react";
import { Text, View, ScrollView } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Accordion from "/components/Accordion";
import Header from "/components/Header";
import Paragraph from "/components/Paragraph";
import resolveStyles from "/styles/subpage";

export default function Chasti({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveStyles(computeTheme(), computeFontSize);
  return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Часті запитання</Text>

          <Paragraph style={{ paddingBottom: 20 }}>
            Батькам важливо в нестабільних умовах життя дати дитині відчуття безпеки.
            Для найменших його може забезпечити тілесний контакт. Старайтесь говорити якомога простіше. Чим менша за віком дитина,
            тим простіші та коротші слова та речення використовуйте.  Відповідайте лише на ті питання, які ставить дитина. Старайте говорити правду.
            Дозовано, спираючись на факти, що викликають позитив та надію на майбутнє.
          </Paragraph>

          <Accordion title="«Навіщо нам їхати з дому?»">
            <Text style={styles.paragraph}>
              «Ми їдемо, або опинитися далеко-далеко від небезпеки. Подорож може бути
              нелегкою. Зрештою ми повернемось (або  у нас буде новий дім, більший та кращій)»
            </Text>
            <Text style={styles.paragraph}>
              "Ми переїхали, тому що там небезпечно, і нам буде краще жити тут, де безпечніше"
            </Text>
            <Text style={styles.paragraph}>
              Іноді порушення звичного життя сприймається дітьми дуже болісно.
              Переїзд, особливо раптовий, може викликати надмірне
            </Text>
          </Accordion>

          <Accordion title="«Чому ти плачеш?»">
            <Text style={styles.paragraph}>
              «Я сумую, бо декому з вояків, які за нас б’ються, зараз боляче».
            </Text>
          </Accordion>

          <Accordion title="«Ми можемо вмерти?»">
            <Text style={styles.paragraph}>
              «Наша армія нас захищає. Воїни багато тренувалися
              і вони знають як боронити нашу країну. Вони роблять все, аби ми були в безпеці».
            </Text>
          </Accordion>

          <Accordion title="«Мій тато теж загине?»">
            <Text style={styles.paragraph}>
              «Ти хвилюєшся, адже тато зараз допомагає відвойовувати країну, так? Ми всі хвилюємось.  Але він не сам. Поруч з ним – багато чоловіків та жінок,
              чия робота – захищати одне одного. Ми сподіваємось, що він вже скоро повернеться. Але зараз має справи».
            </Text>
            <Text style={styles.paragraph}>
              На подібні питання відповідати важко. Діти дуже чутливі до неправди.
            </Text>
          </Accordion>

          <Accordion title="«Чому люди помирають?»">
            <Text style={styles.paragraph}>
              «Солдати помирають, бо їх поранив ворог. Люди воюють, аби захистити свою країну.
              На нас напали, бо хочуть захопити нашу землю».
            </Text>
          </Accordion>

          <View style={styles.spacer} />
        </View>
      </ScrollView>
    </View>
  );
}
