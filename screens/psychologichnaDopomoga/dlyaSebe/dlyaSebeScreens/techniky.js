import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Header from '@components/Header';
import { ThemeContext } from '@components/ThemeProvider';

import ListItem from "@components/ListItem";

var navigateAway = () => {console.log("navigation")}

export default function Techniky({ navigation }) {
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
                    <View style={{ padding: 20 }}>
                    <Text style={styles.title}>Техніки самодопомоги</Text>
                    <ListItem roundTop title="Дихальні вправи" onPress={navigateAway}/>
                    <ListItem title="Тілесні вправи" onPress={navigateAway}/>
                    <ListItem roundBottom title="Когнітивні вправи" onPress={navigateAway}/>
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
            marginBottom: 15,
            marginTop: 40,
            fontFamily: 'Ubuntu_M',
            fontSize: 25,
            fontWeight: 'normal',
            textAlign: 'left',
            color
        },
        roundImage: {
            width: 200,
            height: 200,
            borderRadius: 200 / 2
        },
        header: {
            margin: 5,
            fontSize: 22,
            fontWeight: 'normal',
            textAlign: 'center',
        },
        Button: {
            padding: 4
        },
        paragraph: {
            color,
            marginTop: 15,
            marginBottom: 25,
            textAlign: 'left',
            fontFamily: 'Ubuntu',
            fontStyle: 'normal',
            fontSize: 17,
            lineHeight: 24
        }
    })
};