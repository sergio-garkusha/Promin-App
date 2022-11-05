import React from "react"
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import Collapsible from "react-native-collapsible";

import { isMobile } from "/helpers/utils";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Caret from "/icons/Caret";

export default function Accordion({ title, children }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const computedTheme = computeTheme();
  const styles = resolveLocalStyles(computedTheme, computeFontSize);
  const caretColor = computedTheme === "dark" ? "#9AA3C5" : "#666";
  const [isCollapsed, setIsCollapsed] = React.useState(true);

  return (
    <View style={styles.accordion}>
      <TouchableWithoutFeedback onPress={() => setIsCollapsed(!isCollapsed)}>
        <View style={styles.titleBox}>
          <Text style={styles.title}>{title}</Text>
          <Caret style={styles.caret} prefThemeColor={caretColor} />
        </View>
      </TouchableWithoutFeedback>
      <Collapsible
        collapsed={isCollapsed}
        style={styles.body}
      >
        <View style={styles.divider} />
        {children}
      </Collapsible>
    </View>
  )
}

const resolveLocalStyles = (theme, computeFS) => {
  const backgroundColor = theme === "dark" ? "#27335A" : "#FFF";
  const color = theme === "dark" ? "#FFF" : "#000";
  const caretColor = theme === "dark" ? "#9AA3C5" : "#666";
  const dividerColor = theme === "dark" ? "#3D486C" : "#E6E7ED";

  return StyleSheet.create({
    accordion: {
      borderRadius: 12,
      backgroundColor: backgroundColor,
      marginBottom: 8
    },
    titleBox: {
      paddingLeft: 16,
      paddingRight: 16,
      height: 57,
      flexDirection: 'row',
      alignItems: "center",
    },
    title: {
      fontSize: computeFS(17),
      fontWeight: "bold",
      backgroundColor: backgroundColor,
      color,
      flex: 1
    },
    caret: {
      height: 20,
      width: 20,
      marginTop: !isMobile() ? 22 : 'auto',
      marginBottom: 'auto',
      transform: [{ rotate: '90deg' }],
      color: caretColor
    },
    divider: {
      height: 1,
      backgroundColor: dividerColor,
      marginBottom: 15
    },
    body: {
      paddingLeft: 16,
      paddingRight: 16,
      backgroundColor: backgroundColor,
      borderBottomLeftRadius: 12,
      borderBottomRightRadius: 12,
      fontSize: computeFS(17),
      color
    }
  })
}
