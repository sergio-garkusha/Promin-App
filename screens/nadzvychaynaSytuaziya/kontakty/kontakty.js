import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';

import ListItem from "../../../components/ListItem";

var navigateAway = () => {console.log("navigation")}

export default function Kontakty() {
    return (
        <ScrollView>
            <View style={styles.container}>

                <Text style={styles.paragraph}>Назад</Text>

                <Text style={styles.header}>Контакти служб порятунку </Text>

                <ListItem title="Пожежна" onPress={navigateAway}/>
                <ListItem title="Поліція" onPress={navigateAway}/>
                <ListItem title="Швидка допомога" onPress={navigateAway}/>
                <ListItem title="Аварійна служба газу" onPress={navigateAway}/>
                <ListItem title="Екстренна психолог допомога" onPress={navigateAway}/>
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
    },
    Button:{
        padding:4
    }
});
