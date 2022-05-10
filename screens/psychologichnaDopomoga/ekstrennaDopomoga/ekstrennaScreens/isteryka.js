import * as React from 'react';
import {Text, View, StyleSheet, Button, Image, ScrollView} from 'react-native';

export default function Isteryka() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.paragraph}>Назад</Text>

                <Text style={styles.header}>Істерика </Text>

                <Text style={styles.paragraph}>В цій ситуації: </Text>

                <Text style={styles.paragraph}> 1. Попросіть глядачів піти. Залишіться з потерпілим наодинці, якщо це
                    безпечно для вас.</Text>
                <Text style={styles.paragraph}> 2. Неочікувано зробіть якусь дію, яка може сильно здивувати (можна дати
                    ляпаса, облити водою, щось голосно кинути, різко крикнути на потерпілого).</Text>
                <Text style={styles.paragraph}> 3. Говоріть з потерпілим короткими фразами, впевненим тоном (“Випий
                    води”, “Вмийся”). </Text>
                <Text style={styles.paragraph}> 4. Після істерики наступає виснаження. Покладіть постраждалого спати. До
                    прибуття спеціаліста наглядайте за його станом. </Text>
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
