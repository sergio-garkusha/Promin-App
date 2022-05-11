import * as React from 'react';
import {Text, View, StyleSheet, Button, Image, ScrollView} from 'react-native';

export default function Plach() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.paragraph}>Назад</Text>

                <Text style={styles.header}>Плач </Text>

                <Text style={styles.paragraph}>В цій ситуації: </Text>

                <Text style={styles.paragraph}> 1. Не залишайте потерпілого одного. </Text>

                <Text style={styles.paragraph}> 2. Встановіть фізичний контакт з потерпілим (візьміть за руку, покладіть
                    свою руку йому на плече або спину, погладьте його по голові). Дайте потерпілому відчути, що ви
                    поряд. </Text>
                <Text style={styles.paragraph}> 3. Не намагайтесь заспокоїти потерпілого що. Дайте йому можливість
                    виплакатись і виговоритись, “виплеснути” із себе горе, страх, образу. </Text>
                <Text style={styles.paragraph}> 4. Нічого не питайте, на давайте порад. Ваше завдання -
                    вислухати. </Text>
            </View>
        </ScrollView>
    )
}
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
        borderRadius: 200 / 2
    }
});
