import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { ThemeContext } from 'ThemeProvider';
import Header from 'components/Header';
import ListItem from "components/ListItem";

var navigateAway = () => {console.log("navigation")}

export default function Dytuni({ navigation }) {
    const { theme } = React.useContext(ThemeContext);
    const styles = resolveLocalStyles(theme);
    return (
        <View>
            <Header backButton navigation={navigation} />
            <ScrollView>
                <View style={styles.container}>
                    <View style={{padding: 20}}>
                        <Text style={styles.title}>Дитині </Text>

                        <ListItem roundTop title="Ігри" onPress={navigateAway}/>
                        <ListItem title="Мультфільми" onPress={navigateAway}/>
                        <ListItem title="Антистресова активність" onPress={navigateAway}/>
                        <ListItem roundBottom title="Часті запитання" onPress={navigateAway}/>
                    </View>
                </View>
            </ScrollView>
        </View>
)};

const resolveLocalStyles = theme => {
    const backgroundColor = theme === 'dark' ? '#18203A' : '#F3F3F3';
    const color = theme === 'dark' ? '#848EB0' : '#666';
    return StyleSheet.create({
    container: {
        paddingTop: 110,
        flex: 1,
        justifyContent: 'center',
        backgroundColor
    },
    title: {
        marginTop:32,
        marginBottom:16,
        fontFamily: 'Ubuntu',
        fontSize: 18,
        lineHeight: 21,
        textAlign: 'left',
        color
    },
    roundImage: {
        width: 200,
        height: 200,
        borderRadius: 200/ 2
    },
    header: {
        margin: 5,
        fontSize: 22,
        fontWeight: 'normal',
        textAlign: 'center',
    },
    Button:{
        padding:4
    }
})};
