import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';

import Header from '../../../components/Header'
import ListItem from "../../../components/ListItem";

var navigateAway = () => {console.log("navigation")}

export default function Kontakty({ navigation }) {
    return (
        <View>
            <Header backButton navigation={navigation} />
            <ScrollView>
                <View style={styles.container}>
                    <View style={{padding: 20}}>
                        <Text style={styles.title}>Контакти служб порятунку </Text>

                        <ListItem roundTop title="Пожежна" onPress={navigateAway}/>
                        <ListItem title="Поліція" onPress={navigateAway}/>
                        <ListItem title="Швидка допомога" onPress={navigateAway}/>
                        <ListItem title="Аварійна служба газу" onPress={navigateAway}/>
                        <ListItem roundBottom title="Екстренна психолог допомога" onPress={navigateAway}/>
                    </View>
                </View>
            </ScrollView>
        </View>
    )}
const styles = StyleSheet.create({
    container: {
        paddingTop:110,
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
