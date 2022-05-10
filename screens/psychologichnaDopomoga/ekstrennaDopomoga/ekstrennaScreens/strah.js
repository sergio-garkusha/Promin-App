import * as React from 'react';
import {Text, View, StyleSheet, Button, Image, ScrollView} from 'react-native';

export default function Strah() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.paragraph}>Назад</Text>

                <Text style={styles.header}>Страх </Text>

                <Text style={styles.paragraph}>В цій ситуації: </Text>

                <Text style={styles.paragraph}> 1. Покладіть руку постраждалого собі на зап’ястя, щоб він відчув ваш
                    спокійний пульс. Це буде сигналом: “Я зараз поряд, ти не один!”. </Text>
                <Text style={styles.paragraph}> 2. Дихайте глибоко і рівно. Заохочуйте постраждалого дихати з вами в
                    одному ритмі. </Text>
                <Text style={styles.paragraph}> 3. Якщо постраждалий щось говорить, слухайте його, виражайте
                    зацікавленість, розуміння, співчуття. </Text>
                <Text style={styles.paragraph}> 4. Зробіть постраждалому легкий масаж найбільш напружених м’язів
                    тіла. </Text>
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
