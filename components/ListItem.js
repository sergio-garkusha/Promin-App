import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import { isMobile } from "/helpers/utils";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Caret from "/icons/Caret";

export default function ListItem(props) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const computedTheme = computeTheme();
  const styles = resolveLocalStyles(computedTheme, computeFontSize);
  const caretColor = computedTheme === "dark" ?
    props.isButton && "#27335A" || "#9AA3C5" :
    props.isButton && "#FFF" || "#666";

  const caretWebQFix = !isMobile() && props.prefsCtx && { marginLeft: -20 };

  return (
    <View style={props.padded && styles.padded}>
      <View
        style={[
          styles.container,
          props.roundTop && styles.roundTop,
          props.roundBottom ? styles.roundBottom : styles.spacer,
        ]}
      >
        <TouchableOpacity style={
          [props.prefsCtx && styles.button || styles.listItem,
          props.prefsCtx && !props.last && styles.buttonLast]
        }
          onPress={props.onPress}
        >
          {props.icon && (typeof styles.text === 'function'
            ? props.icon
            : <Text style={styles.icon}>{props.icon}</Text>
          )}
          <Text style={styles.text}>{props.title}</Text>
          <Caret style={[styles.caret, caretWebQFix]} prefThemeColor={caretColor} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const resolveLocalStyles = (theme, computeFS) => {
  const borderColor = theme === "dark" ? "#3D486C" : "#E6E7ED";
  const backgroundColor = theme === "dark" ? "#27335A" : "#FFF";
  const color = theme === "dark" ? "#FFF" : "#000";
  return StyleSheet.create({
    listItem: {
      alignItems: "center",
      flexDirection: "row",
      minHeight: 60,
      padding: 5,
      paddingLeft: 16,
      paddingRight: 10,
      width: "100%"
    },
    button: {
      alignItems: "center",
      flexDirection: "row",
      minHeight: 60,
      padding: 5,
      paddingLeft: 0,
      paddingRight: 0,
      width: "100%"
    },
    buttonLast: {
      borderBottomColor: borderColor,
      borderBottomWidth: 1
    },
    caret: {
      flex: 1,
      height: 15,
      width: 2,
      marginRight: 8
    },
    container: {
      alignItems: "center",
      backgroundColor,
    },
    icon: {
      flex: 3,
      fontSize: computeFS(19),
      marginRight: 16,
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
      fontSize: computeFS(17),
      textAlign: "left",
    },
  });
};
