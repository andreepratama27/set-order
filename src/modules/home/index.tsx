import React, { Component } from "react";
import { View, TextInput, Image, ScrollView } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

import { Title, Caption } from "commons/text";
import { Column, Spacing } from "commons/ui";

import { Colors } from "styles";

type HomeProps = {};

function Card(props: any) {
  return (
    <View style={styles.card}>
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
            <Caption>3.0</Caption>
          </Column>
          <Column alignItems="center" style={styles.columnHeight}>
            <Caption>1 km away</Caption>
          </Column>
        </Column>
      </Column>
    </View>
  );
}

function Home(props: HomeProps) {
  const [loading, setLoading] = React.useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.headerSearch}>
        <Title color={Colors.text}>Search Restaurant</Title>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Card />
        <Card />
        <Card />
      </ScrollView>
    </View>
  );
}

Home.navigationOptions = {
  headerStyle: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.background,
    elevation: 0
  }
};

const styles = ScaledSheet.create({
  container: {
    flex: 1
  },
  headerSearch: {
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
  }
});

export default Home;
