import React from "react";
import { Text, View, Image, ScrollView } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Bullet from "/components/Bullet";
import Header from "/components/Header";
import resolveStyles from "/styles/subpage";

import Miny1 from "/assets/images/Miny1.jpg";
import Miny2 from "/assets/images/Miny2.jpg";
import Miny3 from "/assets/images/Miny3.jpg";

export default function VybuhonebezpechniPredmety({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveStyles(computeTheme(), computeFontSize);
  const imgStyles = { width: 342, height: 220, marginBottom: 20 };
  return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Вибухонебезпечні предмети</Text>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image source={Miny1} style={imgStyles} />
          </View>

          <Bullet symbol="1." style={styles.paragraph}>
            Осколочна мінометна міна.
          </Bullet>
          <Bullet symbol="2." style={styles.paragraph}>
            Великокаліберний набій.
          </Bullet>
          <Bullet symbol="3." style={styles.paragraph}>
            Гранатометний набій (являє собою осколкову гранату).
          </Bullet>
          <Bullet symbol="4." style={styles.paragraph}>
            Протипіхотна вистрибуюча осколкова міна кругового ураження.
          </Bullet>
          <Bullet symbol="5." style={styles.paragraph}>
            Протитанкова міна.
          </Bullet>
          <Bullet symbol="6." style={styles.paragraph}>
            Осколочно-фугасний артилерійський снаряд.
          </Bullet>
          <Bullet symbol="7." style={styles.paragraph}>
            Протипіхотна міна «ПМН» (фугасна).
          </Bullet>
          <Bullet symbol="8." style={[styles.paragraph, { marginBottom: 60 }]}>
            Протипіхотна міна «ПФМ-1» (фугасна).
          </Bullet>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image source={Miny2} style={imgStyles} />
          </View>
          <Bullet symbol="1." style={styles.paragraph}>
            Касетна протитанкова міна.
          </Bullet>
          <Bullet symbol="2." style={styles.paragraph}>
            Кумулятивний танковий снаряд.
          </Bullet>
          <Bullet symbol="3." style={styles.paragraph}>
            Протипіхотна міна «ПОМЗ-2М» (являє собою осколкову гранату).
          </Bullet>
          <Bullet symbol="4." style={styles.paragraph}>
            Постріл гранатометний (осколковий боєприпас для підствольних гранатометів).
          </Bullet>
          <Bullet symbol="5." style={styles.paragraph}>
            Ручна граната «РГО».
          </Bullet>
          <Bullet symbol="6." style={styles.paragraph}>
            Ручна граната «Ф-1».
          </Bullet>
          <Bullet symbol="7." style={styles.paragraph}>
            Ручна граната «РГД-5».
          </Bullet>
          <Bullet symbol="8." style={styles.paragraph}>
            Протипіхотна міна.
          </Bullet>
          <Bullet symbol="9." style={[styles.paragraph, { marginBottom: 60 }]}>
            Гранатометна граната.
          </Bullet>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image source={Miny3} style={imgStyles} />
          </View>
          <Bullet symbol="1." style={styles.paragraph}>
            Протипіхотна міна «МОН – 50».
          </Bullet>
          <Bullet symbol="2." style={styles.paragraph}>
            Протипіхотна міна «МОН – 100».
          </Bullet>
          <Bullet symbol="3." style={styles.paragraph}>
            Осколковий бойовий елемент.
          </Bullet>
          <Bullet symbol="4." style={[styles.paragraph, { marginBottom: 60 }]}>
            Протитанкова кумулятивна міна.
          </Bullet>

          <Text style={styles.Subtitle}> Інші вибухонебезпечні предмети</Text>
          <Bullet symbol="•" style={styles.paragraph}>
            Бойові ракети та їх фрагменти.
          </Bullet>
          <Bullet symbol="•" style={styles.paragraph}>
            Авіаційні бомби.
          </Bullet>
          <Bullet symbol="•" style={styles.paragraph}>
            Освітлювальні, імітаційні, спеціальні ракети.
          </Bullet>
          <Bullet symbol="•" style={styles.paragraph}>
            Вибухові пакети та петарди, сигнальні ракети.
          </Bullet>
          <Bullet symbol="•" style={styles.paragraph}>
            Димові гранати та шашки.
          </Bullet>

          <View style={styles.spacer} />
        </View>
      </ScrollView>
    </View>
  );
}
