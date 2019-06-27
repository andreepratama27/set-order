import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity
} from "react-native";

import { Button } from "commons/button";
import { Title, Caption } from "commons/text";
import { Column, Spacing } from "commons/ui";

import { ScaledSheet } from "react-native-size-matters";
import { Colors } from "styles";

const icon = { close: require("../../assets/img/close.png") };

function OrderDetail(props: any) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "tranparent",
        justifyContent: "flex-end"
      }}
    >
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
          width: "100%",
          height: "100%",
          backgroundColor: Colors.dark,
          opacity: 0.5
        }}
      />
      <View
        style={{
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          top: 250,
          backgroundColor: Colors.light
        }}
      >
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

          <Button style={styles.btnDefault}>
            <Title isBold color={Colors.text}>
              Cancel Order
            </Title>
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = ScaledSheet.create({
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
  btnDefault: {
    borderWidth: 1,
    borderColor: Colors.background,
    borderRadius: 4
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
  }
});

OrderDetail.navigationOptions = {
  headerStyle: {
    borderBottoWidth: 0,
    borderBottomColor: "transparent"
  },
  header: null
};

export default OrderDetail;
