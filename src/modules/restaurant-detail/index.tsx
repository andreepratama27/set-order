import React, { Component } from "react";
import {
  Animated,
  Platform,
  Image,
  Text,
  View,
  RefreshControl
} from "react-native";
import { Colors } from "styles";
import { Grid, Col } from "react-native-easy-grid";

import { Title, Caption } from "commons/text";
import { Spacing, List, Column } from "commons/ui";
import { Button } from "commons/button";

import styles from "./styles";

const HEADER_MAX_HEIGHT = 220;
const HEADER_MIN_HEIGHT = Platform.OS === "ios" ? 60 : 50;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

function Card(props: any) {
  return (
    <Column style={styles.card}>
      <Grid style={styles.grid}>
        <Col size={1} style={styles.center}>
          <View style={[styles.menuImg]}>
            <Image
              source={{ uri: "https://picsum.photos/id/10/2500/1667" }}
              style={styles.img}
            />
          </View>
        </Col>

        <Col size={3}>
          <View style={styles.information}>
            <Title>Burrito chicken special</Title>
            <Caption>
              This food consists of wheat tortillas filled with various kind
            </Caption>

            <Spacing marginBottom={5} />

            <View
              style={{
                width: "100%",
                justifyContent: "space-between",
                flexDirection: "row"
              }}
            >
              <Title isBold color={Colors.dark}>
                $13.99
              </Title>

              <Button
                bgColor={Colors.warning}
                style={styles.btnSmall}
                onPress={() => props.navigation.navigate("FoodDetail")}
              >
                <Title size={12}>Add</Title>
              </Button>
            </View>
          </View>
        </Col>
      </Grid>
    </Column>
  );
}

function RestaurantDetail(props: any) {
  const [scrollingY, setScrollingY] = React.useState(
    new Animated.Value(Platform.OS === "ios" ? -HEADER_MAX_HEIGHT : 0)
  );
  const [refreshing, setRefreshing] = React.useState(false);

  const scrollY = Animated.add(
    scrollingY,
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
      <Animated.ScrollView
        style={styles.fill}
        scrollEventThrottle={1}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollingY } } }],
          { useNativeDriver: true }
        )}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
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
          <Caption size={14}>Chinese cuisine, Indonesia</Caption>
          <Spacing marginBottom={5} />
          <Caption>4.0</Caption>
        </View>

        <View style={styles.timerSelect}>
          <Title color={Colors.dark} size={14} isBold>
            Lunch menu
          </Title>
        </View>

        <View style={styles.menuWrapper}>
          <Card {...props} />
          <Card {...props} />
          <Card {...props} />
          <Card {...props} />
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

RestaurantDetail.navigationOptions = {
  header: null
};

export default RestaurantDetail;
