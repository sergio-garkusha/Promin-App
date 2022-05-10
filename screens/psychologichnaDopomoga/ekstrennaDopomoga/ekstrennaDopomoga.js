import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';

import ListItem from "../../../components/ListItem";

var navigateAway = () => {console.log("navigation")}

export default function EkstrennaDopomoga() {
    return (
        <ScrollView>
            <View style={styles.container}>

                <Text style={styles.paragraph}>Назад</Text>

                <Text style={styles.paragraph}> Психологічна допомога: </Text>

                <ListItem title="Страх" onPress={navigateAway}/>
                <ListItem title="Істерика" onPress={navigateAway}/>
                <ListItem title="Плач" onPress={navigateAway}/>
                <ListItem title="Ступор" onPress={navigateAway}/>
                <ListItem title="Нервове тремтіння" onPress={navigateAway}/>
                <ListItem title="Агресія" onPress={navigateAway}/>
                <ListItem title="Марення і галюцинації" onPress={navigateAway}/>
                <ListItem title="Перезбудження" onPress={navigateAway}/>
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
