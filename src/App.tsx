import React, { Component } from "react";
import { StatusBar } from "react-native";
import { Colors } from "styles";

import AuthNavigator from "./navigations/auth";
import GuestNavigator from "./navigations/guest"; //fix module resolver in typescript

interface Props {}
export default class App extends Component<Props> {
  render() {
    return (
      <>
        <AuthNavigator />
      </>
    );
  }
}
