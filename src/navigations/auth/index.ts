import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import { createAppContainer } from "@react-navigation/native";

import Home from "modules/home";

import Account from "modules/account";
import ProfileDetail from "modules/profile-detail";
import Payment from "modules/payment";

import Order from "modules/order";
import RestaurantDetail from "modules/restaurant-detail";

import BottomTab from "../BottomTab";

const TabStack = createBottomTabNavigator(
  {
    Home: {
      screen: createStackNavigator(
        {
          Home: {
            screen: Home
          }
        },
        {
          navigationOptions: {
            header: null
          }
        }
      )
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
  },
  {
    initialRouteName: "Home",
    navigationOptions: {
      header: null
    }
  }
);

// const AppNavigator = TabStack;
const AppNavigator = createStackNavigator(
  {
    Root: TabStack,
    ProfileDetail: {
      screen: ProfileDetail
    },
    Payment: {
      screen: Payment
    },
    RestaurantDetail: {
      screen: RestaurantDetail
    }
  },
  {
    initialRouteName: "RestaurantDetail",
    navigationOptions: {
      header: null
    }
  }
);

const AuthNavigator = createAppContainer(AppNavigator);

export default AuthNavigator;
