import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import Header from "/components/Header";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import ListItem from "/components/ListItem";
import Accordion from "/components/Accordion";
import Bullet from "/components/Bullet";
import Paragraph from "/components/Paragraph";
import resolveStyles from "/styles/subpage";
import { crossPlatformNav } from "/helpers/utils";

export default function Techniky({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveStyles(computeTheme(), computeFontSize);

  const goTo = (destination) => {
    crossPlatformNav(destination, navigation);
  };

  return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Техніки самодопомоги тут і зараз</Text>
          <Paragraph style={{ paddingBottom: 20 }}>
            У важкі часи кожна людина потребує повернення до внутрішньої опори та саморозуміння. Пропонуємо техніки та методи саморозуміння та самодопомоги.
          </Paragraph>

          <Accordion title="Щоденник думок">
            <Bullet symbol="•" style={styles.paragraph}>
              Прислухайтесь до себе, своїх думок, своїх почуттів, своїх відчуттів. Запишіть «почуте».
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              Гуляйте, коли безпечно.
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              Створюйте рутину.
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              Проводьте якомога більше часу з тими, кого ви любите.
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              Ліміт на новини.
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              Допомагайте тим, хто потребує (станьте важливим для когось).
            </Bullet>
            <Bullet symbol="•" style={styles.paragraph}>
              Тримайтеся подалі від катастрофічних думок (свідомо переключайте свої думки з катастрофічних),
              не розмовляйте з думками яких ви «не запрошували».
            </Bullet>
          </Accordion>

          <Accordion title="Робота з тривожними переживаннями">
            <Text style={styles.paragraph}>Відповідайте на питання, рухаючись за схемою:</Text>
            <Bullet symbol="1." style={styles.paragraph}>
              Про що саме я переживаю?
            </Bullet>

            <Bullet symbol="2." style={styles.paragraph}>
              Ця проблема наразі є актуальною та я маю можливість її вирішити?
            </Bullet>
            <View style={styles.subBullet}>
              <Bullet symbol="•" style={styles.paragraph}>
                якщо ТАК - розробити покроковий план вирішення проблеми;
              </Bullet>

              <Bullet symbol="•" style={styles.paragraph}>
                якщо НІ - перевести увагу та зробити корисну активність.
              </Bullet>
            </View>

            <Bullet symbol="3." style={styles.paragraph}>
              Який крок плану я зараз можу зробити?
            </Bullet>
            <View style={styles.subBullet}>
              <Bullet symbol="•" style={styles.paragraph}>
                якщо МОЖЕТЕ зробити крок з плану - виконайте цей крок та переведіть увагу на корисну активність;
              </Bullet>

              <Bullet symbol="•" style={styles.paragraph}>
                якщо НЕ МОЖЕТЕ зробити крок з плану - заплануйте коли і як Ви зможете його зробити та переведіть увагу на корисну активність.
              </Bullet>
            </View>

            <Text style={styles.paragraph}>
              Корисною активністю можуть бути будь-які рутинні та побутові справи.
            </Text>
          </Accordion>

          <Text style={styles.sectionHeader}>Тілесні техніки</Text>
          <ListItem
            roundTop
            title="Відчуваю своє тіло"
            onPress={() => goTo("Дорослим/Техніки самодопомоги тут і зараз/Відчуваю своє тіло")}
          />
          <ListItem
            title="Техніка «Обійми метелика»"
            onPress={() => goTo("Дорослим/Техніки самодопомоги тут і зараз/Техніка «Обійми метелика»")}
          />
          <ListItem
            title="Білатеральні поплескування"
            onPress={() => goTo("Дорослим/Техніки самодопомоги тут і зараз/Білатеральні поплескування")}
          />
          <ListItem
            title="Тілесна техніка для зниження напруги"
            onPress={() => goTo("Дорослим/Техніки самодопомоги тут і зараз/Тілесна техніка для зниження напруги")}
            roundBottom
          />

          <Text style={styles.sectionHeader}>Дихальні техніки</Text>
          <ListItem
            roundTop
            title="Дихальна техніка стабілізації"
            onPress={() => goTo("Дорослим/Техніки самодопомоги тут і зараз/Дихальна техніка стабілізації")}
          />
          <ListItem
            title="Дихальна техніка «3-5-7»"
            onPress={() => goTo("Дорослим/Техніки самодопомоги тут і зараз/Дихальна техніка «3-5-7»")}
            roundBottom
          />

          <Text style={styles.sectionHeader}>Техніки заземлення</Text>
          <ListItem
            roundTop
            title="Заземлення за відчуттями ніг"
            onPress={() => goTo("Дорослим/Техніки самодопомоги тут і зараз/Заземлення за відчуттями ніг")}
          />
          <ListItem
            title="Заземлення в положенні лежачи"
            onPress={() => goTo("Дорослим/Техніки самодопомоги тут і зараз/Заземлення в положенні лежачи")}
          />
          <ListItem
            title="Заземлення в русі"
            onPress={() => goTo("Дорослим/Техніки самодопомоги тут і зараз/Заземлення в русі")}
          />
          <ListItem
            title="Заземлення з відтворенням ритму"
            onPress={() => goTo("Дорослим/Техніки самодопомоги тут і зараз/Заземлення з відтворенням ритму")}
          />
          <ListItem
            title="Заземлення через активні дії"
            onPress={() => goTo("Дорослим/Техніки самодопомоги тут і зараз/Заземлення через активні дії")}
            roundBottom
          />
        </View>

        <View style={styles.spacer} />
      </ScrollView>
    </View>
  );
}
