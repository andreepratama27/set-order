import { createStackNavigator } from "react-navigation";
import { createAppContainer } from "@react-navigation/native";

import Landing from "modules/client/landing";
import Signup from "modules/client/signup";
import Login from "modules/client/login";

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
