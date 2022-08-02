import React from "react";
import { Text, View, ScrollView } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Bullet from "/components/Bullet";
import Header from "/components/Header";
import resolveStyles from "/styles/subpage";
import ListItem from "/components/ListItem";
import Accordion from "../../../../components/Accordion";

export default function Multfilmi({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveStyles(computeTheme(), computeFontSize);
  
  
  return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Мультфільми</Text>

          <Accordion title= "Передмова">

            <Text style={styles.paragraph}>Тут ви знайдете мультфільми, які точно будуть корисними для малечі. 
            Це спільна робота науковців, практиків та волонтерів з різних куточків світу, які об'єднались під назвою
            "Графічний батальйон". Ці мультфільми допоможуть українським дітям зберегти психічне здоров'я у стані 
            підвищеного нервового напруження, в якому знаходиться наша країна під час повномаштабних військових дій. 
            Розробники мультиків ставили за мету дати дитині почуття безпечного простору, де вона зможе самостійно 
            займатися гімнастикою за спеціально підібраною методикою. Цей метод є простим та зрозумілим дитині 
            будь-якого віку та доступним за діями. В мультфільмах є і навчання елементам саморозслаблення за рахунок зміни станів та інтонацій,
            що пропонуються в тексті, і, безумовно, розвиток вміння виражати власні емоції через своєрідність 
            виконання запропонованих вправ. Психогімнастика передбачає вираження переживань, накопиченої психічної 
            напруги, емоційних станів та інших психологічних потреб за допомогою рухів, міміки, пантоміміки. 
            Так само в процесі виконання вправ відбувається і розвиток емоційно-особистісної сфери, що не втрачає 
            свої важливості в будь-які часи. </Text>

          </Accordion>

          
          {/* All Text files below need to be silver :42-51 */}
          <Text style={styles.paragraph}>Що робити коли лунає сирена</Text>

          <Text style={styles.paragraph}>Руханка “РЕ”</Text>

          <Text style={styles.paragraph}>Що робити колі тобі нудно</Text>

          <Text style={styles.paragraph}>Гімнастика для тих кому складно сидіти на одному місці</Text>

          <Text style={styles.paragraph}>Що робити колі тобі страшно</Text>

          {/* Between every text from :36 to 44 should be video(Multfilmi) */}



          <View style={styles.spacer} />
        </View>
      </ScrollView>
    </View>
  );
}
