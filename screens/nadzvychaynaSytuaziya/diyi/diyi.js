import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';

import Header from '../../../components/Header'
import ListItem from "../../../components/ListItem";

var navigateAway = () => {console.log("navigation")}

export default function Diyi({ navigation }) {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Header backButton navigation={navigation} />

                <View style={{padding: 20}}>
                    <Text style={styles.title}>Надзвичайна ситуація - дії</Text>

                    <ListItem roundTop title="Вимкнули телебачення" onPress={navigateAway}/>
                    <ListItem title="Повітряна тривога" onPress={navigateAway}/>
                    <ListItem title="Евакуація" onPress={navigateAway}/>
                    <ListItem title="Вибухонебезпечні знахідки" onPress={navigateAway}/>
                    <ListItem roundBottom title="Артилерійський обстріл" onPress={navigateAway}/>
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
