import React, { Component } from "react";
import { View, Text, Image, Dimensions } from "react-native";
import Modal from "react-native-modal";

import { Button } from "commons/button";
import { Title, TitleHeader, Caption } from "commons/text";
import { List, Column, Spacing } from "commons/ui";

import { ScaledSheet } from "react-native-size-matters";
import { Colors } from "styles";
import * as Icon from "assets/icons";

function Account(props: any) {
  const [modal, setModal] = React.useState(false);
  const deviceHeight = Math.max(
    Dimensions.get("window").height,
    Dimensions.get("screen").height
  );

  return (
    <View style={styles.container}>
      <Modal
        style={styles.modal}
        isVisible={modal}
        onSwipeComplete={() => setModal(false)}
        swipeDirection={["down"]}
        backdropOpacity={0.8}
        deviceHeight={deviceHeight}
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
                source={{
                  uri: "https://randomuser.me/api/portraits/men/89.jpg"
                }}
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
          <Image source={Icon.give.default} style={styles.iconImg} />
        </View>
        <Title>Give $10, Get $10</Title>
      </List>
      <List
        style={styles.list}
        onPress={() => props.navigation.navigate("Payment")}
      >
        <View style={styles.icon}>
          <Image source={Icon.payment.default} style={styles.iconImg} />
        </View>
        <Title>Payment method</Title>
      </List>
      <List style={styles.list}>
        <View style={styles.icon}>
          <Image source={Icon.promotion.default} style={styles.iconImg} />
        </View>
        <Title>Promotion</Title>
      </List>

      <Spacing marginBottom={15} />

      <List style={styles.list} onPress={() => setModal(true)}>
        <View style={styles.icon}>
          <Image source={Icon.help.default} style={styles.iconImg} />
        </View>
        <Title>Help</Title>
      </List>
      <List style={styles.list}>
        <View style={styles.icon}>
          <Image source={Icon.about.default} style={styles.iconImg} />
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
    borderRadius: 25
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
  ),
  headerStyle: {
    elevation: 0,
    borderBottomWidth: 1,
    borderBottomColor: Colors.background
  }
};

export default Account;
