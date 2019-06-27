import React, { Component } from "react";
import { View, Text } from "react-native";

function Order() {
  return (
    <View style={styles.container}>
      <Text>Order</Text>
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

export default Order;
