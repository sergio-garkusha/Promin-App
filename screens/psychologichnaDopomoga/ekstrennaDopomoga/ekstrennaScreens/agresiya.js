import * as React from 'react';
import {Text, View, StyleSheet, Button, Image, ScrollView} from 'react-native';

import Bullet from '../../../../components/Bullet';
import Header from '../../../../components/Header';
import styles from '../../../../styles'

export default function Agresiya({ navigation }) {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Header backButton navigation={navigation} />

                <Text style={styles.header}>Агресія </Text>

                <Text style={styles.header2}>В цій ситуації: </Text>

                <Bullet symbol='1.'  style={styles.paragraph}>Мінімізуйте кількість людей навколо. </Bullet>

                <Bullet symbol='2.'  style={styles.paragraph}>Дайте постраждалому можливість “випустити пару” (наприклад,
                    виговоритись або “побити” подушку). </Bullet>
                <Bullet symbol='3.'  style={styles.paragraph}>Дайте йому завдання яке вимагає високого фізичного
                    навантаження.</Bullet>
                <Bullet symbol='4.'  style={styles.paragraph}>
                    Будьте доброзичливим. Навіть якщо ви не згодні з постраждалим, не спрямовуйте звинувачування на
                    нього, висловлюйтесь тільки стосовно його дій. Інакше агресивні дії будуть направлені на
                    вас. </Bullet>

                <Bullet symbol='5.'  style={styles.paragraph}>Не можна говорити: “Що ж ти за людина така!”. Краще сказати “Ти дуже
                    роззлючений, тобі хочеться все рознести вщент. Давай разом спробуємо знайти вихід з цієї
                    ситуації” </Bullet>

                <Bullet symbol='6.'  style={styles.paragraph}>Намагайтесь зняти напругу смішними коментарями або діями. </Bullet>

                <Bullet symbol='7.'  style={styles.paragraph}>Можна погасити агресію страхом покарання: </Bullet>
                
                <Bullet>
                    <Bullet symbol='а)'  style={styles.paragraph}>якщо нема цілі отримати вигоду від агресивної поведінки;</Bullet>
                    <Bullet symbol='б)'  style={styles.paragraph}>якщо покарання строге і є велика імовірність що воно буде
                        виконане.
                    </Bullet>
                </Bullet>

                <Bullet symbol='8.' style={styles.paragraph}>Якщо не допомогти розгніваній людині це призведе до небезпечних
                    наслідків: через зниження контролю над своїми діями людина буде скоювати необдумані вчинки, може
                    завдати шкоди собі або іншим. </Bullet>
            </View>
        </ScrollView>
    )
}