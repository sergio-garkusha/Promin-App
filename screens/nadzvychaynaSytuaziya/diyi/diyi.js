import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { ThemeContext } from '@components/ThemeProvider';
import Header from '@components/Header';
import ListItem from '@components/ListItem';

const navigateAway = () => {console.log("navigation")}

export default function Diyi({ navigation }) {
    const navigateTo = (destination) => {
        navigation.push(destination)
    };

    const { theme } = React.useContext(ThemeContext);
    const styles = resolveLocalStyles(theme);

    return (
        <View>
            <Header backButton navigation={navigation} />
            <ScrollView>
                <View style={styles.container}>
                    <View style={{padding: 20}}>
                        <Text style={styles.title}>Надзвичайна ситуація - дії</Text>

                        <ListItem roundTop title="Вимкнули телебачення" onPress={navigateAway}/>
                        <ListItem title="Повітряна тривога" onPress={navigateAway}/>
                        <ListItem title="Евакуація" onPress={navigateAway}/>
                        <ListItem title="Вибухонебезпечні знахідки" onPress={navigateAway}/>
                        <ListItem roundBottom title="Артилерійський обстріл" onPress={navigateAway}/>
                    </View>
                </View>
            </ScrollView>
        </View>
)}

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
            marginTop: 32,
            marginBottom: 16,
            fontFamily: 'Ubuntu',
            fontSize: 18,
            lineHeight: 21,
            textAlign: 'left',
            color
        }
    })
};
