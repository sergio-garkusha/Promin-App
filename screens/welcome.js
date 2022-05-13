import * as React from 'react';
import { Text, View, StyleSheet, Button, Image, ScrollView } from 'react-native';
import Logo from '../components/Logo'
import NextButton from '../components/NextButton'
import { responsiveHeight, responsiveWidth, responsiveFontSize} from "react-native-responsive-dimensions";

const topHalfHeight = 300

const WelcomeScreen = ({ navigation }) => {
  const toMainMenu = () => {
    navigation.push( "MainMenu" )
  }

  return (
    <ScrollView>
      <View style={styles.container}>

        <View style={styles.topHalf}>
          <Logo width="32.8" style={{ marginTop: 30 }}/>
          <NextButton width="30" style={{marginTop: topHalfHeight}} onPress={toMainMenu}/>
        </View>


        <Text style={styles.paragraph}> Вітаємо вас, любі! </Text>
        <Text style={styles.paragraph}> Промінь - це ваш кишеньковий довідник психологічної допомоги у кризових ситуаціях. </Text>
        <Text style={styles.paragraph}> Тут ви можете знайти поради та перевірені техніки як покращити свій психологічний стан та стан людей навколо вас. </Text>
        <Text style={styles.paragraph}> Тримаймося. </Text>

        <Text>{"\n\n"}</Text>

      </View>
    </ScrollView>
)}

const styles = StyleSheet.create({
  topHalf: {
    height: topHalfHeight,
    backgroundColor: '#5177ff'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f3f3f3'
  },
  paragraph: {
    margin: 5,
    fontSize: 14,
    fontWeight: 'normal',
    textAlign: 'center',
  }
});

export default WelcomeScreen