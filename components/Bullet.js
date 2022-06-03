import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Bullet(props) {
  return (
    <View style={styles.container}>
      <Text style={[props.style, { flex: 5 }]}>{props.symbol}</Text>
      <Text style={[props.style, { flex: 95 }]}>{props.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
