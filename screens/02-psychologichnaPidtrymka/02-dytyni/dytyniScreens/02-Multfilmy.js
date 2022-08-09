import React from "react";
import { Text, View, ScrollView } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Header from "/components/Header";
import resolveStyles from "/styles/subpage";
import { Video } from "expo-av";
import Accordion from "/components/Accordion";

import Syrena from "/assets/videos/01-syrena.mp4";
import RE from "/assets/videos/02-re.mp4";
import Nudno from "/assets/videos/03-nudno.mp4";
import Neposeda from "/assets/videos/04-neposeda.mp4";
import Strashno from "/assets/videos/05-strashno.mp4";

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
          <Accordion title="Передмова">
            <Text style={styles.paragraph}>
              Тут ви знайдете мультфільми, які точно будуть корисними для малечі.
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
              свої важливості в будь-які часи.
            </Text>
          </Accordion>

          {/* All Text files below need to be silver :42-51 */}
          <Text style={styles.sectionHeader}>Що робити коли лунає сирена</Text>
          <Video
            style={{ height: 188 }}
            resizeMode="contain"
            source={Syrena}
            useNativeControls
          />

          <Text style={styles.sectionHeader}>Руханка “РЕ”</Text>
          <Video
            style={{ height: 188 }}
            resizeMode="contain"
            source={RE}
            useNativeControls
          />

          <Text style={styles.sectionHeader}>Що робити колі тобі нудно</Text>
          <Video
            style={{ height: 188 }}
            resizeMode="contain"
            source={Nudno}
            useNativeControls
          />

          <Text style={styles.sectionHeader}>Гімнастика для тих кому складно сидіти на одному місці</Text>
          <Video
            style={{ height: 188 }}
            resizeMode="contain"
            source={Neposeda}
            useNativeControls
          />

          <Text style={styles.sectionHeader}>Що робити колі тобі страшно</Text>
          <Video
            style={{ height: 188 }}
            resizeMode="contain"
            source={Strashno}
            useNativeControls
          />

          <View style={styles.spacer} />
        </View>
      </ScrollView>
    </View>
  );
}
