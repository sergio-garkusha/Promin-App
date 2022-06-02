import React from 'react';
import { Text, View, ScrollView} from 'react-native';
import { ThemeContext } from '@components/ThemeProvider';
import Bullet from '@components/Bullet';
import Header from '@components/Header';
import resolveStyles from '@styles/subpage';

export default function Plach({ navigation }) {
    const { theme } = React.useContext(ThemeContext);
    const styles = resolveStyles(theme);
    return (
        <View>
            <Header backButton navigation={navigation} />
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.header}>Плач </Text>

                    <Text style={styles.header2}>В цій ситуації:</Text>

                    <Bullet symbol='1.' style={styles.paragraph}>Не залишайте потерпілого одного. </Bullet>

                    <Bullet symbol='2.' style={styles.paragraph}>Встановіть фізичний контакт з потерпілим (візьміть за руку, покладіть
                        свою руку йому на плече або спину, погладьте його по голові). Дайте потерпілому відчути, що ви
                        поряд. </Bullet>
                    <Bullet symbol='3.' style={styles.paragraph}>Не намагайтесь заспокоїти потерпілого що. Дайте йому можливість
                        виплакатись і виговоритись, “виплеснути” із себе горе, страх, образу. </Bullet>
                    <Bullet symbol='1.' style={styles.paragraph}>Нічого не питайте, на давайте порад. Ваше завдання -
                        вислухати. </Bullet>
                    
                    <View style={styles.spacer}/>
                </View>
            </ScrollView>
        </View>
    )
}
