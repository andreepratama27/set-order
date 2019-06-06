import React, { Component } from "react";
import {
  Icon,
  Title,
  Subtitle,
  Caption,
  View,
  TextInput,
  Button,
  Text,
  Divider
} from "@shoutem/ui";

function Login() {
  return (
    <View style={styles.container}>
      <View styleName="vertical h-center" style={styles.separator}>
        <Title>Create your account</Title>
        <Caption>Login to your account</Caption>
      </View>

      <View>
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput placeholder="Password" style={styles.input} />
        <Button styleName="secondary" style={styles.btn}>
          <Text>Sign In</Text>
        </Button>
      </View>

      <View style={styles.dividen}>
        <Text>OR</Text>
      </View>

      <View>
        <Button styleName="secondary" style={styles.btnWithMargin}>
          <Icon name="facebook" style={styles.icon} />
          <Text>Continue with Facebook</Text>
        </Button>

        <Button styleName="secondary" style={styles.btnWithMargin}>
          <Text>Continue with Google</Text>
        </Button>
      </View>
    </View>
  );
}

Login.navigationOptions = {
  headerStyle: {
    borderBottomWidth: 0,
    borderBottomColor: "transparent"
  }
};

const styles = {
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
  }
};

export default Login;
