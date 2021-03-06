import React from 'react';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import {createAppContainer} from '@react-navigation/native';

import Order from 'modules/order';

import Account from 'modules/account';
import ProfileDetail from 'modules/profile-detail';
import Payment from 'modules/payment';

import Home from 'modules/home';
import Filter from 'modules/filters';

import RestaurantDetail from 'modules/restaurant-detail';
import FoodDetail from 'modules/food-detail';
import ViewOrder from 'modules/view-order';
import OrderSuccess from 'modules/order-success';

import BottomTab from '../BottomTab';

const TabStack = createBottomTabNavigator(
  {
    Home: {
      screen: createStackNavigator(
        {
          Home: {
            screen: Home,
          },
        },
        {
          navigationOptions: {
            header: null,
          },
        },
      ),
    },
    Order: {
      screen: createStackNavigator({
        Order: {
          screen: Order,
        },
      }),
    },
    Account: {
      screen: createStackNavigator({
        Account: {
          screen: Account,
        },
      }),
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      header: null,
    },
    tabBarOptions: {
      showLabel: false,
    },
    tabBarComponent: props => <BottomTab {...props} />,
  },
);

// const AppNavigator = TabStack;
const AppNavigator = createStackNavigator(
  {
    Root: TabStack,
    ProfileDetail: {
      screen: ProfileDetail,
    },
    Payment: {
      screen: Payment,
    },
    RestaurantDetail: {
      screen: createStackNavigator(
        {
          RestaurantDetail: {
            screen: RestaurantDetail,
          },

          FoodDetail: {
            screen: FoodDetail,
          },
          ViewOrder: {
            screen: ViewOrder,
          },
        },
        {
          navigationOptions: {
            headerTransparent: true,
          },
        },
      ),
    },
    OrderSuccess: {
      screen: OrderSuccess,
    },
    Filter: {
      screen: Filter,
    },
  },
  {
    initialRouteName: 'Root',
    navigationOptions: {
      header: null,
    },
  },
);

const AuthNavigator = createAppContainer(AppNavigator);

export default AuthNavigator;
