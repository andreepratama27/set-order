import React, { Component } from "react";
import {
  View,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import Icon from "react-native-vector-icons/Ionicons";
import StarRating from "react-native-star-rating";

import { Title, TitleHeader, Caption } from "commons/text";
import { Column, Spacing, List } from "commons/ui";

import { Colors } from "styles";

type HomeProps = {};

function Card(props: any) {
  return (
    <List
      style={styles.card}
      onPress={() => props.navigation.navigate("RestaurantDetail")}
      height={300}
    >
      <Column isColumn>
        <View style={styles.imageWrapper}>
          <Image
            source={{ uri: "https://picsum.photos/id/10/2500/1667" }}
            style={styles.img}
          />
        </View>

        <Spacing marginBottom={5} />

        <Column justifyContent="space-between" style={styles.columnWidth}>
          <Column isColumn>
            <Title isBold size={16}>
              Pirenza Pizza King
            </Title>
            <Caption>Italian Cuisine</Caption>
            <Spacing marginBottom={5} />
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
          </Column>
          <Column alignItems="center" style={styles.columnHeight}>
            <Caption>1 km away</Caption>
          </Column>
        </Column>
      </Column>
    </List>
  );
}

function Home(props: HomeProps) {
  const [loading, setLoading] = React.useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.headerSearch}>
        <TouchableOpacity style={styles.searchBtn}>
          <Icon name="ios-search" size={20} color={Colors.dark} />
        </TouchableOpacity>
        <Title color={Colors.text}>Search Restaurant</Title>

        <TouchableOpacity style={styles.switchBtn}>
          <Icon name="ios-switch" size={20} color={Colors.dark} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Card {...props} />
        <Card {...props} />
        <Card {...props} />
      </ScrollView>
    </View>
  );
}

Home.navigationOptions = {
  headerStyle: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.background,
    elevation: 0
  },
  headerTitle: () => (
    <View style={styles.headerTitle}>
      <Caption style={styles.caption}>Your location</Caption>
      <View style={styles.headerMenu}>
        <TitleHeader style={styles.title}>Melbourne</TitleHeader>
        <Icon
          name="ios-arrow-dropdown"
          style={{ position: "absolute", right: 0 }}
        />
      </View>
    </View>
  )
};

const styles = ScaledSheet.create({
  container: {
    flex: 1
  },
  headerSearch: {
    flexDirection: "row",
    height: "50@vs",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: Colors.background
  },
  card: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.smoke
  },
  imageWrapper: {
    width: "100%",
    height: "180@vs",
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowColor: Colors.gray,
    shadowOpacity: 0.3
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: 4
  },
  columnWidth: { width: "100%" },
  columnHeight: { height: "100%" },
  textInput: {
    fontFamily: "SFUIText-Regular",
    height: "50@vs",
    alignSelf: "center"
  },
  switchBtn: {
    position: "absolute",
    right: 15
  },
  searchBtn: {
    position: "absolute",
    left: 15
  },
  starRating: {
    flexDirection: "row"
  },
  headerTitle: {
    width: "100%",
    alignItems: "center"
  },
  caption: {
    marginTop: 5
  },
  title: {
    marginTop: -5
  },
  headerMenu: {
    flexDirection: "row",
    width: 120,
    alignItems: "center"
  },
  iconDropdown: {
    borderWidth: 1,
    width: 100,
    marginLeft: 15
  }
});

export default Home;
