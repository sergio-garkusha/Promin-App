import * as React from 'react';
import {Text, View, StyleSheet, Button, Image, ScrollView} from 'react-native';

import Bullet from '../../../../components/Bullet';
import Header from '../../../../components/Header';

export default function Marennya({ navigation }) {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Header backButton navigation={navigation} />

                <Text style={styles.header}>Марення і галюцинації</Text>

                <Text style={styles.header2}>В цій ситуації:</Text>

                <Bullet symbol='1. ' style={styles.listItem}>Зверніться до медичних працівників, викличте бригаду швидкої
                    психіатричної допомоги. </Bullet>

                <Bullet symbol='2. ' style={styles.listItem}>До прибуття спеціалістів слідкуйте за тим щоб постраждалий не
                    зашкодив собі та оточуючим.</Bullet>

                <Bullet symbol='3. ' style={styles.listItem}>Ізолюйте постраждалого але не залишайте наодинці. </Bullet>

                <Bullet symbol='4. ' style={styles.listItem}>Говоріть з постраждалим спокійним голосом. Погоджуйтесь з ним, не
                    намагайтесь переконати його. Пам’ятайте, в такій ситуації переконати постраждалого неможливо.
                </Bullet>
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
