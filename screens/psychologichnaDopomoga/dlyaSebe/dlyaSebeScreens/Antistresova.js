import React from "react";
import { Text, View, ScrollView } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Bullet from "/components/Bullet";
import Header from "/components/Header";
import resolveStyles from "/styles/subpage";
import ListItem from "/components/ListItem";


export default function Antistresova({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveStyles(computeTheme(), computeFontSize);
  


  return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <View style={{ padding: 20 }}>
            <Text style={styles.header}>Антистресова активність</Text>
            <Text style={styles.paragraph}> Не буває прийомів, які були б ефективними абсолютно для всіх. Комусь легше нормалізувати свій психологічний 
            стан шляхом розслаблення м’язів, декому – шляхом рухової активності. Хтось ліпше використовує можливості уяви, а хтось – абстрактно-логічного
             мислення. Тому спробувавши методи психологічної саморегуляції, потрібно обрати для себе найефективніший. Як результат зменшується тривалість
              негативного впливу стресогенної ситуації, знижується рівень негативного впливу стресу на організм людини.
            </Text>

            <ListItem roundTop title="Тілесні вправи" onPress={()=>navigation.push("Tilesni")}/>

            <ListItem title="Релаксаційні вправи ”" onPress={()=>navigation.push("Relaksaciini")}/>
            <ListItem title="Когнітивні вправи”" onPress={()=>navigation.push("Kognitivni")}/>

            <ListItem roundBottom title="Дихальні вправи”" onPress={()=>navigation.push("Dinalni")}/>
          
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
