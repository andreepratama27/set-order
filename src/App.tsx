import React, { Component } from "react";
import { StyleSheet } from "react-native";

import AuthNavigator from "./navigations/auth";
import GuestNavigator from "./navigations/guest"; //fix module resolver in typescript

interface Props {}
export default class App extends Component<Props> {
  render() {
    return <AuthNavigator />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
