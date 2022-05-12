import * as React from 'react';
import {Text, View, StyleSheet, Button, Image, ScrollView} from 'react-native';

export default function Stupor() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.paragraph}>Назад</Text>

                <Text style={styles.header}>Ступор </Text>

                <Text style={styles.paragraph}>В цій ситуації: </Text>

                <Text style={styles.paragraph}> 1. Загніть постраждалій усі пальці на руках окрім великих. Великі пальці
                    мають бути виставлені назовні. </Text>

                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image
                        source={require("../../../../assets/images/thumbs.png")}
                    />
                </View>

                <Text style={styles.paragraph}> 2. Кінчиками великого та вказівного пальців массуйте постраждалій точки,
                    розташовані на лобі, над очима рівно посередині між лінією росту волосся і бровами, чітко над
                    зіницями. </Text>

                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image
                        source={require("../../../../assets/images/head.png")}
                    />

                    <Image
                        source={require("../../../../assets/images/twoGuys.png")}
                    />
                </View>

                <Text style={styles.paragraph}> 3. Долоню вільної руки покладіть на грудну клітину постраждалої.
                    Підлаштуйте ритм свого дихання під дихання постраждалої. </Text>

                <Text style={styles.paragraph}> 4. Людина що знаходиться в ступорі, може чути і бачити. Тому говоріть їй
                    на вухо тихо, повільно і чітко те, що може викликати сильні емоції (краще негативні). Необхідно будь
                    якими методами добитись реакції постраждалої, вивести її з оціпеніння. </Text>
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
