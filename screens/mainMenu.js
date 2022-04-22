import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';

import ListItem from '../components/ListItem';

var navigateAway = () => {console.log("navigation")}

export default function MainMenu() { 
  return (
    <ScrollView>
    <View style={styles.container}>

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image 
          source={require("../assets/snack-icon.png")} 
          style={styles.roundImage} 
        />
      </View>

      <Text style={styles.paragraph}> Психологічна допомога: </Text>

      <ListItem title="Собі" onPress={navigateAway}/>
      <ListItem title="Дитині" onPress={navigateAway}/>
      <ListItem title="Іншому дорослому" onPress={navigateAway}/>

      <Text style={styles.paragraph}> Підготуватись до надзвичайної ситуації. Перші дії: </Text>

      <ListItem title="Вимкнули телебачення" onPress={navigateAway}/>
      <ListItem title="Повітряна тривога" onPress={navigateAway}/>
      <ListItem title="Евакуація" onPress={navigateAway}/>
      <ListItem title="Вибухонебезпечні знахідки" onPress={navigateAway}/>
      <ListItem title="Артілерійський обстріл" onPress={navigateAway}/>

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
  roundImage: {
    width: 200, 
    height: 200, 
    borderRadius: 200/ 2
  },
  Button:{
    padding:4
  }
});