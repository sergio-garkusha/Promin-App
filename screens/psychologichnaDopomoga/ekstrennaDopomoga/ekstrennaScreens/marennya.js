import * as React from 'react';
import {Text, View, StyleSheet, Button, Image, ScrollView} from 'react-native';

export default function Marennya() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.paragraph}>Назад</Text>

                <Text style={styles.header}>Марення і галюцинації </Text>

                <Text style={styles.paragraph}>В цій ситуації: </Text>

                <Text style={styles.paragraph}> 1. Зверніться до медичних працівників, викличте бригаду швидкої
                    психіатричної допомоги. </Text>

                <Text style={styles.paragraph}> 2. До прибуття спеціалістів слідкуйте за тим щоб постраждалий не
                    зашкодив собі та оточуючим.</Text>

                <Text style={styles.paragraph}> 3. Ізолюйте постраждалого але не залишайте наодинці. </Text>

                <Text style={styles.paragraph}> 4. Говоріть з постраждалим спокійним голосом. Погоджуйтесь з ним, не
                    намагайтесь переконати його. Пам’ятайте, в такій ситуації переконати постраждалого неможливо.
                </Text>
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
