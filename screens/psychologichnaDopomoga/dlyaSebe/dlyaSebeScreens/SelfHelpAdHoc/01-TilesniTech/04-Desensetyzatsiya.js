import React from "react";
import { Text, View, ScrollView } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Bullet from "/components/Bullet";
import Header from "/components/Header";
import resolveStyles from "/styles/subpage";
// VidchuvaySvoeTilo
export default function ContentPage({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveStyles(computeTheme(), computeFontSize);

  return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Тілесна техніка “Десенситизація”</Text>
          <Bullet symbol="•" style={styles.paragraph}>
            Зосередити увагу на м’язах рук, руки витягнути вперед, максимально напружити м’язи рук і зробити вдих, утримувати напруження м’язів рук якомога довше, зробити видох і розслабити м’язи
          </Bullet>
          <Bullet symbol="•" style={styles.paragraph}>
            Зосередити увагу на м’язах тулуба, максимально напружити м’язи спини, грудей, животу, утримувати напруження м’язів тулуба якомога довше, зробити видох і розслабити м’язи
          </Bullet>
          <Bullet symbol="•" style={styles.paragraph}>
            Зосередити увагу на м’язах ніг, ноги при цьому витягніть вперед і поставте на п’яткову кістку, максимально напружте м’язи ніг (від сідниць до стоп), утримуйте напруження м’язи ніг якомога довше, зробити видох і розслабити м’язи
          </Bullet>
          <Bullet symbol="•" style={styles.paragraph}>
            Зосередити увагу на м’язах обличчя і шиї, максимально напружити м’язи і утримуйте напруження довше, зробити видох і розслабити м’язи
          </Bullet>
          <Bullet symbol="•" style={styles.paragraph}>
            Зосередити увагу на всіх м’язах тіла, руки і ноги витягнути вперед, максимально напружити м’язи всього тіла і водночас зробити вдих, утримувати напруження м’язів тіла якомога довше, зробити видох і розслабити м’язи.
          </Bullet>
          <View style={styles.spacer} />
        </View>
      </ScrollView>
    </View>
  );
}
