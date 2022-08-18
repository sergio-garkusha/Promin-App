import React from "react";
import * as Device from "expo-device";
import * as Linking from 'expo-linking';
import { Share } from 'react-native';
// import * as StoreReview from 'expo-store-review'; // Call to Review dep
import { Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { OverlayContext } from "/components/OverlayProvider";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import ListItem from "/components/ListItem";

import Sun from "/icons/Sun";
import Moon from "/icons/Moon";
import MoonSun from "/icons/MoonSun";

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
  if (idx === 0) return <Sun style={style} prefThemeColor={color} />;
  if (idx === 1) return <Moon style={style} prefThemeColor={color} />;
  if (idx === 2) return <MoonSun style={style} prefThemeColor={color} />;
  return null;
};

let computeFS;

function FontSizeButtons() {
  const { coefficient, subtractSize, defaultSize, addSize, computeFontSize } = React.useContext(FontSizeContext);
  const { computeTheme } = React.useContext(ThemeContext);
  const styles = resolveLocalStyles(computeTheme());
  computeFS = computeFontSize;

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

function isIOS() {
  return Device.osName === "iOS"
    || Device.osName === "iPadOS";
}

function isMobile() {
  return Device.osName === "Android"
    || Device.osName === "iOS"
    || Device.osName === "iPadOS";
}

function getStoreLink() {
  // StoreReview.storeUrl()
  if (Device.osName === "Android") {
    const androidPackageName = 'host.exp.exponent';
    // Opens the Android Play Store directly
    Linking.openURL(`market://details?id=${androidPackageName}&showAllReviews=true`);
  } else if (Device.osName === "iOS" || Device.osName === "iPadOS") {
    // Opens the iOS App Store directly
    const itunesItemId = 982107779;
    Linking.openURL(
      `itms-apps://itunes.apple.com/app/viewContentsUserReviews/id${itunesItemId}?action=write-review`
    );
  }
}

function getStoreText() {
  if (Device.osName === "Android")
    return "Оціни в Google Play";
  if (Device.osName === "iOS" || Device.osName === "iPadOS")
    return "Оціни в App Store"
  return false;
}

const url = "https://promin.app/";
const title = "Завантажуй Промінь";
const message = "Промінь - твій кишеньковий довідник з психологічної допомоги у кризових ситуаціях";

const options = {
  title,
  url,
  message,
};

if (isIOS()) {
  options.url = `${title}\n${url}\n${message}`
}

options.message = `${title}\n${url}\n${message}`

export default function Preferences({ navigation, modalVisible, setModalVisible }) {
  const { toggleOverlay } = React.useContext(OverlayContext);
  const { computeTheme } = React.useContext(ThemeContext);
  const styles = resolveLocalStyles(computeTheme());

  const goTo = (dest) => {
    navigation.push(dest);
  };

  const sharePromin = async (customOptions = options) => {
    try {
      const result = await Share.share(customOptions);
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log("shared with activity type of result.activityType");
        } else {
          console.log("shared");
        }
      } else if (result.action === Share.dismissedAction) {
        console.log("dismissed");
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
        <View style={styles.bottomedView}>
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

            <View>
              {isMobile() && (
                <>
                  <ListItem
                    roundTop
                    icon="🛟"
                    title="Підтримка"
                    onPress={() => goTo("Strah")}
                    roundBottom
                  />
                  <ListItem
                    roundTop
                    icon="💬"
                    title="Розкажи друзям"
                    onPress={async () => await sharePromin()}
                    roundBottom
                  />
                  <ListItem
                    roundTop
                    icon="⭐️"
                    title={getStoreText()}
                    onPress={getStoreLink}
                    roundBottom
                  />
                </>)}
              <ListItem
                roundTop
                icon="❤️"
                title="Про нас"
                onPress={() => goTo("Strah")}
                roundBottom
              />
              <ListItem
                roundTop
                icon="🔗"
                title="Корисні посилання"
                onPress={() => goTo("Strah")}
                roundBottom
              />
            </View>

          </View>
          <View />
        </View>
      </Modal>
    </View>
  );
}

const resolveLocalStyles = (theme) => {
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
  });
}
