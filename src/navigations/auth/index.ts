import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import { createAppContainer } from "@react-navigation/native";

import Account from "modules/account";
import Home from "modules/home";
import Order from "modules/order";

import ProfileDetail from "modules/profile-detail";

import BottomTab from "../BottomTab";

const AppNavigator = createBottomTabNavigator(
  {
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
        },
        ProfileDetail: {
          screen: ProfileDetail
        }
      })
    }
  },
  {
    initialRouteName: "Account"
  }
);

const AuthNavigator = createAppContainer(AppNavigator);

export default AuthNavigator;
