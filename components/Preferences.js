import React from "react";
import * as Linking from "expo-linking";
import { Share } from "react-native";
import { EMAIL, ITUNES_ID, ANDROID_PKG_NAME, WEBSITE } from "@env";
// import * as StoreReview from "expo-store-review"; // Call to Review dep
import { Modal, StyleSheet, Text, Pressable, View, ScrollView } from "react-native";

import { isIOS, isAndroid, isMobile } from "/helpers/utils";
import { OverlayContext } from "/components/OverlayProvider";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import ListItem from "/components/ListItem";

import Sun from "/icons/Sun";
import Moon from "/icons/Moon";
import MoonSun from "/icons/MoonSun";

import HelpBtn from "/icons/buttons/01-help";
import ShareItBtn from "/icons/buttons/02-share";
import RateItBtn from "/icons/buttons/03-rate";
import AboutUsBtn from "/icons/buttons/04-about-us";
import LinksBtn from "/icons/buttons/05-useful-links";

const colorSchemeI18N = {
  light: "Світла",
  dark: "Темна",
  auto: "Системна"
};

const fontSizeI18N = {
  small: "Зменшений",
  default: "Системний",
  large: "Збільшений"
};

const Icon = ({ idx, style, color }) => {
  if (idx === 0) return <Sun style={style} prefthemecolor={color} />;
  if (idx === 1) return <Moon style={style} prefthemecolor={color} />;
  if (idx === 2) return <MoonSun style={style} prefthemecolor={color} />;
  return null;
};

function FontSizeButtons() {
  const { coefficient, subtractSize, defaultSize, addSize, computeFontSize } = React.useContext(FontSizeContext);
  const { computeTheme } = React.useContext(ThemeContext);
  const styles = resolveLocalStyles(computeTheme(), computeFontSize);

  const changeFontSize = (e, btn) => {
    if (btn === "default") defaultSize();
    if (btn === "small") subtractSize();
    if (btn === "large") addSize();
  };

  const fontStateDisplayer = () => {
    if (coefficient < 1) return fontSizeI18N.small;
    if (coefficient > 1) return fontSizeI18N.large;
    return fontSizeI18N.default;
  };

  return (
    <View style={styles.fontSizeSwitcher}>
      <View style={styles.labels}>
        <Text style={styles.label}>Розмір шрифта</Text>
        <Text style={styles.label}>{fontStateDisplayer()}</Text>
      </View>
      <View style={styles.colorSchemeButtonsRow}>
        {Object.keys(fontSizeI18N).map((el, idx) => {
          const btnSizeCoef = {
            fontSize: 14 + idx * 2,
            lineHeight: 16 + idx * 2,
            paddingTop: 4 - idx * 2
          };
          const pressableStyles = [styles.schemeSwitch];
          const textStyles = [styles.buttonText, btnSizeCoef];
          if (fontSizeI18N[el] === fontStateDisplayer()) {
            pressableStyles.push(styles.schemeSwitchActive);
            textStyles.push(styles.textStyleActive);
          }
          return (
            <Pressable
              key={idx}
              style={pressableStyles}
              onPress={(e) => changeFontSize(e, el)}
            >
              <Text style={textStyles}>A</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

function ThemeButtons() {
  const { isSys, theme, toggleTheme } = React.useContext(ThemeContext);
  const { computeTheme } = React.useContext(ThemeContext);
  const computedTheme = computeTheme();
  const styles = resolveLocalStyles(computedTheme);

  const iconColor = "#5177FF";
  const iconActiveColor = "#FFF";

  const switchTheme = (e, btn) => {
    toggleTheme(btn);
  };

  const themeStateDisplayer = () => {
    if (isSys) return "auto";
    if (theme === "light") return "light";
    if (theme === "dark") return "dark";
  };

  return (
    <View style={styles.colorScheme}>
      <View style={styles.labels}>
        <Text style={styles.label}>Тема</Text>
        <Text style={styles.label}>{colorSchemeI18N[themeStateDisplayer()]}</Text>
      </View>
      <View style={styles.colorSchemeButtonsRow}>
        {Object.keys(colorSchemeI18N).map((el, idx) => {
          const localStyles = [styles.schemeSwitch];
          let color = iconColor;
          if (el === themeStateDisplayer()) {
            localStyles.push(styles.schemeSwitchActive);
            color = iconActiveColor;
          }
          return (
            <Pressable
              key={idx}
              style={localStyles}
              onPress={(e) => switchTheme(e, el)}
            >
              <Icon
                key={idx}
                idx={idx}
                style={styles.buttonImage}
                color={color}
              />
            </Pressable>
          )
        })}
      </View>
    </View>
  );
}

function getSupportLink() {
  Linking.openURL(`mailto:${EMAIL}`);
}

function getStoreLink() {
  if (isAndroid()) {
    // Opens the Android Play Store directly
    Linking.openURL(`market://details?id=${ANDROID_PKG_NAME}&showAllReviews=true`);
  } else if (isIOS()) {
    // Opens the iOS App Store directly
    Linking.openURL(
      `itms-apps://itunes.apple.com/app/viewContentsUserReviews/id${ITUNES_ID}?action=write-review`
    );
  }
}

function getStoreText() {
  if (isAndroid())
    return "Оціни в Google Play";
  if (isIOS())
    return "Оціни в App Store"
  return false;
}

const title = "Завантажуй Промінь";
const message = "Промінь - твій кишеньковий довідник з психологічної допомоги у кризових ситуаціях";
const options = {
  title,
  url: WEBSITE,
  message,
};

if (isIOS()) {
  options.url = `${title}\n${WEBSITE}\n${message}`
}

options.message = `${title}\n${WEBSITE}\n${message}`

export default function Preferences({ navigation, modalVisible, setModalVisible }) {
  const { toggleOverlay } = React.useContext(OverlayContext);
  const { computeTheme } = React.useContext(ThemeContext);
  const computedTheme = computeTheme();
  const styles = resolveLocalStyles(computedTheme);
  const iconsColor = computedTheme === "dark" ? "#FFF" : "#666";

  const goTo = (dest) => {
    // close preferences
    setModalVisible(!modalVisible);
    toggleOverlay(false);
    // navigate
    navigation.push(dest);
  };

  const sharePromin = async (customOptions = options) => {
    try {
      const result = await Share.share(customOptions);
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // console.log("shared with activity type of result.activityType");
        } else {
          // console.log("shared");
        }
      } else if (result.action === Share.dismissedAction) {
        // console.log("dismissed");
      }
    } catch (error) {
      console.log("Share Error:", err);
    }
  };

  /*
   * Little Call to Review Modal
   *
   * For future releases
   */
  // React.useEffect(() => {
  //   StoreReview.hasAction()
  //     .then(hasAction => {
  //       StoreReview.isAvailableAsync()
  //         .then(isAvailable => {
  //           if (hasAction && isAvailable) {
  //             StoreReview.requestReview()
  //           }
  //         })
  //     })
  // });

  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent visible={modalVisible}>
        <ScrollView contentContainerStyle={styles.bottomedView}>
          <View style={styles.modalView}>
            <View style={styles.titleRow}>
              <Text style={styles.title}>Налаштування</Text>
              <Pressable
                style={styles.closeButton}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  toggleOverlay(false);
                }}
              >
                <Text style={styles.closeBtnTxt}>✕</Text>
              </Pressable>
            </View>
            <ThemeButtons />
            <FontSizeButtons />

            <View style={styles.buttonsList}>
              {/* <ListItem
                roundTop
                prefsCtx
                icon={<HelpBtn style={styles.iconBtn} prefthemecolor={iconsColor} />}
                isButton
                title="Підтримка"
                onPress={getSupportLink}
                roundBottom
              /> */}
              <ListItem
                roundTop
                prefsCtx
                icon={<HelpBtn style={styles.iconBtn} prefthemecolor={iconsColor} />}
                isButton
                title="Медичний дисклеймер"
                onPress={() => goTo("DisclaimerScreen")}
                roundBottom
              />
              {isMobile() && (
                <>
                  <ListItem
                    roundTop
                    prefsCtx
                    icon={<ShareItBtn style={styles.iconBtn} prefthemecolor={iconsColor} />}
                    isButton
                    title="Розкажи друзям"
                    onPress={async () => await sharePromin()}
                    roundBottom
                  />
                  <ListItem
                    roundTop
                    prefsCtx
                    icon={<RateItBtn style={styles.iconBtn} prefthemecolor={iconsColor} />}
                    isButton
                    title={getStoreText()}
                    onPress={getStoreLink}
                    roundBottom
                  />
                </>)}
              <ListItem
                roundTop
                prefsCtx
                icon={<AboutUsBtn style={styles.iconBtn} prefthemecolor={iconsColor} />}
                title="Про нас"
                onPress={() => goTo("AboutUs")}
                roundBottom
              />
              <ListItem
                roundTop
                prefsCtx
                icon={<LinksBtn style={styles.iconBtn} prefthemecolor={iconsColor} />}
                title="Корисні посилання"
                onPress={() => goTo("UsefulLinks")}
                roundBottom
                last
              />
            </View>
          </View>
          <View />
        </ScrollView>
        {/* </View> */}
      </Modal>
    </View>
  );
}

const resolveLocalStyles = (theme, computeFS) => {
  const borderColor = theme === "dark" ? "#3D486C" : "#E6E7ED";
  const closeBtnColor = theme === "dark" ? "#9AA3C5" : "#666";
  const closeBtnBG = theme === "dark" ? "#01020633" : "#74748014";
  const backgroundColor = theme === "dark" ? "#27335A" : "#FFF";
  const color = theme === "dark" ? "#FFF" : "#000";

  return StyleSheet.create({
    bottomedView: {
      alignItems: "center",
      flex: 1,
      flexGrow: 1,
      justifyContent: 'center',
      flexDirection: 'column',
    },
    closeButton: {
      backgroundColor: closeBtnBG,
      borderRadius: 30,
      height: 30,
      width: 30,
    },
    buttonText: {
      alignSelf: "center",
      marginTop: 18,
      color: "#5177FF",
    },
    buttonImage: {
      alignSelf: "center",
      height: 24,
      marginTop: 15,
      width: 24,
    },
    centeredView: {
      alignItems: "center",
      flex: 1,
      justifyContent: "center",
      marginTop: 22,
    },
    colorScheme: {
      borderColor: borderColor,
      borderRadius: 16,
      borderStyle: "solid",
      borderWidth: 1,
      marginBottom: 20,
      marginTop: 20,
      paddingBottom: 16,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 24,
    },
    colorSchemeButtonsRow: {
      backgroundColor: closeBtnBG,
      borderRadius: 16,
      display: "flex",
      flexDirection: "row",
      height: 54,
      marginTop: 16,
      width: "100%",
    },
    fontSizeSwitcher: {
      borderColor: borderColor,
      borderRadius: 16,
      borderStyle: "solid",
      borderWidth: 1,
      paddingBottom: 16,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 24,
    },
    buttonsList: {
      borderColor: borderColor,
      borderRadius: 16,
      borderStyle: "solid",
      borderWidth: 1,
      marginTop: 20,
      paddingLeft: 10,
      paddingRight: 10
    },
    label: {
      color: closeBtnColor,
      fontFamily: "Ubuntu",
      fontSize: 16,
    },
    labels: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    modalView: {
      backgroundColor: backgroundColor,
      borderRadius: 32,
      color: closeBtnColor,
      elevation: 5,
      fontFamily: "Ubuntu",
      height: "auto",
      margin: 16,
      padding: 27,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      width: "90%",
      maxWidth: 350
    },
    schemeSwitch: {
      borderRadius: 16,
      flex: 1,
      height: "100%",
    },
    schemeSwitchActive: { backgroundColor: "#5177FF" },
    closeBtnTxt: {
      color: closeBtnColor,
      lineHeight: 30,
      textAlign: "center",
    },
    textStyleActive: {
      color: "#FFF",
    },
    title: {
      color: color,
      fontFamily: "Ubuntu",
      fontSize: 20,
      lineHeight: 22.5,
      textAlign: "left",
    },
    titleRow: {
      flexDirection: "row",
      height: 30,
      justifyContent: "space-between",
    },
    iconBtn: {
      flex: 3,
      marginBottom: -8
    }
  });
}
