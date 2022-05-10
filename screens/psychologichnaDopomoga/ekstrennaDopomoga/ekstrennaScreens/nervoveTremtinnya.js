import * as React from 'react';
import {Text, View, StyleSheet, Button, Image, ScrollView} from 'react-native';

export default function NervoveTremtinnya() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.paragraph}>Назад</Text>

                <Text style={styles.header}>Нервове тремтіння </Text>

                <Text style={styles.paragraph}>В цій ситуації: </Text>

                <Text style={styles.paragraph}> 1. Потрібно посилити тремтіння. </Text>

                <Text style={styles.paragraph}> 2. Візьміть постраждалого за плечі і сильно, різко потрясіть протягом
                    10-15 секунд. </Text>
                <Text style={styles.paragraph}> 3. Продовжуйте говорити з потерпілим щоб він не сприйняв ваші дії як
                    напад. </Text>
                <Text style={styles.paragraph}> 4. Після завершення реакції потрібно дати постраждалому можливість
                    відпочити. Бажано вкласти спати. </Text>

                <Text style={styles.paragraph}> Не можна: </Text>

                <Text style={styles.paragraph}> • Обіймати постраждалого або притискати до себе; </Text>
                <Text style={styles.paragraph}> • накривати постраждалого чимось теплим; </Text>
                <Text style={styles.paragraph}> • заспокоювати постраждалого, казати, щоб він взяв себе в руки. </Text>
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
