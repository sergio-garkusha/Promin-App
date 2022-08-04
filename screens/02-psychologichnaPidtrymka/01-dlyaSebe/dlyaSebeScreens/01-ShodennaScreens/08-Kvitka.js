import React from "react";
import { Text, View, ScrollView } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Bullet from "/components/Bullet";
import Header from "/components/Header";
import resolveStyles from "/styles/subpage";

export default function Kvitka({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveStyles(computeTheme(), computeFontSize);
  return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Вправа “Квітка самопочуття”</Text>

          <Text style={styles.header2}>Знати про свої внутрішні та зовнішні ресурси дуже важливо, щоб мати можливість використовувати їх, коли це необхідно.
          </Text>

          <Text style={styles.header2}>Зіштовхнувшись із труднощами, навчіться негайно думати про те, який внутрішній чи зовнішній ресурс може допомогти Вам бути більш стійкими.
          </Text>

          <Bullet symbol="•" style={styles.paragraph}>
            Створіть карту власних ресурсів добробуту, намалювавши квітку з сімома пелюстками.
          </Bullet>

          <Bullet symbol="•" style={styles.paragraph}>
            Розфарбуйте кожну пелюстку квітки у свій улюблений колір.
          </Bullet>

          <Bullet symbol="•" style={styles.paragraph}>
            Далі позначте кожну пелюстку такими напрямками:
          </Bullet>
          <View style={styles.subBullet}>
            <Bullet symbol="-" style={styles.paragraph}>Матеріальний</Bullet>
            <Bullet symbol="-" style={styles.paragraph}>Соціальний</Bullet>
            <Bullet symbol="-" style={styles.paragraph}>Духовний</Bullet>
            <Bullet symbol="-" style={styles.paragraph}>Культурний</Bullet>
            <Bullet symbol="-" style={styles.paragraph}>Розумовий</Bullet>
            <Bullet symbol="-" style={styles.paragraph}>Емоційний</Bullet>
            <Bullet symbol="-" style={styles.paragraph}>Біологічний</Bullet>
          </View>
          <Bullet symbol="•" style={styles.paragraph}>
            Кожна пелюстка квітки представляє одну із областей Вашого особистого благополуччя. Вони представляють ті аспекти життя, де ми повинні відчувати себе здоровими та задоволеними.
          </Bullet>

          <Bullet symbol="•" style={styles.paragraph}>
            Поміркуйте та запишіть приклади речей, людей або діяльності в кожному із семи напрямків, які дають Вам позитивне відчуття здорового та гарного самопочуття. Це квітка Вашого власного благополуччя.
          </Bullet>


          <View style={styles.spacer} />
        </View>
      </ScrollView>
    </View>
  );
}
