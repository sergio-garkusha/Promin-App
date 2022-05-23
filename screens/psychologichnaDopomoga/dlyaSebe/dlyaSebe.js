import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';

import Header from '../../../components/Header'
import ListItem from "../../../components/ListItem";

var navigateAway = () => {console.log("navigation")}

export default function DlyaSebe({ navigation }) {
    return (
        <View>
            <Header backButton navigation={navigation} />
            <ScrollView>
                <View style={styles.container}>
                    <View style={{padding: 20}}>
                        <Text style={styles.title}>Для Себе </Text>

                        <ListItem roundTop title="Щоденна турбота для себе" onPress={navigateAway}/>
                        <ListItem title="Техніки самодопомоги в моменті..." onPress={navigateAway}/>
                        <ListItem roundBottom title="Антистресова активність" onPress={navigateAway}/>
                    </View>
                </View>
            </ScrollView>
        </View>
    )}
const styles = StyleSheet.create({
    container: {
        paddingTop: 110,
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
