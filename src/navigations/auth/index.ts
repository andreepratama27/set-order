import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import { createAppContainer } from "@react-navigation/native";

import Account from "modules/account";
import Home from "modules/home";
import Order from "modules/order";
import OrderDetail from "modules/order-detail";

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
      screen: createStackNavigator(
        {
          Order: {
            screen: Order
          },
          OrderDetail: {
            screen: OrderDetail
          }
        },
        {
          mode: "modal",
          transparentCard: true,
          // defaultNavigationOptions: {
          //   gesturesEnabled: false
          // },
          transitionConfig: () => ({
            transitionSpec: {
              duration: 0
            }
          })
        }
      )
    },
    Account: {
      screen: createStackNavigator({
        Account: {
          screen: Account
        }
      })
    }
  },
  {
    initialRouteName: "Home"
  }
);

const AuthNavigator = createAppContainer(AppNavigator);

export default AuthNavigator;
