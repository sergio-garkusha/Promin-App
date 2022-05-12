import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';

import ListItem from "../../../components/ListItem";

var navigateAway = () => {console.log("navigation")}

export default function Dytuni() {
    return (
        <ScrollView>
            <View style={styles.container}>

                <Text style={styles.paragraph}>Назад</Text>
                <Text style={styles.header}>Дитині </Text>

                <ListItem title="Ігри" onPress={navigateAway}/>
                <ListItem title="Мультфільми" onPress={navigateAway}/>
                <ListItem title="Антистресова активність" onPress={navigateAway}/>
                <ListItem title="Часті запитання" onPress={navigateAway}/>

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
    header: {
        margin: 5,
        fontSize: 22,
        fontWeight: 'normal',
        textAlign: 'center',
    },
    Button:{
        padding:4
    }
});
