import React, { Component } from "react";
import {
  Animated,
  Platform,
  StatusBar,
  Image,
  Text,
  View,
  RefreshControl
} from "react-native";
import { Colors } from "styles";
import { ScaledSheet } from "react-native-size-matters";

import { Title, Caption } from "commons/text";
import { Spacing, List, Column } from "commons/ui";
import { Button } from "commons/button";

const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = Platform.OS === "ios" ? 60 : 73;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export default class FoodDetail extends Component {
  constructor(props: any) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(
        Platform.OS === "ios" ? -HEADER_MAX_HEIGHT : 0
      ),
      refreshing: false
    };
  }

  static navigationOptions = {
    header: null
  };

  render() {
    const scrollY = Animated.add(
      this.state.scrollY,
      Platform.OS === "ios" ? HEADER_MAX_HEIGHT : 0
    );
    const headerTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -HEADER_SCROLL_DISTANCE],
      extrapolate: "clamp"
    });

    const imageOpacity = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0],
      extrapolate: "clamp"
    });
    const imageTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 100],
      extrapolate: "clamp"
    });

    const titleScale = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0.8],
      extrapolate: "clamp"
    });
    const titleTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 0, -8],
      extrapolate: "clamp"
    });

    return (
      <View style={styles.fill}>
        <StatusBar
          translucent
          barStyle="light-content"
          backgroundColor="rgba(0, 0, 0, 0.251)"
        />
        <Animated.ScrollView
          style={styles.fill}
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
            { useNativeDriver: true }
          )}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={() => {
                this.setState({ refreshing: true });
                setTimeout(() => this.setState({ refreshing: false }), 1000);
              }}
              progressViewOffset={HEADER_MAX_HEIGHT}
            />
          }
          contentInset={{
            top: HEADER_MAX_HEIGHT
          }}
          contentOffset={{
            y: -HEADER_MAX_HEIGHT
          }}
        >
          <View style={styles.headerTitle}>
            <Title isBold color={Colors.dark} size={18}>
              Golden vegetable food
            </Title>
            <Spacing marginBottom={5} />
            <Caption size={14}>
              This food consists of wheat tortillas filled with various kinds of
              meat such as beef, chichkin
            </Caption>
          </View>

          <View style={styles.timerSelect}>
            <Title color={Colors.dark} size={16} isBold>
              Select a size
            </Title>
          </View>

          <View style={styles.menuWrapper}>
            <Column style={styles.list}>
              <Text>Small</Text>
            </Column>
            <Column style={[styles.list, styles.noBorder]}>
              <Text>Small</Text>
            </Column>
          </View>

          <View style={styles.timerSelect}>
            <Title color={Colors.dark} size={16} isBold>
              Select a meat
            </Title>
          </View>

          <View style={styles.menuWrapper}>
            <Column style={styles.list}>
              <Text>Chicken</Text>
            </Column>
            <Column style={styles.list} justifyContent="space-between">
              <Text>Beef</Text>
              <Caption>$4.00</Caption>
            </Column>
          </View>

          <View style={styles.buttonWrapper}>
            <Button bgColor={Colors.warning}>
              <Title isBold color={Colors.dark}>
                Add To order
              </Title>
            </Button>
          </View>
        </Animated.ScrollView>

        <Animated.View
          pointerEvents="none"
          style={[
            styles.header,
            { transform: [{ translateY: headerTranslate }] }
          ]}
        >
          <Animated.Image
            style={[
              styles.backgroundImage,
              {
                opacity: imageOpacity,
                transform: [{ translateY: imageTranslate }]
              }
            ]}
            source={{ uri: "https://picsum.photos/id/10/2500/1667" }}
          />
        </Animated.View>

        <Animated.View
          style={[
            styles.bar,
            {
              transform: [{ scale: titleScale }, { translateY: titleTranslate }]
            }
          ]}
        />
      </View>
    );
  }
}

const styles = ScaledSheet.create({
  fill: {
    flex: 1
  },
  content: {
    flex: 1
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.light,
    borderBottomWidth: 1,
    borderBottomColor: Colors.background,
    overflow: "hidden",
    height: HEADER_MAX_HEIGHT
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    resizeMode: "cover"
  },
  bar: {
    backgroundColor: "transparent",
    marginTop: Platform.OS === "ios" ? 28 : 38,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0
  },
  title: {
    color: "white",
    fontSize: 18
  },
  scrollViewContent: {
    // iOS uses content inset, which acts like padding.
    paddingTop: Platform.OS !== "ios" ? HEADER_MAX_HEIGHT : 0
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: "#D3D3D3",
    alignItems: "center",
    justifyContent: "center"
  },
  headerTitle: {
    height: "100@vs",
    justifyContent: "center",
    paddingLeft: 15,
    paddingRight: 15
  },
  timerSelect: {
    backgroundColor: Colors.smoke,
    padding: 15
  },
  menuImg: {
    width: "70@s",
    height: "70@vs",
    justifyContent: "center"
  },
  menuWrapper: {
    padding: 15
  },
  img: {
    width: "100%",
    height: "100%",
    alignSelf: "center",
    borderRadius: 4
  },
  card: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.background,
    height: "90@vs"
  },
  btnSmall: {
    width: "40@s",
    height: "25@vs"
  },
  list: {
    height: "50@vs",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: Colors.background
  },
  noBorder: {
    borderBottomWidth: 0
  },
  buttonWrapper: {
    padding: 15
  }
});
