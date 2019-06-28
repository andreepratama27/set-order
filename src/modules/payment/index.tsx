import React from "react";
import { View, Image } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

import { Title, TitleHeader } from "commons/text";
import { List, Column, Spacing } from "commons/ui";
import { Colors } from "styles";
import * as Icon from "assets/icons";

type PaymentProps = {};

function Payment(props: PaymentProps) {
  return (
    <View style={styles.container}>
      <Spacing marginBottom={10} />
      <List style={styles.list}>
        <Column alignItems="center">
          <View style={styles.icon}>
            <Image source={Icon.google.default} style={styles.iconImg} />
          </View>
          <Title>Google Pay</Title>
        </Column>
      </List>

      <List>
        <Column alignItems="center">
          <View style={styles.icon}>
            <Image source={Icon.payment.default} style={styles.iconImg} />
          </View>
          <Title>Add credit or debit card</Title>
        </Column>
      </List>
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.smoke
  },
  icon: {
    marginRight: 15
  },
  iconImg: {
    width: 20,
    height: 20,
    resizeMode: "contain"
  },
  list: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.background
  }
});

Payment.navigationOptions = {
  headerTitle: <TitleHeader>Payment Method</TitleHeader>,
  headerRight: <View />
};

export default Payment;
