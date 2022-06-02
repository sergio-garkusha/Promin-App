import React from 'react';
import { StyleSheet } from 'react-native';

const resolveStyles = (theme) => {
  const backgroundColor = theme === 'dark' ? '#18203A' : '#F3F3F3';
  const color = theme === 'dark' ? '#FFF' : '#000';

  return StyleSheet.create({ 
    container: {
      paddingTop: 110,
      flex: 1,
      justifyContent: 'center',
      backgroundColor
    },
    paragraph: {
      color,
      margin: 5,
      fontFamily: 'Ubuntu',
      fontSize: 17,
      fontWeight: 'normal',
      textAlign: 'left',
      marginBottom: 15
    },
    header: {
      margin: 15,
      marginTop: 40,
      fontFamily: 'Ubuntu_M',
      fontSize: 25,
      fontWeight: 'normal',
      textAlign: 'left',
      color
    },
    header2: {
      margin: 15,
      fontFamily: 'Ubuntu_M',
      fontSize: 19,
      fontWeight: 'normal',
      textAlign: 'left',
      color
    },
    roundImage: {
      width: 200,
      height: 200,
      borderRadius: 200 / 2
    },
    spacer: {
      height: 50
    }
  })
};

export default resolveStyles;