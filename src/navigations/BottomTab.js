import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  StyleSheet,
  Button
} from "react-native";
import { Grid, Col } from "react-native-easy-grid";

import { Title } from "commons/text";

import { Colors } from "styles";

import * as Icon from "assets/icons";

class BottomTab extends React.Component {
  constructor(props) {
    super(props);
  }

  renderIcon = (routeName, active, routeIndex) => {
    let iconComponent;
    let focused = active === routeIndex;

    if (routeName === "Home") {
      iconComponent = focused ? Icon.home.active : Icon.home.default;
    } else if (routeName === "Order") {
      iconComponent = focused ? Icon.order.active : Icon.order.default;
    } else {
      iconComponent = focused ? Icon.account.active : Icon.account.default;
    }

    return (
      <>
        <View style={styles.iconWrapper}>
          <Image source={iconComponent} style={styles.icon} />
        </View>

        <Title size={12} style={focused ? styles.iconActive : styles.iconText}>
          {routeName}
        </Title>
      </>
    );
  };

  render() {
    const { onTabPress, navigation } = this.props;
    const {
      state: { routes, index: activeRouteIndex }
    } = navigation;

    return (
      <View style={styles.tab}>
        <Grid>
          {routes.map((route, routeKey) => (
            <Col style={styles.cols} key={routeKey}>
              <TouchableOpacity
                style={styles.center}
                onPress={() => onTabPress({ route })}
              >
                {this.renderIcon(route.routeName, activeRouteIndex, routeKey)}
              </TouchableOpacity>
            </Col>
          ))}
        </Grid>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tab: {
    borderTopWidth: 1,
    borderTopColor: Colors.background,
    width: "100%",
    height: 62
  },
  cols: {
    alignItems: "center",
    justifyContent: "center"
  },
  iconWrapper: {
    width: 15,
    height: 15
  },
  center: {
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  iconText: {},
  iconActive: {
    color: Colors.warning
  }
});

export default BottomTab;
