import * as React from 'react';
import {Text, View, StyleSheet, Button, Image, ScrollView} from 'react-native';

export default function Agresiya() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.paragraph}>Назад</Text>

                <Text style={styles.header}>Агресія </Text>

                <Text style={styles.paragraph}>В цій ситуації: </Text>

                <Text style={styles.paragraph}> 1. Мінімізуйте кількість людей навколо. </Text>

                <Text style={styles.paragraph}> 2. Дайте постраждалому можливість “випустити пару” (наприклад,
                    виговоритись або “побити” подушку). </Text>
                <Text style={styles.paragraph}> 3. Дайте йому завдання яке вимагає високого фізичного
                    навантаження.</Text>
                <Text style={styles.paragraph}> 4.
                    Будьте доброзичливим. Навіть якщо ви не згодні з постраждалим, не спрямовуйте звинувачування на
                    нього, висловлюйтесь тільки стосовно його дій. Інакше агресивні дії будуть направлені на
                    вас. </Text>

                <Text style={styles.paragraph}> 5. Не можна говорити: “Що ж ти за людина така!”. Краще сказати “Ти дуже
                    роззлючений, тобі хочеться все рознести вщент. Давай разом спробуємо знайти вихід з цієї
                    ситуації” </Text>

                <Text style={styles.paragraph}> 6. Намагайтесь зняти напругу смішними коментарями або діями. </Text>

                <Text style={styles.paragraph}> 7. Можна погасити агресію страхом покарання: </Text>

                <Text style={styles.paragraph}> a. якщо нема цілі отримати вигоду від агресивної поведінки;</Text>
                <Text style={styles.paragraph}> b. якщо покарання строге і є велика імовірність що воно буде
                    виконане.</Text>

                <Text style={styles.paragraph}> 8. Якщо не допомогти розгніваній людині це призведе до небезпечних
                    наслідків: через зниження контролю над своїми діями людина буде скоювати необдумані вчинки, може
                    завдати шкоди собі або іншим. </Text>
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
