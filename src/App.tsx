import React, { Component } from "react";
import { connect } from "react-redux";

import AuthNavigator from "./navigations/auth";
import GuestNavigator from "./navigations/guest";

const mapStateToProps = state => ({
  auth: state.auth
});

class App extends Component<any, any> {
  render() {
    const { auth } = this.props;

    return <>{auth.isLogin ? <AuthNavigator /> : <GuestNavigator />}</>;
  }
}
export default connect(mapStateToProps)(App);
