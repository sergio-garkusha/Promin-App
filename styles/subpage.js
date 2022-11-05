import { StyleSheet } from "react-native";
import { isMobile } from "/helpers/utils";

const IS_WEB = !isMobile();

const resolveStyles = (theme, computeFS) => {
  const backgroundColor = theme === "dark" ? "#18203A" : "#F3F3F3";
  const color = theme === "dark" ? "#FFF" : "#000";
  const sectHCol = theme === "dark" ? "#9AA3C5" : "#666";
  const labelCol = theme === "dark" ? "#FFF" : "#666";

  const HEADER_SIZE = 88;
  const H1_TOP_MARGIN = 40;

  return StyleSheet.create({
    accordeonTop: { marginLeft: 15, marginRight: 15 },
    container: {
      width: IS_WEB ? 420 : "auto",
      backgroundColor,
      marginBottom: 20,
      marginTop: 26,
      marginLeft: IS_WEB ? "auto" : 24,
      marginRight: IS_WEB ? "auto" : 24
    },
    header: {
      color,
      fontFamily: "Ubuntu_M",
      fontSize: computeFS(25),
      fontWeight: "normal",
      marginTop: 40,
      marginBottom: 32,
      textAlign: "left"
    },
    withoutHeader: {
      paddingTop: 20
    },
    header2: {
      color: labelCol,
      fontFamily: "Ubuntu_M",
      fontSize: computeFS(19),
      fontWeight: "normal",
      marginBottom: 32,
      textAlign: "left"
    },
    sectionHeader: {
      color: sectHCol,
      fontFamily: "Ubuntu",
      fontSize: computeFS(18),
      lineHeight: computeFS(21),
      marginBottom: 16,
      marginTop: 32,
      textAlign: "left"
    },
    paragraph: {
      color,
      fontFamily: "Ubuntu",
      fontSize: computeFS(17),
      fontWeight: "normal",
      marginBottom: 15,
      textAlign: "left"
    },
    roundImage: {
      borderRadius: 200 / 2,
      height: 200,
      width: 200
    },
    subBullet: {
      marginLeft: 30, marginRight: 30
    },
    spacer: { height: HEADER_SIZE + H1_TOP_MARGIN }
  });
};

export default resolveStyles;
