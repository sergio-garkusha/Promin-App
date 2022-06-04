import React from "react";
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  ImageBackground,
  Image,
  Switch,
} from "react-native";
import Slider from "@react-native-community/slider";
import lightSwitch from "@assets/light_scheme_switch_light.png";
import knob from "@assets/Knob.png";

function Preferences({ modalVisible, setModalVisible }) {
  const isEnabled = false;
  const toggleSwitch = () => null;
  return (
    <>
      {modalVisible && (
        <ImageBackground
          blurRadius={modalVisible ? 4 : 0}
          style={styles.overlay}
        />
      )}
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.bottomedView}>
            <View style={styles.modalView}>
              <View style={styles.titleRow}>
                <Text style={styles.title}>Налаштування</Text>
                <Pressable
                  style={styles.button}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>✕</Text>
                </Pressable>
              </View>
              <View style={styles.colorScheme}>
                <Text style={styles.label}>Тема</Text>
                <View style={styles.colorSchemeButtons}>
                  <Pressable
                    style={[styles.schemeSwitch, styles.schemeSwitchActive]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Image source={lightSwitch} style={styles.buttonImage} />
                  </Pressable>
                  <Pressable
                    style={styles.schemeSwitch}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Image source={lightSwitch} style={styles.buttonImage} />
                  </Pressable>
                </View>
                <View style={styles.colorSchemeButtons2ndRow}>
                  <Text style={styles.label}>Обирати автоматично</Text>
                  <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                  />
                </View>
              </View>
              <View style={styles.fontSize}>
                <Text style={styles.label}>Розмір шрифта</Text>
                <Slider
                  style={{ height: 50 }}
                  value={3}
                  minimumValue={0}
                  maximumValue={6}
                  minimumTrackTintColor="#E6E7ED"
                  maximumTrackTintColor="#E6E7ED"
                  thumbImage={knob}
                  thumbTintColor="#f4f3f4"
                />
              </View>
            </View>
            <View />
          </View>
        </Modal>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  bottomedView: {
    alignItems: "center",
    flex: 1,
    justifyContent: "space-evenly",
    marginTop: "82%",
  },
  button: {
    backgroundColor: "rgba(116, 116, 128, 0.08)",
    borderRadius: 20,
    elevation: 2,
    height: 30,
    width: 30,
  },
  buttonImage: {
    alignSelf: "center",
    height: 17,
    marginTop: 18,
    width: 17,
  },
  centeredView: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    marginTop: 22,
  },
  colorScheme: {
    borderColor: "#E6E7ED",
    borderRadius: 16,
    borderStyle: "solid",
    borderWidth: 1,
    marginBottom: 20,
    marginTop: 20,
    paddingBottom: 24,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 24,
  },
  colorSchemeButtons: {
    backgroundColor: "rgba(116, 116, 128, 0.08)",
    borderRadius: 64,
    flexDirection: "row",
    height: 54,
    marginBottom: 16,
    marginTop: 16,
    width: "100%",
  },
  colorSchemeButtons2ndRow: {
    alignContent: "center",
    flexDirection: "row",
    height: 51,
    justifyContent: "space-between",
    width: "100%",
  },
  fontSize: {
    borderColor: "#E6E7ED",
    borderRadius: 16,
    borderStyle: "solid",
    borderWidth: 1,
    paddingBottom: 24,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 24,
  },
  label: {
    color: "#666",
    fontFamily: "Ubuntu",
    fontSize: 16,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 32,
    color: "#666",
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
  overlay: {
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    flex: 1,
    height: "100%",
    justifyContent: "center",
    position: "absolute",
    resizeMode: "contain",
    width: "100%",
  },
  schemeSwitch: {
    borderRadius: 64,
    height: "100%",
    width: "50%",
  },
  schemeSwitchActive: { backgroundColor: "#5177FF" },
  textStyle: {
    color: "#666",
    lineHeight: 30,
    textAlign: "center",
  },
  title: {
    color: "#666",
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

export default Preferences;
