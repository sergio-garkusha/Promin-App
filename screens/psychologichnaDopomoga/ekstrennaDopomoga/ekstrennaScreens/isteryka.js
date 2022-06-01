import * as React from 'react';
import {Text, View, ScrollView} from 'react-native';
import { ThemeContext } from 'ThemeProvider';
import Bullet from 'components/Bullet';
import Header from 'components/Header';
import resolveStyles from 'styles'

export default function Isteryka({ navigation }) {
    const { theme } = React.useContext(ThemeContext);
    const styles = resolveStyles(theme);
    return (
        <View>
            <Header backButton navigation={navigation} />
            <ScrollView>
                <View style={styles.container}>

                    <Text style={styles.header}>Істерика</Text>

                    <Text style={styles.header2}>В цій ситуації:</Text>

                    <Bullet symbol='1. ' style={styles.paragraph}>Попросіть глядачів піти. Залишіться з потерпілим наодинці, якщо це
                        безпечно для вас.</Bullet>
                    <Bullet symbol='2. ' style={styles.paragraph}>Неочікувано зробіть якусь дію, яка може сильно здивувати (можна дати
                        ляпаса, облити водою, щось голосно кинути, різко крикнути на потерпілого).</Bullet>
                    <Bullet symbol='3. ' style={styles.paragraph}>Говоріть з потерпілим короткими фразами, впевненим тоном (“Випий
                        води”, “Вмийся”). </Bullet>
                    <Bullet symbol='4. ' style={styles.paragraph}>Після істерики наступає виснаження. Покладіть постраждалого спати. До
                        прибуття спеціаліста наглядайте за його станом. </Bullet>
                    
                    <View style={styles.spacer}/>
                </View>
            </ScrollView>
        </View>
    );
}
