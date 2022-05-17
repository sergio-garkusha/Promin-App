import * as React from 'react';
import {Text, View, StyleSheet, Button, Image, ScrollView} from 'react-native';

export default function Perezbudzennya() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.paragraph}>Назад</Text>

                <Text style={styles.header}>Перезбудження </Text>

                <Text style={styles.paragraph}>В цій ситуації: </Text>

                <Text style={styles.paragraph}> 1. Використовуйте прийом “захват”: станьте позаду постраждалого,
                    просуньте руки під пахви постраждалого, притисніть його до себе і злегка перекиньте його на себе.
                </Text>

                <Text style={styles.paragraph}> 2. Ізолюйте постраждалого від оточуючих. </Text>

                <Text style={styles.paragraph}> 3. Массуйте “позитивні точки” на чолі постраждалого. Спокійним голосом
                    обговорюйте почуття які він відчуває. (“Тобі хочеться щось зробити щоб це припинилось?” Ти хочеш
                    втікти, сховатись від того що відбувається?” ).
                </Text>

                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image
                        source={require("../../../../assets/images/head.png")}
                    />
                </View>

                <Text style={styles.paragraph}> 4. Не сперечайтесь із постраждалим, нічого не питайте, в розмові
                    уникайте частки “не” якщо це стосується небажаних дій (наприклад: “Не біжи”, “Не розмахуй руками”,
                    “Не кричи”). </Text>

                <Text style={styles.paragraph}> 5. Пам’ятайте що постраждалий може завдати шкоди собі та
                    оточуючим.</Text>

                <Text style={styles.paragraph}> 6.Перезбудження зазвичай триває недовго і може перейти у:</Text>

                {/*Those must be links to others screens*/}
                <Text style={styles.paragraph}>{/*NervoveTremtinnya*/}a. нервове тремтіння, </Text>
                <Text style={styles.paragraph}>{/*Plach*/}b. плач </Text>
                <Text style={styles.paragraph}>{/*Agresiya*/}c. агресивну поведінку</Text>

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
