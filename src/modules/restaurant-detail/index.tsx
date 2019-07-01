import React, { Component } from "react";
import {
  Animated,
  Platform,
  Image,
  ScrollView,
  TouchableOpacity,
  View,
  RefreshControl,
  Dimensions
} from "react-native";
import styled from "styled-components/native";
import { Colors } from "styles";
import { Grid, Col } from "react-native-easy-grid";
import Modal from "react-native-modal";

import Icon from "react-native-vector-icons/EvilIcons";
import StarRating from "react-native-star-rating";

import { Title, Caption } from "commons/text";
import { Spacing, List, Column } from "commons/ui";
import { Button } from "commons/button";

import styles from "./styles";

const HEADER_MAX_HEIGHT = 220;
const HEADER_MIN_HEIGHT = Platform.OS === "ios" ? 60 : 50;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const Radio = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  border-width: ${(props: any) => (props.selected ? 4 : 1)};
  border-color: ${(props: any) =>
    props.selected ? Colors.warning : Colors.background};
`;

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
  const [modal, setModal] = React.useState(false);

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

  const deviceHeight = Math.max(
    Dimensions.get("window").height,
    Dimensions.get("screen").height
  );

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
          <Spacing marginBottom={10} />
          <View style={styles.starRating}>
            <Caption>3.0</Caption>
            <Spacing marginRight={10} />
            <StarRating
              disabled={false}
              maxStars={5}
              rating={3}
              starSize={15}
              fullStarColor={Colors.warning}
            />
          </View>
        </View>

        <TouchableOpacity
          style={styles.timerSelect}
          onPress={() => setModal(true)}
        >
          <View style={styles.align}>
            <Title color={Colors.dark} isBold>
              Lunch menu
            </Title>

            <Spacing marginRight={10} />

            <Caption>11:00 am - 2:00 pm</Caption>
          </View>

          <View>
            <Icon name="chevron-right" size={22} />
          </View>
        </TouchableOpacity>

        <View style={styles.menuWrapper}>
          <Card {...props} />
          <Card {...props} />
          <Card {...props} />
          <Card {...props} />
        </View>

        <Modal
          isVisible={modal}
          style={styles.bottomModal}
          deviceHeight={deviceHeight}
          swipeDirection={["down"]}
          onSwipeComplete={() => setModal(false)}
        >
          <View style={styles.modal}>
            <View style={styles.modalHeader}>
              <TouchableOpacity onPress={() => setModal(false)}>
                <Icon name="close" size={24} />
              </TouchableOpacity>
              <Spacing marginRight={10} />
              <Title isBold fontSize={16}>
                Select menu time
              </Title>
            </View>
            <View style={styles.modalContent}>
              <Column alignItems="center">
                <Radio selected />
                <Spacing marginRight={15} />
                <Column isColumn style={styles.list}>
                  <Column alignItems="center">
                    <Title isBold>Lunch</Title>
                    <Spacing marginRight={15} />
                    <Caption>11:00 am - 2:00 pm</Caption>
                  </Column>
                  <Spacing marginRight={30} />
                  <Title isBold size={12} color={Colors.info}>
                    Order for Tu, May 2
                  </Title>
                </Column>
              </Column>

              <Column alignItems="center">
                <Radio />
                <Spacing marginRight={15} />
                <Column isColumn style={styles.list}>
                  <Column alignItems="center">
                    <Title isBold>Dinner</Title>
                    <Spacing marginRight={15} />
                    <Caption>11:00 am - 2:00 pm</Caption>
                  </Column>
                  <Title isBold size={12} color={Colors.info}>
                    Order for Tu, May 2
                  </Title>
                </Column>
              </Column>
            </View>
          </View>
        </Modal>
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
