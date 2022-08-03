import React from "react";
import { Text } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import resolveStyles from "/styles/subpage";

export default function Bullet({ children, style }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveStyles(computeTheme(), computeFontSize);

  return <Text style={[styles.paragraph, style]}>{children}</Text>
}
