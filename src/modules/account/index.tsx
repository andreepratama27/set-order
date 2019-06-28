import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import Modal from "react-native-modal";

import { Button } from "commons/button";
import { Title, TitleHeader, Caption } from "commons/text";
import { List, Column, Spacing } from "commons/ui";

import { ScaledSheet } from "react-native-size-matters";
import { Colors } from "styles";

const icon = {
  give: require("../../assets/icons/icon-give.png"),
  payment: require("../../assets/icons/icon-payment.png"),
  about: require("../../assets/icons/icon-about.png"),
  help: require("../../assets/icons/icon-help.png"),
  promotion: require("../../assets/icons/icon-promotion.png")
};

function Account(props: any) {
  const [modal, setModal] = React.useState(false);

  return (
    <View style={styles.container}>
      <Modal
        style={styles.modal}
        isVisible={modal}
        onSwipeComplete={() => setModal(false)}
        swipeDirection={["up", "left", "right", "down"]}
        backdropOpacity={0.8}
        animationIn="zoomInDown"
        animationOut="zoomOutUp"
        animationInTiming={600}
        animationOutTiming={600}
        backdropTransitionInTiming={600}
        backdropTransitionOutTiming={600}
      >
        <View style={styles.modalTop}>
          <Title>How can we help?</Title>
          <Caption>Our support team is here 24/7</Caption>
        </View>

        <View style={styles.modalBottom}>
          <Button style={styles.btn} bgColor={Colors.warning}>
            <Title color={Colors.dark} isBold>
              Email Us
            </Title>
          </Button>
        </View>
      </Modal>

      <List
        height={80}
        style={styles.list}
        onPress={() => props.navigation.navigate("ProfileDetail")}
      >
        <Column>
          <Column>
            <View style={styles.avatarWrapper}>
              <Image
                source={{ uri: "https://placehold.it/300x300" }}
                style={styles.avatar}
              />
            </View>
          </Column>
          <Column isColumn>
            <Title isBold color={Colors.dark}>
              Andy Luther
            </Title>
            <Caption>View Profile</Caption>
          </Column>
        </Column>
      </List>

      <Spacing marginBottom={15} />

      <List style={styles.list}>
        <View style={styles.icon}>
          <Image source={icon.give} style={styles.iconImg} />
        </View>
        <Title>Give $10, Get $10</Title>
      </List>
      <List style={styles.list}>
        <View style={styles.icon}>
          <Image source={icon.payment} style={styles.iconImg} />
        </View>
        <Title>Payment method</Title>
      </List>
      <List style={styles.list}>
        <View style={styles.icon}>
          <Image source={icon.promotion} style={styles.iconImg} />
        </View>
        <Title>Promotion</Title>
      </List>

      <Spacing marginBottom={15} />

      <List style={styles.list} onPress={() => setModal(true)}>
        <View style={styles.icon}>
          <Image source={icon.help} style={styles.iconImg} />
        </View>
        <Title>Help</Title>
      </List>
      <List style={styles.list}>
        <View style={styles.icon}>
          <Image source={icon.about} style={styles.iconImg} />
        </View>
        <Title>About Sender</Title>
      </List>
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.smoke
  },
  avatarWrapper: {
    width: 50,
    height: 50,
    marginRight: 15
  },
  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: 30
  },
  list: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: Colors.background
  },
  icon: {
    marginRight: 15
  },
  iconImg: {
    width: 20,
    height: 20,
    resizeMode: "contain"
  },
  modal: {},
  modalTop: {
    backgroundColor: Colors.light,
    height: "100@vs",
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4
  },
  btn: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0
  }
});

Account.navigationOptions = {
  headerTitle: (
    <TitleHeader isBold size={18}>
      My Profile
    </TitleHeader>
  )
};

export default Account;
