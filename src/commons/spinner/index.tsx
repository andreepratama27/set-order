import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import Modal from "react-native-modal";
import { Colors } from "styles/";

type ModalProps = {
  isVisible: boolean;
};

function Spinner(props: ModalProps) {
  return (
    <Modal
      isVisible={props.isVisible}
      animationIn="fadeIn"
      animationOut="fadeOut"
    >
      <View style={styles.modal}>
        <ActivityIndicator size={40} color={Colors.warning} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    width: 80,
    height: 80,
    backgroundColor: Colors.dark,
    opacity: 0.5,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderWidth: 2,
    borderRadius: 8
  }
});

export default Spinner;
