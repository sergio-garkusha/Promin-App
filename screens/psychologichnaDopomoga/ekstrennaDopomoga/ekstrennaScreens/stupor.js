import React from "react";
import { Text, View, Image, ScrollView } from "react-native";
import { ThemeContext } from "@components/ThemeProvider";
import Bullet from "@components/Bullet";
import Header from "@components/Header";
import resolveStyles from "@styles/subpage";
import head from "@assets/images/head.png";
import two from "@assets/images/twoGuys.png";
import thumbs from "@assets/images/thumbs.png";

export default function Stupor({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const styles = resolveStyles(computeTheme());
  return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Ступор</Text>

          <Text style={styles.header2}>В цій ситуації:</Text>

          <Bullet symbol="1." style={styles.paragraph}>
            Загніть постраждалій усі пальці на руках окрім великих. Великі
            пальці мають бути виставлені назовні.{" "}
          </Bullet>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image source={thumbs} style={{ width: 490, height: 242 }} />
          </View>

          <Bullet symbol="2." style={styles.paragraph}>
            Кінчиками великого та вказівного пальців массуйте постраждалій
            точки, розташовані на лобі, над очима рівно посередині між лінією
            росту волосся і бровами, чітко над зіницями.
          </Bullet>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image source={head} style={{ width: 286, height: 352 }} />
            <Image source={two} style={{ width: 352, height: 652 }} />
          </View>

          <Bullet symbol="3." style={styles.paragraph}>
            Долоню вільної руки покладіть на грудну клітину постраждалої.
            Підлаштуйте ритм свого дихання під дихання постраждалої.{" "}
          </Bullet>

          <Bullet symbol="4." style={styles.paragraph}>
            Людина що знаходиться в ступорі, може чути і бачити. Тому говоріть
            їй на вухо тихо, повільно і чітко те, що може викликати сильні
            емоції (краще негативні). Необхідно будь якими методами добитись
            реакції постраждалої, вивести її з оціпеніння.
          </Bullet>

          <View style={styles.spacer} />
        </View>
      </ScrollView>
    </View>
  );
}
