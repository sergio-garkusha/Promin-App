Tehnika

import React from "react";
import { Text, View, ScrollView } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Bullet from "/components/Bullet";
import Header from "/components/Header";
import resolveStyles from "/styles/subpage";
import ListItem from "/components/ListItem";

export default function Tehnika({ navigation }) {
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
          <Text style={styles.header}>Техніка самостійних обіймів</Text>

          <Text style={styles.header2}>Якщо вам потрібно зняти емоційний стрес, витратіть кілька хвилин, щоб зібратися і обійміть себе. Робіть це до або під час надзвичайної ситуації, виконуйте ці вправи, щоб допомогти собі бути готовим.
          </Text>
          
          <Bullet symbol="•" style={styles.paragraph}>
          Встаньте або сядьте прямо, міцно поставивте ноги на землю
          </Bullet>

          <Bullet symbol="•" style={styles.paragraph}>
          Зверніть увагу на Ваші ноги на які Ви опираєтесь
          </Bullet>

          <Bullet symbol="•" style={styles.paragraph}>
          Зробіть глибокий вдих і видихніть, повільно і свідомо
          </Bullet>

          <Bullet symbol="•" style={styles.paragraph}>
          Помістіть праву руку долонею всередину під ліву пахвн і ліву руку на плече нижче плеча
          </Bullet>

          <Bullet symbol="•" style={styles.paragraph}>
          Натискайте на тіло обома руками, робіть так декілька секунд, міцно обіймаючи себе
          </Bullet>

          <Bullet symbol="•" style={styles.paragraph}>
          Відпустіть на п’ять секунд і повторіть ще двічі
          </Bullet>

          <Bullet symbol="•" style={styles.paragraph}>
          Опустіть руки вздовж тіла і рухайтеся далі як у повсякденному житті
          </Bullet>
          

          <View style={styles.spacer} />
        </View>
      </ScrollView>
    </View>
  );
}
