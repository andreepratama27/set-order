import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

import { Title, P, Caption } from "commons/text";
import { Input } from "commons/input";
import { Spacing } from "commons/ui";
import { Button } from "commons/button";
import { Colors } from "styles";

import * as Icon from "assets/icons/";

function Signup() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Title size={22} isBold>
          Create your account
        </Title>
      </View>

      <Spacing marginBottom={15} />

      <Input placeholder="Full name" style={styles.input} />
      <Spacing marginTop={15} />

      <Input placeholder="Email" style={styles.input} />
      <Spacing marginTop={15} />
      <Input placeholder="Password" style={styles.input} secureTextEntry />

      <Spacing marginTop={15} />

      <Button bgColor={Colors.warning}>
        <Title isBold>Sign In</Title>
      </Button>

      <View style={styles.divider}>
        <Title color={Colors.text} isBold>
          OR
        </Title>
      </View>

      <View>
        <Button bgColor={Colors.facebook}>
          <View style={styles.icon}>
            <Image source={Icon.facebook.default} />
          </View>
          <Title isBold color={Colors.light}>
            Continue with Facebook
          </Title>
        </Button>

        <Spacing marginTop={15} />

        <Button bgColor={"#f7f7f7"}>
          <View style={styles.icon}>
            <Image source={Icon.google.default} />
          </View>
          <Title isBold>Continue with Google</Title>
        </Button>
      </View>
    </View>
  );
}

Signup.navigationOptions = {
  headerStyle: {
    elevation: 0,
    borderBottomWidth: 1,
    borderBottomColor: Colors.background
  }
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    padding: 15
  },
  input: {
    backgroundColor: Colors.smoke,
    borderRadius: 4
  },
  separator: {
    marginBottom: 25
  },
  header: {
    height: "50@vs",
    alignItems: "center",
    justifyContent: "center"
  },
  btn: {
    borderRadius: 4
  },
  btnWithMargin: {
    marginBottom: 10,
    borderRadius: 4
  },
  dividen: {
    height: 60,
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    position: "absolute",
    left: 10
  },
  divider: {
    height: "60@vs",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Signup;
