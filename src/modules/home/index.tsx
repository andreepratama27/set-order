import React, { Component } from "react";
import { View, Text } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

type HomeProps = {};

function Home(props: HomeProps) {
  return (
    <View style={styles.container}>
      <Text>Andre</Text>
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1
  }
});

export default Home;
