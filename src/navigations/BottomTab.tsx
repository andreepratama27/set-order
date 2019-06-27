import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

const BottomTab = (props: any) => {
  const { onTabPress, navigation } = props;
  const {
    state: { routes, index: activeRouteIndex }
  } = navigation;

  return (
    <View>
      {routes.map((route, routeIndex) => (
        <Text>{route.routeName}</Text>
      ))}
    </View>
  );
};

export default BottomTab;
