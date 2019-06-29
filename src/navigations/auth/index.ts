import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import { createAppContainer } from "@react-navigation/native";

import Order from "modules/order";

import Account from "modules/account";
import ProfileDetail from "modules/profile-detail";
import Payment from "modules/payment";

import Home from "modules/home";
import RestaurantDetail from "modules/restaurant-detail";
import FoodDetail from "modules/food-detail";

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
    initialRouteName: "Order",
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
    },
    FoodDetail: {
      screen: FoodDetail
    }
  },
  {
    initialRouteName: "FoodDetail",
    navigationOptions: {
      header: null
    }
  }
);

const AuthNavigator = createAppContainer(AppNavigator);

export default AuthNavigator;
