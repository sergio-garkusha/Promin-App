import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { ThemeContext } from 'ThemeProvider';
import Header from 'components/Header'
import ListItem from 'components/ListItem';

export default function MainMenu({ navigation }) {  // navigation: { goBack }
  const navigateTo = ( destination ) => {
    navigation.push( destination )
  }
  const { theme } = React.useContext(ThemeContext);
  const styles = resolveLocalStyles(theme);
  return (
    <View>
      <Header navigation={navigation}/>
      <ScrollView>
        <View style={styles.container}>

          <View style={{padding: 20}}>
            <Text style={styles.title}>Екстрена допомога</Text>
            <ListItem icon="🚨" roundTop roundBottom title="Екстренна психологічна допомога" onPress={()=>navigateTo("EkstrennaDopomoga")}/>

            <Text style={styles.title}>Психічна підтримка</Text>
            <ListItem icon="👩" roundTop title="Для себе" onPress={()=>navigateTo("DlyaSebe")}/>
            <ListItem icon="👦" roundBottom title="Дитині" onPress={()=>navigateTo("Dytuni")}/>

            <Text style={styles.title}>Надзвичайна ситуація</Text>
            <ListItem icon="🚑" roundTop title="Контакти служб порятунку" onPress={()=>navigateTo("Kontakty")}/>
            <ListItem icon="👉" roundBottom title="Дії у різних ситуаціях" onPress={()=>navigateTo("Diyi")}/>

          </View>
        </View>
      </ScrollView>
    </View>
)}

const resolveLocalStyles = theme => {
  const backgroundColor = theme === 'dark' ? '#18203A' : '#F3F3F3';
  const color = theme === 'dark' ? '#FFF' : '#000';
  const labelColor = theme === 'dark' ? '#848EB0' : '#666';
  return StyleSheet.create({
    container: {
      paddingTop: 110,
      flex: 1,
      justifyContent: 'center',
      backgroundColor: backgroundColor
    },
    title: {
      marginTop:32,
      marginBottom:16,
      fontFamily: 'Ubuntu',
      fontSize: 18,
      lineHeight: 21,
      textAlign: 'left',
      color: labelColor
    },
    listGroup: {
      borderRadius: 12
    },
    paragraph: {
      margin: 5,
      fontSize: 14,
      fontWeight: 'normal',
      textAlign: 'center',
      color
    },
    roundImage: {
      width: 200,
      height: 200,
      borderRadius: 200 / 2
    },
    Button:{
      padding:4
    }
  })
};
