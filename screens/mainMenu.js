import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';

import Header from '../components/Header'
import ListItem from '../components/ListItem';

var navigateAway = () => {console.log("navigation")}

// <ListItem title="Go Back" onPress={goBack}/>

export default function MainMenu({ navigation: { goBack } }) { 
  return (
    <ScrollView>
      <View style={styles.container}>
        <Header/>

        <View style={{padding: 20}}>
          <Text style={styles.title}>Екстрена допомога</Text>
          <ListItem icon="🚨" roundTop roundBottom title="Екстренна психологічна допомога" onPress={navigateAway}/>

          <Text style={styles.title}>Психічна підтримка</Text>
          <ListItem icon="🚨" roundTop title="Для себе" onPress={navigateAway}/>
          <ListItem icon="🚨" roundBottom title="Дитині" onPress={navigateAway}/>

          <Text style={styles.paragraph}> Надзвичайна ситуація: </Text>

          <ListItem title="Вимкнули телебачення" onPress={navigateAway}/>
          <ListItem title="Повітряна тривога" onPress={navigateAway}/>
          <ListItem title="Евакуація" onPress={navigateAway}/>
          <ListItem title="Вибухонебезпечні знахідки" onPress={navigateAway}/>
          <ListItem title="Артілерійський обстріл" onPress={navigateAway}/>
        </View>
      </View>
    </ScrollView>
)}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F3F3F3',
  },
  title: {
    marginTop:30,
    marginBottom:5,
    fontFamily: 'Ubuntu',
    fontSize: 18,
    fontWeight: 500,
    lineHeight: 21,
    textAlign: 'left',
    color: '#666666'
  },
  listGroup: {
    borderRadius: 12
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