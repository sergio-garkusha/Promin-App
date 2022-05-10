import * as React from 'react';
import { Text, View, StyleSheet, Button, Image, ScrollView } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  const toMainMenu = () => {
    navigation.push( "MainMenu" )
  }

  return (
    <ScrollView>
      <View style={styles.container}>

        <View style={styles.topHalf}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image 
              source={require("../assets/Logo-large.png")} 
              style={styles.logo} 
            />
          </View>
        </View>

        <Text style={styles.paragraph}> Вітаємо вас, любі! </Text>
        <Text style={styles.paragraph}> Промінь - це ваш кишеньковий довідник психологічної допомоги у кризових ситуаціях. </Text>
        <Text style={styles.paragraph}> Тут ви можете знайти поради та перевірені техніки як покращити свій психологічний стан та стан людей навколо вас. </Text>
        <Text style={styles.paragraph}> Тримаймося. </Text>

        <Text>{"\n\n"}</Text>

        <Button title="Далі" onPress={toMainMenu}/>

      </View>
    </ScrollView>
)}

const styles = StyleSheet.create({
  topHalf: {
    height: 300,
    backgroundColor: '#5f7bfc'
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
  },
  logo: {
    width: 136, 
    height: 205,
    marginTop: 50
  }
});

export default WelcomeScreen