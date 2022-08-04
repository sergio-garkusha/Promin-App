import React from "react";
import { Text, View } from "react-native";

export default function Bullet(props) {
  return (
    <View style={{ flexDirection: "row" }}>
      <Text style={[props.style, { flex: 6 }]}>{props.symbol}</Text>
      <Text style={[props.style, { flex: 94 }]}>{props.children}</Text>
    </View>
  );
}
