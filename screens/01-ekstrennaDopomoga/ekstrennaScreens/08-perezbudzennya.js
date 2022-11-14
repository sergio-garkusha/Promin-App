import React from "react";
import { Text, View, Image, ScrollView } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Bullet from "/components/Bullet";
import Header from "/components/Header";
import ListItem from "/components/ListItem";
import resolveStyles from "/styles/subpage";

import Head from "/assets/images/head.jpg";
import Zahvat from "/assets/images/zahvat-zzadu.jpg";

export default function Perezbudzennya({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveStyles(computeTheme(), computeFontSize);
  return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Перезбудження </Text>

          <Text style={styles.Subtitle}>В цій ситуації: </Text>

          <Bullet symbol="1." style={styles.paragraph}>
            Використовуйте прийом «захват»: станьте позаду постраждалого,
            просуньте руки під пахви постраждалого, притисніть його до себе і
            злегка перекиньте його на себе.
          </Bullet>

          <View style={[styles.paragraph, { justifyContent: "center", alignItems: "center" }]}>
            <Image source={Zahvat} style={{ width: 293, height: 300 }} />
          </View>

          <Bullet symbol="2." style={styles.paragraph}>
            Ізолюйте постраждалого від оточуючих.
          </Bullet>

          <Bullet symbol="3." style={styles.paragraph}>
            Массуйте «позитивні точки» на чолі постраждалого. Спокійним голосом
            обговорюйте почуття, які він відчуває. («Тобі хочеться щось зробити,
            щоб це припинилось?» Ти хочеш втікти, сховатись від того, що
            відбувається?» ).
          </Bullet>

          <View style={[styles.paragraph, { justifyContent: "center", alignItems: "center" }]}>
            <Image source={Head} style={{ width: 293, height: 250 }} />
          </View>

          <Bullet symbol="4." style={styles.paragraph}>
            Не сперечайтесь із постраждалим, нічого не питайте, в розмові
            уникайте частки «не», якщо це стосується небажаних дій
            (наприклад: замість «не біжи» – «зупинись», «не розмахуй руками» – «опусти руки», «не кричи» – «говори тихіше»).
          </Bullet>

          <Bullet symbol="5." style={styles.paragraph}>
            Пам’ятайте, що постраждалий може завдати шкоди собі та оточуючим.
          </Bullet>

          <Text style={styles.Subtitle}>
            Перезбудження зазвичай триває недовго і може перейти у:
          </Text>

          <ListItem
            roundTop
            title="нервове тремтіння"
            onPress={() => navigation.push("NervoveTremtinnya")}
          />
          <ListItem
            title="плач"
            onPress={() => navigation.push("Plach")}
          />
          <ListItem
            roundBottom
            title="агресивну поведінку"
            onPress={() => navigation.push("Agresiya")}
          />

          <View style={styles.spacer} />
        </View>
      </ScrollView>
    </View>
  );
}
