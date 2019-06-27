import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

import { Title, Caption } from "commons/text";
import { Button } from "commons/button";
import { Column, Spacing } from "commons/ui";

import { Colors } from "styles";

function Card(props: any) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => props.navigation.navigate("OrderDetail")}
    >
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
    <Title isBold size={18}>
      Order
    </Title>
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
  }
});

export default Order;
