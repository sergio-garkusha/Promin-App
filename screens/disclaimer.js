import React from "react";
import * as Linking from "expo-linking";
import { Text, View, ScrollView } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Paragraph from "/components/Paragraph";
import Header from "/components/Header";
import resolveStyles from "/styles/subpage";

function handleExtlLink(l) {
  Linking.openURL(l)
}

export default function DisclaimerScreen({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveStyles(computeTheme(), computeFontSize);
  return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Медичний дисклеймер</Text>
          <Text style={styles.Subtitle}>Medical disclaimer (Українською)</Text>
          <Paragraph>
            Важливо: необхідно проконсультуватися з лікарем перед тим, як приймати будь-які медичні рішення на основі інформації з цього додатку.
          </Paragraph>
          <Paragraph style={{ paddingBottom: 20 }}>
            Інформація та поради, надані у додатку Промінь, призначені лише для інформаційних та навчальних цілей і не є заміною професійної медичної консультації, діагностики або лікування. Завжди звертайтеся до кваліфікованого медичного фахівця щодо будь-яких питань, які вас турбують, стосовно вашого психічного здоров'я чи психічного здоров'я інших людей. Ніколи не ігноруйте професійні медичні поради або не відкладайте їх через щось, що ви прочитали чи дізналися через додаток Промінь.
          </Paragraph>
          <Text style={styles.Subtitle}>Medical disclaimer (English version)</Text>
          <Paragraph>
            Disclaimer: The information and advice provided in the Промінь app are intended for informational and educational purposes only and are not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of a qualified healthcare professional regarding any concerns you may have about your mental health or the mental health of others. Never disregard professional medical advice or delay seeking it because of something you have read or learned through the Promin app.
          </Paragraph>

          <Text style={styles.header}>Автори, джерела і посилання</Text>
          <Text style={styles.Subtitle}>Authors and Sources (Українською)</Text>
          <Paragraph>
            Зміст цього додатка, спрямованого на надання психологічної підтримки у кризових ситуаціях, було ретельно розроблено командою досвідчених фахівців з кафедри психології, соціальної роботи та інклюзивної освіти КЗВО «Одеська академія неперервної освіти Одеської обласної ради». Ця авторитетна установа присвячена забезпеченню якісної освіти та актуальних дослідницьких знахідок у галузі психології та соціальної роботи.
          </Paragraph>
          <Paragraph>
            Наша команда авторів включає:
          </Paragraph>
          <Paragraph>
            - Катерина Павленко: досвідчений психолог з сильним науковим та практичним досвідом. Катерина присвячує свою кар'єру вивченню складностей людського розуму та наданню підтримки тим, хто в них потребує.
          </Paragraph>
          <Paragraph>
            - Тетяна Краснощок: досвідчений соціальний працівник з пристрастю до допомоги окремим особам та сім'ям у складних життєвих ситуаціях. Тетяна вносить великий практичний досвід та знання реального життя в зміст додатка.
          </Paragraph>
          <Paragraph>
            - Ірина Пивоварчик: експерт у галузі інклюзивної освіти, присвячений популяризації доступності та інклюзивності в освітніх закладах. Її професійні знання гарантують, що зміст додатка доступний широкому колу користувачів.
          </Paragraph>
          <Paragraph style={{ paddingBottom: 20 }}>
            Для отримання додаткової інформації про організацію та її місію, будь ласка, відвідайте їхній веб-сайт <Text style={styles.extLink} onPress={() => handleExtlLink('https://oano.od.ua')}>https://oano.od.ua</Text>
          </Paragraph>

          <Text style={styles.Subtitle}>Authors and Sources (English version)</Text>
          <Paragraph>
            The content in this app has been carefully developed by a team of experienced professionals from the Department of Psychology, Social Work, and Inclusive Education at the Odessa Academy of Continuous Education of the Odessa Regional Council. The academy is committed to excellence in research and education, offering comprehensive resources for lifelong learning and personal development.
          </Paragraph>

          <Paragraph>
            Our esteemed authors, who have contributed their valuable knowledge and expertise to the development of this app, include:
          </Paragraph>
          <Paragraph>
            - Katerina Pavlenko, PHD: An accomplished psychologist with years of experience in both academic and practical fields, Katerina is dedicated to helping individuals overcome challenges and improve their mental well-being.
          </Paragraph>
          <Paragraph>
            - Tetiana Krasnoshchok: A skilled social worker, Tetiana has a deep understanding of the complex issues faced by individuals and communities. She is passionate about empowering people to achieve positive change in their lives.
          </Paragraph>
          <Paragraph>
            - Iryna Pivovarchik: An expert in inclusive education, Iryna has devoted her career to ensuring equal access to education and opportunities for all, regardless of their backgrounds or abilities.
          </Paragraph>
          <Paragraph>
            For more information about the Odessa Academy of Continuous Education and the authors' credentials, please visit the organization's website: <Text style={styles.extLink} onPress={() => handleExtlLink('https://oano.od.ua')}>https://oano.od.ua</Text>
          </Paragraph>
          <View style={styles.spacer} />
        </View>
      </ScrollView >
    </View >
  );
}
