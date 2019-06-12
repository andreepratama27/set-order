import { createStackNavigator } from "react-navigation";
import { createAppContainer } from "@react-navigation/native";

import Landing from "modules/landing";
import Signup from "modules/signup";
import Login from "modules/login";

const AppNavigator = createStackNavigator(
  {
    Landing: {
      screen: Landing
    },
    Signup: {
      screen: Signup
    },
    Login: {
      screen: Login
    }
  },
  {
    initialRouteName: "Landing"
  }
);

const GuestNavigator = createAppContainer(AppNavigator);

export default GuestNavigator;
