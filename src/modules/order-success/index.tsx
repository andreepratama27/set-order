import React from "react";
import { View, Image, StyleSheet } from "react-native";

import { Button } from "commons/button";
import { Title, Caption } from "commons/text";
import { Container, Spacing } from "commons/ui";

import { Colors } from "styles";

const verified = require("../../assets/img/verified.png");

function OrderSuccess(props: any) {
  return (
    <Container justifyContent="center" alignItems="center">
      <View>
        <View style={styles.imgWrapper}>
          <Image source={verified} style={styles.img} />
        </View>

        <Title size={18} style={styles.textCenter} isBold>
          Congratulations
        </Title>
        <Spacing marginBottom={10} />
        <Caption style={styles.textCenter}>Your orderhas been placed.</Caption>
        <Spacing marginBottom={5} />
        <Caption style={styles.textCenter}>
          Please make sure time com on time
        </Caption>
      </View>

      <View style={styles.buttonWrapper}>
        <Button
          bgColor={Colors.warning}
          onPress={() => props.navigation.navigate("Home")}
        >
          <Title isBold>Got it</Title>
        </Button>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  buttonWrapper: {
    position: "absolute",
    bottom: 0,
    width: "100%"
  },
  textCenter: {
    textAlign: "center"
  },
  imgWrapper: {
    width: 70,
    height: 70,
    alignSelf: "center",
    marginBottom: 15
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  }
});

OrderSuccess.navigationOptions = {
  header: null
};

export default OrderSuccess;
