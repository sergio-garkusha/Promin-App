import * as React from 'react';
import { Text, View, StyleSheet, Button, Image, ScrollView } from 'react-native';
export default function WelcomeScreen() { 
  return (
    <ScrollView>
      <View style={styles.container}>

        <Text style={styles.header}> Вітаємо вас, любі! </Text>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image 
            source={require("../assets/snack-icon.png")} 
            style={styles.roundImage} 
          />
        </View>

        
        <Text style={styles.paragraph}> Промінь - це ваш кишеньковий довідник психологічної допомоги у кризових ситуаціях. </Text>
        <Text style={styles.paragraph}> Тут ви можете знайти поради та перевірені техніки як покращити свій психологічний стан та стан людей навколо вас. </Text>
        <Text style={styles.paragraph}> Тримаймося. </Text>

        <Text>{"\n\n"}</Text>

        <Button title="Далі" onPress={() => this.props.navigation.navigate('MainMenu')}/>

      </View>
    </ScrollView>
)}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'paleturquoise',
    padding: 8,
  },
  paragraph: {
    margin: 5,
    fontSize: 14,
    fontWeight: 'normal',
    textAlign: 'center',
  },
  header: {
    margin: 5,
    fontSize: 22,
    fontWeight: 'normal',
    textAlign: 'center',
  },
  roundImage: {
    width: 200, 
    height: 200, 
    borderRadius: 200/ 2
  }
});