VibuhonebezpechniPredmeti

import React from "react";
import { Text, View, Image, ScrollView } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Bullet from "/components/Bullet";
import Header from "/components/Header";
import resolveStyles from "/styles/subpage";
import Mini1 from "/assets/images/Mini1.jpg";
import Mini2 from "/assets/images/Mini2.jpg";
import Mini3 from "/assets/images/Mini3.jpg";

export default function VibuhonebezpechniPredmeti({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveStyles(computeTheme(), computeFontSize);

  return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Вибухонебезпечні предмети</Text>


          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image source={Mini1} style={{ width: 342, height: 220 }} />
          </View>

          <Bullet symbol="1." style={styles.paragraph}>
          Осколочна мінометна міна 
          </Bullet>

          <Bullet symbol="2." style={styles.paragraph}>
          Великокаліберний набій
          </Bullet>

          <Bullet symbol="3." style={styles.paragraph}>
          Гранатометний набій (являє собою осколкову гранату)
          </Bullet>

          <Bullet symbol="4." style={styles.paragraph}>
          Протипіхотна вистрибуюча осколкова міна кругового ураження
          </Bullet>
          
          <Bullet symbol="5." style={styles.paragraph}>
          Протитанкова міна          
          </Bullet>

          <Bullet symbol="6." style={styles.paragraph}>
          Осколочно-фугасний артилерійський снаряд
          </Bullet>

          <Bullet symbol="7." style={styles.paragraph}>
          Протипіхотна міна «ПМН» (фугасна)
          </Bullet>

          <Bullet symbol="8." style={styles.paragraph}>
          Протипіхотна міна «ПФМ – 1» (фугасна) {" "}         
          </Bullet>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image source={Mini2} style={{ width: 342, height: 220 }} />
          </View>

          <Bullet symbol="1." style={styles.paragraph}>
          Касетна протитанкова міна 
          </Bullet>

          <Bullet symbol="2." style={styles.paragraph}>
          Кумулятивний танковий снаряд
          </Bullet>

          <Bullet symbol="3." style={styles.paragraph}>
          Протипіхотна міна «ПОМЗ-2М» (являє собою осколкову гранату)
          </Bullet>

          <Bullet symbol="4." style={styles.paragraph}>
          Постріл гранатометний (осколковий боєприпас для підствольних гранатометів)          </Bullet>
          
          <Bullet symbol="5,6,7." style={styles.paragraph}>
          Ручні гранати         </Bullet>

          <Bullet symbol="8." style={styles.paragraph}>
          Протипіхотна міна
          </Bullet>

          <Bullet symbol="9." style={styles.paragraph}>
          Гранатометний снаряд {" "}
          </Bullet>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image source={Mini3} style={{ width: 342, height: 220 }} />
          </View>

          <Bullet symbol="1." style={styles.paragraph}>
          Протипіхотна міна «МОН – 50» 
          </Bullet>

          <Bullet symbol="2." style={styles.paragraph}>
          Протипіхотна міна«МОН – 100»
          </Bullet>

          <Bullet symbol="3." style={styles.paragraph}>
          Осколковий бойовий елемент
          </Bullet>

          <Bullet symbol="4." style={styles.paragraph}>
          Протитанкова кумулятивна міна
          </Bullet>

          <Text style={styles.header2}> Інші вибухонебезпечні предмети:</Text>

          <Bullet symbol="•" style={styles.paragraph}>
          Бойові ракети та їх фрагменти
          </Bullet>

          <Bullet symbol="•" style={styles.paragraph}>
          Авіаційні бомби
          </Bullet>

          <Bullet symbol="•" style={styles.paragraph}>
          Освітлювальні, імітаційні, спеціальні ракети
          </Bullet>

          <Bullet symbol="•" style={styles.paragraph}>
          Вибухові пакети та петарди, сигнальні ракети
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
