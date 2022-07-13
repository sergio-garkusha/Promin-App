import React from "react";
import { Text, View, ScrollView } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Bullet from "/components/Bullet";
import Header from "/components/Header";
import resolveStyles from "/styles/subpage";
import ListItem from "/components/ListItem";

export default function Relaksaciini({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveStyles(computeTheme(), computeFontSize);
  
  
  return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Релаксаційні вправи</Text>

          <Text style={styles.paragraph}>Викорінити чи боротися з стресом не має сенсу в умовах, коли так багато невизначеності 
          в житті кожного громадянина нашої країни. Але в наших силах вчитися адаптуватися до нього та впливати на свій душевний
           стан. А найголовніше завдання кожного - перетворити стрес на ресурс для самовдосконалення. Варто більш детально вивчати
            себе, працювати над собою, пізнавати себе. Релаксаційні вправи допоможуть зняти підвищену психоемоційну напругу та опанувати
             тривожність. При підготовці до виконання цих вправ потурбуйтесь про зручне та безпечне місце, де ви зможете провести якийсь час присвятити собі.
          </Text>
          
          

          <View style={styles.spacer} />
        </View>
      </ScrollView>
    </View>
  );
}
