import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import caretLight from "@assets/caret_light_large.png";
import { ThemeContext } from "@components/ThemeProvider";

export default function ListItem(props) {
  const { computeTheme } = React.useContext(ThemeContext);
  const styles = resolveLocalStyles(computeTheme());
  return (
    <View style={props.padded && styles.padded}>
      <View
        style={[
          styles.container,
          props.roundTop && styles.roundTop,
          props.roundBottom ? styles.roundBottom : styles.spacer,
        ]}
      >
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
          {props.icon && <Text style={styles.icon}>{props.icon}</Text>}
          <Text style={styles.text}>{props.title}</Text>
          <Image style={styles.caret} source={caretLight} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const resolveLocalStyles = (theme) => {
  const backgroundColor = theme === "dark" ? "#27335A" : "#FFF";
  const color = theme === "dark" ? "#FFF" : "#000";
  return StyleSheet.create({
    button: {
      alignItems: "center",
      flexDirection: "row",
      minHeight: 60,
      padding: 5,
      paddingLeft: 10,
      paddingRight: 10,
      width: "100%",
    },
    caret: {
      flex: 1,
      height: 15,
      width: 2,
    },
    container: {
      alignItems: "center",
      backgroundColor,
    },
    icon: {
      flex: 3,
      fontSize: 19,
      marginRight: 15,
      width: 20,
    },
    padded: {
      paddingLeft: 20,
      paddingRight: 20,
    },
    roundBottom: {
      borderBottomLeftRadius: 12,
      borderBottomRightRadius: 12,
    },
    roundTop: {
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
    },
    spacer: {
      marginBottom: 1,
    },
    text: {
      color,
      flex: 25,
      fontFamily: "Ubuntu",
      fontSize: 17,
      textAlign: "left",
    },
  });
};
