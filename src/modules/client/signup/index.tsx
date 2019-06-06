import React, { Component } from "react";
import {
  Icon,
  Title,
  View,
  TextInput,
  Button,
  Text,
  Divider
} from "@shoutem/ui";
import { StyleSheet } from "react-native";

function Signup() {
  return (
    <View style={styles.container}>
      <View styleName="horizontal h-center" style={styles.separator}>
        <Title>Create your account</Title>
      </View>

      <View>
        <TextInput placeholder="Full name" style={styles.input} />
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput placeholder="Password" style={styles.input} />
        <Button styleName="secondary">
          <Text>Sign Up</Text>
        </Button>
      </View>

      <View style={styles.dividen}>
        <Text>OR</Text>
      </View>

      <View>
        <Button styleName="secondary" style={styles.btn}>
          <Icon name="facebook" style={styles.icon} />
          <Text>Continue with Facebook</Text>
        </Button>

        <Button styleName="secondary">
          <Text>Continue with Google</Text>
        </Button>
      </View>
    </View>
  );
}

Signup.navigationOptions = {
  headerStyle: {
    borderBottomWidth: 0,
    borderBottomColor: "transparent"
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  },
  input: {
    paddingTop: 0,
    paddingBottom: 0,
    borderRadius: 4,
    height: 40,
    marginBottom: 15,
    backgroundColor: "#f7f7f7"
  },
  separator: {
    marginBottom: 25
  },
  btn: {
    marginBottom: 10
  },
  dividen: {
    height: 60,
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    position: "absolute",
    left: 10
  }
});

export default Signup;
