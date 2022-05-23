import * as React from 'react';
import {Text, View, StyleSheet, Button, Image, ScrollView} from 'react-native';

import Bullet from '../../../../components/Bullet';
import Header from '../../../../components/Header';
import styles from '../../../../styles'

export default function NervoveTremtinnya({ navigation }) {
    return (
        <View>
            <Header backButton navigation={navigation} />
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.header}>Нервове тремтіння </Text>

                    <Text style={styles.header2}>В цій ситуації:</Text>

                    <Bullet symbol='1.' style={styles.paragraph}>Потрібно посилити тремтіння. </Bullet>

                    <Bullet symbol='2.' style={styles.paragraph}>Візьміть постраждалого за плечі і сильно, різко потрясіть протягом
                        10-15 секунд. </Bullet>
                    <Bullet symbol='3.' style={styles.paragraph}>Продовжуйте говорити з потерпілим щоб він не сприйняв ваші дії як
                        напад. </Bullet>
                    <Bullet symbol='4.' style={styles.paragraph}>Після завершення реакції потрібно дати постраждалому можливість
                        відпочити. Бажано вкласти спати. </Bullet>

                    <Text style={styles.header2}>Не можна:</Text>

                    <Bullet symbol='•' style={styles.paragraph}>Обіймати постраждалого або притискати до себе; </Bullet>
                    <Bullet symbol='•' style={styles.paragraph}>Накривати постраждалого чимось теплим; </Bullet>
                    <Bullet symbol='•' style={styles.paragraph}>Заспокоювати постраждалого, казати, щоб він взяв себе в руки. </Bullet>

                    <View style={styles.spacer}/>
                </View>
            </ScrollView>
        </View>
    );
};
