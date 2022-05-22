import * as React from 'react';
import {Text, View, StyleSheet, Button, Image, ScrollView} from 'react-native';

import Bullet from '../../../../components/Bullet';
import Header from '../../../../components/Header';

export default function Plach({ navigation }) {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Header backButton navigation={navigation} />

                <Text style={styles.header}>Плач </Text>

                <Text style={styles.header2}>В цій ситуації:</Text>

                <Bullet symbol='1.' style={styles.listItem}>Не залишайте потерпілого одного. </Bullet>

                <Bullet symbol='2.' style={styles.listItem}>Встановіть фізичний контакт з потерпілим (візьміть за руку, покладіть
                    свою руку йому на плече або спину, погладьте його по голові). Дайте потерпілому відчути, що ви
                    поряд. </Bullet>
                <Bullet symbol='3.' style={styles.listItem}>Не намагайтесь заспокоїти потерпілого що. Дайте йому можливість
                    виплакатись і виговоритись, “виплеснути” із себе горе, страх, образу. </Bullet>
                <Bullet symbol='1.' style={styles.listItem}>Нічого не питайте, на давайте порад. Ваше завдання -
                    вислухати. </Bullet>
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
