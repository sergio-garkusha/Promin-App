import { StyleSheet } from "react-native";

const resolveStyles = (theme, computeFS) => {
  const backgroundColor = theme === "dark" ? "#18203A" : "#F3F3F3";
  const color = theme === "dark" ? "#FFF" : "#000";

  return StyleSheet.create({
    container: {
      backgroundColor,
    },
    header: {
      color,
      fontFamily: "Ubuntu_M",
      fontSize: computeFS(25),
      fontWeight: "normal",
      margin: 15,
      marginTop: 40,
      textAlign: "left",
    },
    header2: {
      color,
      fontFamily: "Ubuntu_M",
      fontSize: computeFS(19),
      fontWeight: "normal",
      margin: 15,
      textAlign: "left",
    },
    paragraph: {
      color,
      fontFamily: "Ubuntu",
      fontSize: computeFS(17),
      fontWeight: "normal",
      margin: 5,
      marginBottom: 15,
      textAlign: "left",
    },
    roundImage: {
      borderRadius: 200 / 2,
      height: 200,
      width: 200,
    },
    spacer: {
      height: 50,
    },
  });
};

export default resolveStyles;
