import * as React from 'react';
import {Text, View, StyleSheet, Button, Image, ScrollView} from 'react-native';

import Bullet from '../../../../components/Bullet'
import Header from '../../../../components/Header'

export default function Strah({ navigation }) {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Header backButton navigation={navigation} />

                <Text style={styles.header}>Страх </Text>

                <Text style={styles.header2}>В цій ситуації: </Text>
                
                <Bullet symbol='1.' style={styles.listItem}>Покладіть руку постраждалого собі на зап’ястя, щоб він відчув ваш
                    спокійний пульс. Це буде сигналом: “Я зараз поряд, ти не один!”. </Bullet>
                <Bullet symbol='2.'  style={styles.listItem}>Дихайте глибоко і рівно. Заохочуйте постраждалого дихати з вами в
                    одному ритмі. </Bullet>
                <Bullet symbol='3.'  style={styles.listItem}>Якщо постраждалий щось говорить, слухайте його, виражайте
                    зацікавленість, розуміння, співчуття. </Bullet>
                <Bullet symbol='4.'  style={styles.listItem}>Зробіть постраждалому легкий масаж найбільш напружених м’язів
                    тіла. </Bullet>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F3F3F3',
    },
    listItem: {
        margin: 5,
        fontFamily: 'Ubuntu',
        fontSize: 17,
        fontWeight: 'normal',
        textAlign: 'left',
        marginBottom: 15
    },
    header: {
        margin: 15,
        marginTop: 40,
        fontFamily: 'Ubuntu_M',
        fontSize: 25,
        fontWeight: 'normal',
        textAlign: 'left',
    },
    header2: {
        margin: 15,
        fontFamily: 'Ubuntu_M',
        fontSize: 19,
        fontWeight: 'normal',
        textAlign: 'left',
    },
    roundImage: {
        width: 200,
        height: 200,
        borderRadius: 200 / 2
    }
});
