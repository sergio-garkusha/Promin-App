import React from "react";
import { Text, View, ScrollView } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Bullet from "/components/Bullet";
import Header from "/components/Header";
import resolveStyles from "/styles/subpage";
import ListItem from "/components/ListItem";
import Accordion from "../../../../components/Accordion";

export default function VibuhonebezpechniZnahidki({ navigation }) {
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
          <Text style={styles.header}>Вибухонебезпечні знахідки</Text>

          <Accordion title= "Дії">

            <Text style={styles.paragraph}>1.Негайно повідомте чергові служби органів внутрішніх справ, цивільного захисту 101 або 102</Text>
            <Text style={styles.paragraph}>2.Заборонено:</Text>

            <Bullet symbol="•" Style={styles.poragraph}>Наближатися до предмету;   </Bullet>
            <Bullet symbol="•" Style={styles.poragraph}>Пересувати його або брати в руки; </Bullet>
            <Bullet symbol="•" Style={styles.poragraph}>Розряджати, кидати, ударяти по ньому;</Bullet>
            <Bullet symbol="•" Style={styles.poragraph}>Розпалювати поряд багаття або кидати в нього предмет;</Bullet>
            <Bullet symbol="•" Style={styles.poragraph}>Приносити предмет до дому, у табір, школу.</Bullet>


            <Text style={styles.paragraph}>3. Відмітье підручними предметами місцезнаходження підозрілої знахідки. Не допускайте до знахідки інших людей.</Text>
            <Text style={styles.paragraph}>4. Припиніть всі види робіт в районі виявлення вибухонебезпечного предмету.</Text>
            <Text style={styles.paragraph}>5. Дочекайтеся прибуття фахівців, вкажіть місце знахідки та повідомте час її виявлення.</Text>

            <Text style={styles.header}>Пам’ятайте! </Text>
            
            <Text style={styles.paragraph}>Одна з основних причин нещасних випадків з вибуховими пристроями – грубе 
            порушення елементарних правил безпеки.</Text>
            <Text style={styles.paragraph}>Практично всі вибухові речовини отруйні, чутливі до механічних дій і 
            нагрівання. Поводження з ними вимагає граничної уваги і обережності!</Text>
            <Text style={styles.paragraph}>Розмінуванням, знешкодженням або знищенням вибухонебезпечних предметів 
            займаються тільки підготовлені фахівці-сапери, допущені до цього виду робіт.</Text>

          </Accordion>

          <ListItem roundTop roundBottom title="Вибухонебезпечні предмети" onPress={()=>navigation.push("VibuhonebezpechniPredmeti")}/>
      

          <View style={styles.spacer} />
        </View>
      </ScrollView>
    </View>
  );
}

const resolveLocalStyles = (theme, computeFS) => {
  const backgroundColor = theme === "dark" ? "#18203A" : "#F3F3F3";
  const color = theme === "dark" ? "#848EB0" : "#666";
  return StyleSheet.create({
    container: {
      backgroundColor,
      flex: 1,
      justifyContent: "center",
      paddingTop: 110,
    },
    title: {
      color,
      fontFamily: "Ubuntu",
      fontSize: computeFS(18),
      lineHeight: computeFS(21),
      marginBottom: 16,
      marginTop: 32,
      textAlign: "left",
    },
  });
};