import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Header from "/components/Header";
import ListItem from "/components/ListItem";

const navigateAway = () => {
  // eslint-disable-next-line no-console
  console.log("navigation");
};

export default function Shodenna({ navigation }) {
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
            <Text style={styles.title}>Щоденна турбота про себе </Text>
            <Text style={styles.paragraph}> Наша психіка сильна та спроможна витримати багато викликів. 
            Однак, щоденно зустрічаючись з небезпекою та невизначеністю важливо мати та укріплювати внутрішню опору
             – нашу емоційну стійкість. 
             Жити звичним життям неможливо, а з новим нічого не зрозуміло. Що робити, коли неможливо будувати плани 
             на майбутнє? Як стабілізуватися в стані повної невизначеності? 
             Невизначеність - великий стрес для психіки. Всім нам потрібно адаптуватися до нових умов життя. Що може в цьому допомогти? Пропонуємо техніки та рекомендації, 
             які направлені на підтримку в цей непростий, для кожного з нас, період. 
            </Text>
            
            <ListItem roundTop title="Швидкий рецепт психологічної стійкості" onPress={navigateAway} />

            <ListItem title="Вправа “Внутрішній сад”" onPress={navigateAway}/>
            <ListItem title="Вправа “Спокійне місце”" onPress={() => onPress={navigateAway}}/>
            <ListItem title="Вправа “Внутрішній сейф”" onPress={navigateAway} />
            <ListItem title="Вправа “Чорно-біла фотографія”" onPress={navigateAway} />
            <ListItem title="Вправа “Чорно-білий кадр”" onPress={navigateAway} />
            <ListItem title="Техніка самостійних обіймів" onPress={navigateAway} />
            <ListItem title="Вправа “Квітка самопочуття”" onPress={navigateAway} />
            <ListItem title="Вправа “Я маю, я є, я можу і я буду”" onPress={navigateAway} />

            <ListItem roundBottom title="Антистресова активність" onPress={navigateAway}/>
          
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
