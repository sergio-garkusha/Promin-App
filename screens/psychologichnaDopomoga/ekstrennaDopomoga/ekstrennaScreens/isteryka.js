import * as React from 'react';
import {Text, View, StyleSheet, Button, Image, ScrollView} from 'react-native';

import Bullet from '../../../../components/Bullet';
import Header from '../../../../components/Header';

export default function Isteryka({ navigation }) {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Header backButton navigation={navigation} />

                <Text style={styles.header}>Істерика</Text>

                <Text style={styles.header2}>В цій ситуації:</Text>

                <Bullet symbol='1. ' style={styles.listItem}>Попросіть глядачів піти. Залишіться з потерпілим наодинці, якщо це
                    безпечно для вас.</Bullet>
                <Bullet symbol='2. ' style={styles.listItem}>Неочікувано зробіть якусь дію, яка може сильно здивувати (можна дати
                    ляпаса, облити водою, щось голосно кинути, різко крикнути на потерпілого).</Bullet>
                <Bullet symbol='3. ' style={styles.listItem}>Говоріть з потерпілим короткими фразами, впевненим тоном (“Випий
                    води”, “Вмийся”). </Bullet>
                <Bullet symbol='4. ' style={styles.listItem}>Після істерики наступає виснаження. Покладіть постраждалого спати. До
                    прибуття спеціаліста наглядайте за його станом. </Bullet>
            </View>
        </ScrollView>
    );
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
