import React from "react";
import { Text, View, ScrollView } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Bullet from "/components/Bullet";
import Header from "/components/Header";
import resolveStyles from "/styles/subpage";
import ListItem from "/components/ListItem";

export default function Chasti({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveStyles(computeTheme(), computeFontSize);
  
  
  return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Часті запитання</Text>

          <Text style={styles.paragraph}>Батькам важливо в нестабільних умовах життя дати дитині відчуття безпеки. 
          Для найменших його може забезпечити тілесний контакт. Старайтесь говорити якомога простіше. Чим менша за віком дитина,
           тим простіші та коротші слова та речення використовуйте.  Відповідайте лише на ті питання, які ставить дитина. Старайте говорити правду. 
            Дозовано, спираючись на факти, що викликають позитив та надію на майбутнє.
          </Text>
          
          {/* Missing Garmoshka with text*/}


          <View style={styles.spacer} />
        </View>
      </ScrollView>
    </View>
  );
}
