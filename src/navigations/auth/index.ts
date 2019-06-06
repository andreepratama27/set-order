import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import { createAppContainer } from "@react-navigation/native";

import Account from "modules/client/account";
import Home from "modules/client/home";
import Order from "modules/client/order";

const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: createStackNavigator({
      Home: {
        screen: Home
      }
    })
  },
  Order: {
    screen: createStackNavigator({
      Order: {
        screen: Order
      }
    })
  },
  Account: {
    screen: createStackNavigator({
      Account: {
        screen: Account
      }
    })
  }
});

const AuthNavigator = createAppContainer(AppNavigator);

export default AuthNavigator;
