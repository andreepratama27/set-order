import React, { Component } from "react";
import {
  View,
  Image,
  Button,
  Text,
  Title,
  Caption,
  Subtitle
} from "@shoutem/ui";

function Card() {
  return (
    <View style={styles.cardWrapper}>
      <View
        styleName="horizontal space-between v-center"
        style={styles.topSection}
      >
        <View style={styles.imagesWrapper}>
          <Image
            style={styles.images}
            source={{ uri: "https://picsum.photos/id/237/200/300" }}
          />
        </View>
        <View>
          <Caption>Order ID - 077645</Caption>
          <Text styleName="bold">Burrito Chicken Spesial</Text>
          <Caption>Total paid: $12.44</Caption>
        </View>
      </View>

      <View styleName="horizontal space-between">
        <View>
          <Caption>30 April 2019 at 3:30 AM</Caption>
          <Caption>Table for 2</Caption>
        </View>
        <View>
          <Button styleName="secondary" style={styles.btn}>
            <Text>Pending</Text>
          </Button>
        </View>
      </View>
    </View>
  );
}

function Order() {
  return (
    <View style={styles.container}>
      <Card />
      <Card />
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7"
  },
  cardWrapper: {
    padding: 15,
    backgroundColor: "#fff",
    marginBottom: 15
  },
  topSection: {
    marginBottom: 15
  },
  imagesWrapper: {
    width: 120
  },
  images: {
    width: 120,
    height: 80
  },
  btn: {
    borderRadius: 8,
    height: 40
  }
};

Order.navigationOptions = {
  headerTitle: <Title styleName="bold secondary">Order</Title>
};

export default Order;
