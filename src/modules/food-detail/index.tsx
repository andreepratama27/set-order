import React, { Component } from "react";
import {
  Animated,
  Platform,
  StatusBar,
  Image,
  Text,
  View,
  RefreshControl,
  TouchableOpacity
} from "react-native";
import { Colors } from "styles";

import { Title, Caption } from "commons/text";
import { Spacing, List, Column } from "commons/ui";
import { Button } from "commons/button";
import styled from "styled-components/native";

import styles from "./styles";

const HEADER_MAX_HEIGHT = 150;
const HEADER_MIN_HEIGHT = Platform.OS === "ios" ? 60 : 73;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const Radio = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  border-width: ${(props: any) => (props.selected ? 4 : 1)};
  border-color: ${(props: any) =>
    props.selected ? Colors.warning : Colors.background};
`;

function FoodDetail(props: any) {
  const [refreshing, setRefreshing] = React.useState(false);
  const [scrollingY, setScrollingY] = React.useState(
    new Animated.Value(Platform.OS === "ios" ? -HEADER_MAX_HEIGHT : 0)
  );

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
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="rgba(0, 0, 0, 0.251)"
      />
      <Animated.ScrollView
        style={styles.fill}
        scrollEventThrottle={1}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollingY } } }],
          { useNativeDriver: true }
        )}
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
        showsVerticalScrollIndicator={false}
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
          <Title color={Colors.dark} size={14} isBold>
            Select a size
          </Title>
        </View>

        <View style={styles.menuWrapper}>
          <Column style={styles.list}>
            <Radio />
            <Spacing marginRight={15} />
            <Text>Small</Text>
          </Column>

          <Column
            style={[styles.list, styles.noBorder]}
            justifyContent="space-between"
          >
            <Column>
              <Radio selected />
              <Spacing marginRight={15} />
              <Text>Large</Text>
            </Column>
            <Caption>+$2.00</Caption>
          </Column>
        </View>

        <View style={styles.timerSelect}>
          <Title color={Colors.dark} size={14} isBold>
            Select a meat
          </Title>
        </View>

        <View style={styles.menuWrapper}>
          <Column style={styles.list}>
            <Radio selected />
            <Spacing marginRight={15} />
            <Text>Chicken</Text>
          </Column>
          <Column style={styles.list} justifyContent="space-between">
            <Column>
              <Radio />
              <Spacing marginRight={15} />
              <Text>Beef</Text>
            </Column>
            <Caption>+$4.00</Caption>
          </Column>
        </View>

        <View style={styles.buttonWrapper}>
          <Button
            bgColor={Colors.warning}
            style={styles.btnFull}
            onPress={() => props.navigation.navigate("ViewOrder")}
          >
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

FoodDetail.navigationOptions = {
  header: null
};

export default FoodDetail;
