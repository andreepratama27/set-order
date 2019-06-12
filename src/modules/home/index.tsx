import React, { Component } from "react";
import {
  Examples,
  ScrollView,
  View,
  Title,
  Text,
  Subtitle,
  Caption,
  Card,
  Image
} from "@shoutem/ui";

type HomeProps = {};

function Cards() {
  return (
    <Card style={{ width: "100%", height: 240 }}>
      <Image
        styleName="medium-wide"
        style={{ width: "100%", height: 140 }}
        source={{
          uri: "https://picsum.photos/id/237/200/300"
        }}
      />
      <View styleName="content">
        <Subtitle>Pirenza Pizza King</Subtitle>
        <Caption>Italian cuisine</Caption>
        <Caption>3.0</Caption>
      </View>
    </Card>
  );
}

function Home(props: HomeProps) {
  return (
    <ScrollView style={styles.container}>
      <Cards />
    </ScrollView>
  );
}

const styles = {
  container: {
    flex: 1,
    padding: 15
  }
};

export default Home;
