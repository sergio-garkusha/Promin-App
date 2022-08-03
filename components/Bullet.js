import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { FontSizeContext } from "/components/FontSizeProvider";

export default function Bullet(props) {
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveLocalStyles(computeFontSize);
  return (
    <View style={styles.container}>
      <Text style={styles.bullet}>{props.symbol}</Text>
      <Text style={[props.style, { flex: 94 }]}>{props.children}</Text>
    </View>
  );
}

function resolveLocalStyles(computeFS) {
  return StyleSheet.create({
    container: {
      flexDirection: "row"
    },
    bullet: {
      flex: 6,
      fontFamily: "Ubuntu",
      fontSize: computeFS(17),
      fontWeight: "normal"
    }
  });
}
