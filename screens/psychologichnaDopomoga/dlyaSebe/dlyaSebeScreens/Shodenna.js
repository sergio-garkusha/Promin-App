import React from "react";
import { Text, View, ScrollView } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Bullet from "/components/Bullet";
import Header from "/components/Header";
import resolveStyles from "/styles/subpage";
import ListItem from "/components/ListItem";


export default function Shodenna({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveStyles(computeTheme(), computeFontSize);
  


  return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <View style={{ padding: 20 }}>
            <Text style={styles.header}>Щоденна турбота про себе </Text>
            <Text style={styles.paragraph}> Наша психіка сильна та спроможна витримати багато викликів. 
            Однак, щоденно зустрічаючись з небезпекою та невизначеністю важливо мати та укріплювати внутрішню опору
             – нашу емоційну стійкість. 
             Жити звичним життям неможливо, а з новим нічого не зрозуміло. Що робити, коли неможливо будувати плани 
             на майбутнє? Як стабілізуватися в стані повної невизначеності? 
             Невизначеність - великий стрес для психіки. Всім нам потрібно адаптуватися до нових умов життя. Що може в цьому допомогти? Пропонуємо техніки та рекомендації, 
             які направлені на підтримку в цей непростий, для кожного з нас, період. 
            </Text>

            <Text style={styles.paragraph}>Практичні вправи </Text>
            
            <ListItem roundTop title="Швидкий рецепт психологічної стійкості" onPress={()=>navigation.push("Shvidkii")}/>

            <ListItem title="Вправа “Внутрішній сад”" onPress={()=>navigation.push("VnutrishniiSad")}/>
            <ListItem title="Вправа “Спокійне місце”" onPress={()=>navigation.push("Spokiine")}/>
            <ListItem title="Вправа “Внутрішній сейф”" onPress={()=>navigation.push("VnutrishniiSeif")}/>
            <ListItem title="Вправа “Чорно-біла фотографія”" onPress={()=>navigation.push("CheroBilaFoto")}/>
            <ListItem title="Вправа “Чорно-білий кадр”" onPress={()=>navigation.push("ChernoBilaCadr")}/>
            <ListItem title="Техніка самостійних обіймів" onPress={()=>navigation.push("Tehnika")}/>
            <ListItem title="Вправа “Квітка самопочуття”" onPress={()=>navigation.push("Kvitka")}/>

            <ListItem roundBottom title="Вправа “Я маю, я є, я можу і я буду”" onPress={()=>navigation.push("YaMau")}/>
          
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
