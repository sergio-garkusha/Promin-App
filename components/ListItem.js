import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function ListItem(props) {
  return (
    <View style={[
      styles.container, 
      props.roundTop && styles.roundTop,
      props.roundBottom ? styles.roundBottom : styles.spacer
    ] }>
      <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Text style={styles.text}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  roundTop:{
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  roundBottom:{
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  spacer: {
    marginBottom: 1
  },
  button:{
    width: '100%',
    minHeight: 72,
    justifyContent: 'center',
    padding: 10
  },
  text: {
    fontSize: 17,
    color: '#000000',
    textAlign: 'left',
    fontFamily: 'Ubuntu'
  }
});
