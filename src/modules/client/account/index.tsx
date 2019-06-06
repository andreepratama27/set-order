import React, { Component } from "react";
import { View, Text } from "react-native";
import { Title } from "@shoutem/ui";

function Account() {
  return (
    <View>
      <Text>Account</Text>
    </View>
  );
}

Account.navigationOptions = {
  headerTitle: <Title styleName="bold">My Profile</Title>
};

export default Account;
