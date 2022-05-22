import * as React from 'react';
import {Text, View, StyleSheet, Button, Image, ScrollView} from 'react-native';

import Bullet from '../../../../components/Bullet';
import Header from '../../../../components/Header';

export default function NervoveTremtinnya({ navigation }) {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Header backButton navigation={navigation} />

                <Text style={styles.header}>Нервове тремтіння </Text>

                <Text style={styles.header2}>В цій ситуації:</Text>

                <Bullet symbol='1.' style={styles.listItem}>Потрібно посилити тремтіння. </Bullet>

                <Bullet symbol='2.' style={styles.listItem}>Візьміть постраждалого за плечі і сильно, різко потрясіть протягом
                    10-15 секунд. </Bullet>
                <Bullet symbol='3.' style={styles.listItem}>Продовжуйте говорити з потерпілим щоб він не сприйняв ваші дії як
                    напад. </Bullet>
                <Bullet symbol='4.' style={styles.listItem}>Після завершення реакції потрібно дати постраждалому можливість
                    відпочити. Бажано вкласти спати. </Bullet>

                <Text style={styles.header2}>Не можна:</Text>

                <Bullet symbol='•' style={styles.listItem}>Обіймати постраждалого або притискати до себе; </Bullet>
                <Bullet symbol='•' style={styles.listItem}>Накривати постраждалого чимось теплим; </Bullet>
                <Bullet symbol='•' style={styles.listItem}>Заспокоювати постраждалого, казати, щоб він взяв себе в руки. </Bullet>
            </View>
        </ScrollView>
    );
};

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
