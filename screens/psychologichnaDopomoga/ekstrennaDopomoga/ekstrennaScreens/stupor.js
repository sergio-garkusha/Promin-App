import * as React from 'react';
import {Text, View, StyleSheet, Button, Image, ScrollView} from 'react-native';

import Bullet from '../../../../components/Bullet';
import Header from '../../../../components/Header';
import head from '../../../../assets/images/head.png';
import two from '../../../../assets/images/twoGuys.png';
import thumbs from '../../../../assets/images/thumbs.png';

export default function Stupor({ navigation }) {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Header backButton navigation={navigation} />

                <Text style={styles.header}>Ступор</Text>

                <Text style={styles.header2}>В цій ситуації:</Text>

                <Bullet symbol='1.' style={styles.listItem}>Загніть постраждалій усі пальці на руках окрім великих. Великі пальці
                    мають бути виставлені назовні. </Bullet>

                <View style={{justifyContent: 'center', alignItems: 'center', margin: '1em'}}>
                    <Image source={thumbs} style={{ width: 490, height: 242 }} />
                </View>

                <Bullet symbol='2.' style={styles.listItem}>Кінчиками великого та вказівного пальців массуйте постраждалій точки,
                    розташовані на лобі, над очима рівно посередині між лінією росту волосся і бровами, чітко над
                    зіницями.</Bullet>

                <View style={{justifyContent: 'center', alignItems: 'center', margin: '1em', width: '100%'}}>
                    <Image source={head} style={{ width: 286, height: 352 }} />
                    <Image source={two} style={{ width: 352, height: 652 }} />
                </View>

                <Bullet symbol='3.' style={styles.listItem}>Долоню вільної руки покладіть на грудну клітину постраждалої.
                    Підлаштуйте ритм свого дихання під дихання постраждалої. </Bullet>

                <Bullet symbol='4.' style={styles.listItem}>Людина що знаходиться в ступорі, може чути і бачити. Тому говоріть їй
                    на вухо тихо, повільно і чітко те, що може викликати сильні емоції (краще негативні). Необхідно будь
                    якими методами добитись реакції постраждалої, вивести її з оціпеніння. </Bullet>
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
