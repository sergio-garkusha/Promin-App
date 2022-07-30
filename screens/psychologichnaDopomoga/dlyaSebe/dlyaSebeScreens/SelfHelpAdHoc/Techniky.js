import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import Header from "/components/Header";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import ListItem from "/components/ListItem";
import Accordion from "/components/Accordion";
import Bullet from "/components/Bullet";

// const navigateAway = () => {
//   // eslint-disable-next-line no-console
//   console.log("navigation");
// };

export default function Techniky({ navigation }) {
  const navigateTo = (destination) => {
    navigation.push(destination);
  };

  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveLocalStyles(computeTheme(), computeFontSize);

  return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <View style={{ padding: 20 }}>
            <Text style={styles.title}>Техніки самодопомоги в моменті</Text>
            <Text style={styles.paragraph}>У важкі часи кожна людина потребує повернення до внутрішньої опори та
              саморозуміння. Пропонуємо техніки та методи саморозуміння та самодопомоги.</Text>

            <Accordion title="Щоденник думок">
              <Text style={styles.paragraph}>Прислухайтесь до себе, своїх думок, своїх почуттів, своїх відчуттів.
                Запишіть “почуте”:</Text>

              <Bullet symbol="•" style={styles.paragraph}>
                Гуляйте, коли безпечно </Bullet>

              <Bullet symbol="•" style={styles.paragraph}>
                Створюйте рутину </Bullet>

              <Bullet symbol="•" style={styles.paragraph}>
                Проводьте якомога більше часу з тими кого ви любите  </Bullet>

              <Bullet symbol="•" style={styles.paragraph}>
                Ліміт на новини </Bullet>

              <Bullet symbol="•" style={styles.paragraph}>
                Допомагайте тим, хто потребує (станьте важливим для когось) </Bullet>

              <Bullet symbol="•" style={styles.paragraph}>
                Тримайтеся подалі від катастрофічних думок (свідомо переключайте свої думки з катастрофічних),
                не розмовляйте з думками яких ви “не запрошували” </Bullet>

            </Accordion>

            <Accordion title="Техніка роботи з тривожними переживаннями">
              <Text style={styles.paragraph}>Відповідайте на питання, рухаючись за схемою:</Text>

              <Bullet symbol="1." style={styles.paragraph}>
                Про що саме я переживаю? </Bullet>

              <Bullet symbol="2." style={styles.paragraph}>
                Ця проблема наразі є актуальною та я маю можливість її вирішити?

                <Bullet symbol="•" style={styles.paragraph}>
                  якщо ТАК - розробити покроковий план вирішення проблеми </Bullet>

                <Bullet symbol="•" style={styles.paragraph}>
                  якщо НІ - перевести увагу та зробити корисну активність </Bullet>

              </Bullet>

              <Bullet symbol="3." style={styles.paragraph}>
                Який крок плану я зараз можу зробити?

                <Bullet symbol="•" style={styles.paragraph}>
                  якщо МОЖУ зробити крок з плану - виконайте цей крок та переведіть увагу на корисну активність </Bullet>

                <Bullet symbol="•" style={styles.paragraph}>
                  якщо НЕ МОЖУ зробити крок з плану - заплануйте коли і як Ви зможете його зробити та та переведіть
                  увагу на корисну активність </Bullet>

              </Bullet>

              <Text style={styles.paragraph}>Корисною активністю можуть бути будь-які рутинні та побутові справи.</Text>

            </Accordion>

            <Text style={styles.title}>Тілесні техніки</Text>

            <ListItem roundTop title="Відчуваю своє тіло" onPress={() => navigateTo("VidchuvaySvoeTilo")} />
            <ListItem title="Техніка білатеральної стабілізації “Обійми метелика” " onPress={() => navigateTo("ObiymyMetelyka")} />
            <ListItem title="Техніка білатеральної стабілізації – білатеральні поплескування" onPress={() => navigateTo("BilateraPopleskuvannya")} />
            <ListItem roundBottom title="Тілесна техніка “Десенситизація”" onPress={() => navigateTo("Desensetyzatsiya")} />

            <Text style={styles.title}>Дихальні техніки</Text>

            <ListItem title="Дихальна техніка стабілізації" onPress={() => navigateTo("Stabilizatsiya")} />
            <ListItem roundBottom title="Дихальна техніка “3-5-7”" onPress={() => navigateTo("TryPyatSim")} />

            <Text style={styles.title}>Техніки заземлення</Text>

            <ListItem roundTop title="Техніка заземлення за відчуттями ніг" onPress={() => navigateTo("ZaVidchuttyamNih")} />
            <ListItem title="Техніка заземлення в положенні лежачи" onPress={() => navigateTo("VPolozhenniLezhachy")} />
            <ListItem title="Техніка заземлення в русі" onPress={() => navigateTo("VRusy")} />
            <ListItem roundBottom title="Техніка заземлення з відтворенням ритму" onPress={() => navigateTo("ZVidtvorennyamRytmu")} />
            <ListItem roundBottom title="Техніка заземлення через активні дії" onPress={() => navigateTo("CherezAktyvnyDiyi")} />

          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const resolveLocalStyles = (theme, computeFS) => {
  const backgroundColor = theme === "dark" ? "#18203A" : "#F3F3F3";
  const color = theme === "dark" ? "#848EB0" : "#666";
  return StyleSheet.create({
    Button: {
      padding: 4,
    },
    container: {
      backgroundColor,
      flex: 1,
      justifyContent: "center",
      paddingTop: 110,
    },
    header: {
      fontSize: computeFS(22),
      fontWeight: "normal",
      margin: 5,
      textAlign: "center",
    },
    paragraph: {
      color,
      fontFamily: "Ubuntu",
      fontSize: computeFS(17),
      fontStyle: "normal",
      lineHeight: computeFS(24),
      marginBottom: 25,
      marginTop: 15,
      textAlign: "left",
    },
    roundImage: {
      borderRadius: 200 / 2,
      height: 200,
      width: 200,
    },
    title: {
      color,
      fontFamily: "Ubuntu_M",
      fontSize: computeFS(25),
      fontWeight: "normal",
      marginBottom: 15,
      marginTop: 40,
      textAlign: "left",
    },
  });
};
