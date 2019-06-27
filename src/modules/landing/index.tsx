import * as React from "react";
import { View, SafeAreaView, Text, Image, ImageBackground } from "react-native";

import { Title } from "commons/text";
import { Button } from "commons/button";
import { Spacing, Column } from "commons/ui";

import { Colors } from "styles";
import styles from "./styles";

const bg = require("../../assets/img/bg.png");
const logo = require("../../assets/img/logo2x.png");

function Landing(props: any) {
  return (
    <SafeAreaView style={styles.full}>
      <ImageBackground source={bg} style={styles.container}>
        <View style={styles.overlay} />

        <View style={styles.menuWrapper}>
          <View style={styles.logoWrapper}>
            <Image source={logo} style={styles.images} />
          </View>

          <View style={styles.description}>
            <Title
              color={Colors.light}
              size={24}
              isBold
              style={styles.textCenter}
            >
              Ordering made simple
            </Title>
            <Spacing marginBottom={15} />

            <View style={styles.descriptionInner}>
              <Title color={Colors.light} size={20} style={styles.textCenter}>
                Dining out for busy restaurant lovers
              </Title>
            </View>
          </View>
        </View>

        <View style={styles.bottomWrapper}>
          <Button
            bgColor={Colors.warning}
            onPress={() => props.navigation.navigate("Signin")}
          >
            <Title isBold>Browse Restaurant</Title>
          </Button>

          <Spacing marginBottom={15} />

          <Column>
            <Button
              bgColor={"transparent"}
              style={styles.btnTransparent}
              onPress={() => props.navigation.navigate("Signup")}
            >
              <Title isBold color={Colors.light}>
                Sign Up
              </Title>
            </Button>

            <Button
              bgColor={"transparent"}
              style={styles.btnTransparent}
              onPress={() => props.navigation.navigate("Login")}
            >
              <Title isBold color={Colors.light}>
                Login
              </Title>
            </Button>
          </Column>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

Landing.navigationOptions = {
  header: null
};

export default Landing;
