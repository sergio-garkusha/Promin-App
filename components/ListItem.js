import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import caretLight from 'assets/caret_light_large.png';
import { ThemeContext } from 'ThemeProvider';

export default function ListItem(props) {
  const { theme } = React.useContext(ThemeContext);
  const styles = resolveLocalStyles(theme);
  return (
    <View style={props.padded && styles.padded}>
      <View style={[
        styles.container,
        props.roundTop && styles.roundTop,
        props.roundBottom ? styles.roundBottom : styles.spacer
      ] }>
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
          {props.icon && <Text style={styles.icon}>{props.icon}</Text> }
          <Text style={styles.text}>{props.title}</Text>
          <Image style={styles.caret} source={caretLight} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const resolveLocalStyles = theme => {
  const backgroundColor = theme === 'dark' ? '#27335A' : '#FFF';
  const color = theme === 'dark' ? '#FFF' : '#000';
  return StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor
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
    minHeight: 60,
    alignItems: 'center',
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row'
  },
  icon: {
    fontSize: 19,
    width: 20,
    marginRight: 15,
    flex: 3
  },
  text: {
    fontSize: 17,
    color,
    textAlign: 'left',
    fontFamily: 'Ubuntu',
    flex: 25
  },
  caret: {
    height: 15,
    width: 2,
    flex: 1
  },
  padded:{
    paddingLeft: 20,
    paddingRight: 20
  }
})};
