import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';

import Header from '../../../components/Header'
import ListItem from "../../../components/ListItem";

var navigateAway = () => {console.log("navigation")}

export default function EkstrennaDopomoga({ navigation }) {
    const navigateTo = ( destination ) => {
        navigation.push( destination )
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Header backButton navigation={navigation} />

                <View style={{padding: 20}}>
                    
                    <Text style={styles.title}> Психологічна допомога: </Text>

                    <ListItem roundTop title="Страх" onPress={navigateAway}/>
                    <ListItem title="Істерика" onPress={navigateAway}/>
                    <ListItem title="Плач" onPress={navigateAway}/>
                    <ListItem title="Ступор" onPress={navigateAway}/>
                    <ListItem title="Нервове тремтіння" onPress={navigateAway}/>
                    <ListItem title="Агресія" onPress={navigateAway}/>
                    <ListItem title="Марення і галюцинації" onPress={navigateAway}/>
                    <ListItem roundBottom title="Перезбудження" onPress={navigateAway}/>
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
        marginTop:32,
        marginBottom:16,
        fontFamily: 'Ubuntu',
        fontSize: 18,
        lineHeight: 21,
        textAlign: 'left',
        color: '#666666'
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
