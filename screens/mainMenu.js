import * as React from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';
export default function MainMenu() { 
  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image 
          source={require("../assets/snack-icon.png")} 
          style={styles.roundImage} 
        />
      </View>
      <Text>{"\n"}</Text>
      <Text style={styles.paragraph}>
Психологічна допомога:
      </Text>
      <Text>{"\n\n"}</Text>
      <Button title="Собі" />
      <Text>{"\n"}</Text>
      <Button title="Дитині" />
      <Text>{"\n"}</Text>
      <Button title="Іншому дорослому" />
      <Text>{"\n"}</Text>

      <Text style={styles.paragraph}>
Підготуватись до надзвичайної ситуації. Перші дії:
      </Text>
      <Button title="Вимкнули телебачення" />
      <Text>{"\n"}</Text>
      <Button title="Повітряна тривога" />
      <Text>{"\n"}</Text>
      <Button title="Евакуація" />
      <Text>{"\n"}</Text>
      <Button title="Вибухонебезпечні знахідки" />
      <Text>{"\n"}</Text>
      <Button title="Артілерійський обстріл" />
    </View>
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