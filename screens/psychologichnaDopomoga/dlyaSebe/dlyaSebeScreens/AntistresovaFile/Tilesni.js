import React from "react";
import { Text, View, ScrollView } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Bullet from "/components/Bullet";
import Header from "/components/Header";
import resolveStyles from "/styles/subpage";
import ListItem from "/components/ListItem";

export default function Tilesni({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveStyles(computeTheme(), computeFontSize);
  
  
  return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Тілесні вправи</Text>

          <Text style={styles.paragraph}>Очевидно, що вплив стресу відображається на всьому тілі. Хтось відчуває важкість у грудях,
           хтось відчуває ноги “важкими”.  Для того щоб вийти з циклу стресової реакції та якісно її прожити, звісно ж, необхідно 
           задіяти тіло та всі фізичні можливості, які є для вас доступними в даний час. Після кожної вправи, відслідкуйте, як змінюються
            відчуття в тілі. Якщо відчуваєте, що хочеться зробити декілька вправ - зробіть їх. Ефективно буде поєднувати з когнітивними 
            техніками та дихальними вправами. Не існує єдиного рецепту - орієнтуйтесь на власні потреби тут і зараз. 
          </Text>

          

            {/* This going to be after couple of Garmoshkas, and it should be silver ( just a reminder for you Gary) */}
          <Text style={styles.header2}>Засоби активізації відчуттів у тілі</Text>
          

          <View style={styles.spacer} />
        </View>
      </ScrollView>
    </View>
  );
}
