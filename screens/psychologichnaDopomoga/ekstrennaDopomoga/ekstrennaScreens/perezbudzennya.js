import * as React from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';

import Bullet from '../../../../components/Bullet';
import Header from '../../../../components/Header';
import head from '../../../../assets/images/head.png';

export default function Perezbudzennya({ navigation }) {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Header backButton navigation={navigation} />

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

                <View style={{justifyContent: 'center', alignItems: 'center', margin: '1em'}}>
                    <Image source={head} style={{ width: 286, height: 352 }} />
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
