import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

import Modal from "react-native-modal";

import { Title, TitleHeader, Caption } from "commons/text";
import { Button } from "commons/button";
import { Column, Spacing } from "commons/ui";

import { Colors } from "styles";

const icon = { close: require("../../assets/img/close.png") };

function Card(props: any) {
  const [modal, setModal] = React.useState(false);

  return (
    <TouchableOpacity style={styles.card} onPress={() => setModal(true)}>
      <Modal
        isVisible={modal}
        onSwipeComplete={() => setModal(false)}
        swipeDirection={["up", "left", "right", "down"]}
        style={styles.bottomModal}
      >
        <View style={styles.modal}>
          <View style={styles.header}>
            <Column>
              <TouchableOpacity
                style={styles.iconWrapper}
                onPress={() => props.navigation.goBack()}
              >
                <Image source={icon.close} style={styles.icon} />
              </TouchableOpacity>
              <Title size={16} isBold color={Colors.dark}>
                Order detail
              </Title>
            </Column>
          </View>

          <View style={styles.content}>
            <Column justifyContent="space-between" style={styles.list}>
              <Column>
                <Column>
                  <Title size={16} color={Colors.info} isBold>
                    1
                  </Title>
                  <Spacing marginRight={15} />
                </Column>
                <Column isColumn>
                  <Title>Burrito chicken special</Title>
                  <Caption>Small</Caption>
                </Column>
              </Column>
              <Title color={Colors.text}>$12.00</Title>
            </Column>
            <Column justifyContent="space-between" style={styles.list}>
              <Column>
                <Column>
                  <Title size={16} color={Colors.info} isBold>
                    2
                  </Title>
                  <Spacing marginRight={15} />
                </Column>
                <Column isColumn>
                  <Title>Burrito chicken special</Title>
                  <Caption>Small</Caption>
                </Column>
              </Column>
              <Title color={Colors.text}>$12.00</Title>
            </Column>

            <Column justifyContent="space-between" style={styles.list}>
              <Column>
                <Column>
                  <Title size={16} color={Colors.info} isBold />
                  <Spacing marginRight={25} />
                </Column>
                <Column isColumn>
                  <Title>Subtotal</Title>
                </Column>
              </Column>
              <Title color={Colors.text}>$12.00</Title>
            </Column>
            <Column
              justifyContent="space-between"
              style={[styles.list, styles.noBorder]}
            >
              <Column>
                <Column>
                  <Title size={16} color={Colors.info} isBold />
                  <Spacing marginRight={25} />
                </Column>
                <Column isColumn>
                  <Title color={Colors.dark} size={18} isBold>
                    Total
                  </Title>
                </Column>
              </Column>
              <Title color={Colors.dark} size={18} isBold>
                $12.00
              </Title>
            </Column>

            <Spacing marginTop={5} />
          </View>

          <View style={styles.btnWrapper}>
            <Button style={styles.btnDefault}>
              <Title isBold color={Colors.text}>
                Cancel Order
              </Title>
            </Button>
          </View>
        </View>
      </Modal>

      <Column style={styles.columnTop}>
        <View style={styles.imagesWrapper}>
          <Image
            source={{ uri: "https://placehold.it/300x300" }}
            style={styles.img}
          />
        </View>

        <Column isColumn style={styles.columnCenter}>
          <Caption>Order ID - 077645</Caption>
          <Title isBold color={Colors.dark}>
            Burrito Chicken Special
          </Title>
          <Caption>Total paid : $13.99</Caption>
        </Column>
      </Column>

      <Column
        justifyContent={"space-between"}
        alignItems="center"
        style={styles.columnBottom}
      >
        <Column isColumn style={styles.columnCenter}>
          <Caption>30 April 2019 at 3:30 AM</Caption>
          <Spacing marginBottom={5} />
          <Caption>Table for 2</Caption>
        </Column>
        <Column>
          <Button bgColor={Colors.warning} style={styles.btnPill}>
            <Title color={Colors.light}>Pending</Title>
          </Button>
        </Column>
      </Column>
    </TouchableOpacity>
  );
}

function Order(props: any) {
  return (
    <View style={styles.container}>
      <Spacing marginTop={15} />

      <Card {...props} />
    </View>
  );
}

Order.navigationOptions = {
  headerTitle: (
    <TitleHeader isBold size={18}>
      Order
    </TitleHeader>
  )
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.smoke
  },
  card: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: Colors.background,
    borderBottomColor: Colors.background,
    backgroundColor: Colors.light,
    marginBottom: 15
  },
  imagesWrapper: {
    width: "100@s",
    height: "60@vs",
    marginRight: 20
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: 4
  },
  columnCenter: {
    alignSelf: "center"
  },
  btnPill: {
    width: "80@s",
    height: "25@vs",
    borderRadius: 30
  },
  columnTop: {
    padding: 15
  },
  columnBottom: {
    borderTopWidth: 1,
    borderTopColor: Colors.smoke,
    padding: 15,
    height: "50@vs"
  },

  bottomModal: {
    justifyContent: "flex-end",
    margin: 0
  },

  noBorder: {
    borderBottomWidth: 0
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.background,
    height: "60@vs",
    justifyContent: "center",
    paddingLeft: 15,
    paddingRight: 15
  },
  content: {
    paddingLeft: 15,
    paddingRight: 15
  },
  list: {
    height: "60@vs",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: Colors.background
  },
  btnWrapper: {
    position: "absolute",
    width: "100%",
    bottom: 15,
    alignSelf: "center"
  },
  btnDefault: {
    borderWidth: 1,
    borderColor: Colors.background,
    borderRadius: 4,
    marginLeft: 15,
    marginRight: 15
  },
  iconWrapper: {
    width: 12,
    height: 12,
    marginRight: 10,
    alignSelf: "center"
  },
  icon: {
    width: "100%",
    height: "100%"
  },
  modal: {
    backgroundColor: "#fff",
    height: 400,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  }
});

export default Order;
