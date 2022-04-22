import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function ListItem(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create((() =>
  { 
    let _fontSizePx = 16
    let _height = 72
    let _vertCenterPadding = 30; //_height/2 - _fontSizePx
    var styles = {
      container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: _vertCenterPadding,
        backgroundColor: '#66DDFF'
      },
      paragraph: {
        margin: 24,
        marginTop: 0,
        fontSize: _fontSizePx,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      logo: {
        height: 128,
        width: 128,
      }
      
    }
    return(styles)
  }) ()
);
