import * as React from "react";
import { StyleSheet } from "react-native";
import {
  Heading,
  Title,
  Subtitle,
  View,
  Button,
  Text,
  Card,
  Image,
  Caption
} from "@shoutem/ui";
import { NavigationScreenProp } from "react-navigation";

type LandingProps = {
  navigation: NavigationScreenProp<any, any>;
};

function Landing(props: LandingProps) {
  return (
    <View style={styles.container}>
      <Heading>SetOrder</Heading>
      <Title>Ordering made simple</Title>
      <Subtitle>Dining out or busy restaurant lovers</Subtitle>

      <View>
        <Button
          styleName="secondary"
          onPress={() => props.navigation.navigate("Home")}
        >
          <Text>Browse Restaurants</Text>
        </Button>
      </View>

      <View
        styleName="horizontal space-between"
        style={styles.bottomBtnWrapper}
      >
        <Button onPress={() => props.navigation.navigate("Signup")}>
          <Text>Sign up</Text>
        </Button>
        <Button onPress={() => props.navigation.navigate("Login")}>
          <Text>Login</Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    alignItems: "center",
    justifyContent: "center"
  },
  bottomBtnWrapper: {
    width: "100%"
  }
});

Landing.navigationOptions = {
  header: null
};

export default Landing;
