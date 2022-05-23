import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';

import Header from '../../../components/Header'
import ListItem from "../../../components/ListItem";

var navigateAway = () => {console.log("navigation")}

export default function EkstrennaDopomoga({ navigation }) {
    const navigateTo = ( destination ) => {
        navigation.push( destination )
    }

    return (
        <View>
            <Header backButton navigation={navigation} />
            <ScrollView>
                <View style={styles.container}>
                    <View style={{padding: 20}}>
                        
                        <Text style={styles.title}> Психологічна допомога: </Text>

                        <ListItem roundTop title="Страх" onPress={()=>navigateTo("Strah")}/>
                        <ListItem title="Істерика" onPress={()=>navigateTo("Isteryka")}/>
                        <ListItem title="Плач" onPress={()=>navigateTo("Plach")}/>
                        <ListItem title="Ступор" onPress={()=>navigateTo("Stupor")}/>
                        <ListItem title="Нервове тремтіння" onPress={()=>navigateTo("NervoveTremtinnya")}/>
                        <ListItem title="Агресія" onPress={()=>navigateTo("Agresiya")}/>
                        <ListItem title="Марення і галюцинації" onPress={()=>navigateTo("Marennya")}/>
                        <ListItem roundBottom title="Перезбудження" onPress={()=>navigateTo("Perezbudzennya")}/>
                    </View>
                </View>
            </ScrollView>
        </View>
    )}
const styles = StyleSheet.create({
    container: {
        paddingTop: 110,
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F3F3F3',
    },
    title: {
        marginTop:32,
        marginBottom:16,
        fontFamily: 'Ubuntu',
        fontSize: 18,
        lineHeight: 21,
        textAlign: 'left',
        color: '#666666'
    },
    roundImage: {
        width: 200,
        height: 200,
        borderRadius: 200/ 2
    },
    Button:{
        padding:4
    }
});
