import React from "react";
import { View, Image } from "react-native";

import { ScaledSheet } from "react-native-size-matters";

import { Title, TitleHeader, Caption } from "commons/text";
import { Column, List, Spacing } from "commons/ui";

import { Colors } from "styles";

function ProfileDetail() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarWrapper}>
          <Image
            source={{ uri: "https://placehold.it/300x300" }}
            style={styles.avatar}
          />
        </View>

        <Spacing marginBottom={5} />

        <Title isBold color={Colors.dark}>
          Andy Luther
        </Title>
        <Caption>Andyluther@gmail.com</Caption>
      </View>

      <List style={styles.list}>
        <Caption>Phone number</Caption>
        <Title>+61 41103222</Title>
      </List>

      <Spacing marginBottom={15} />

      <List style={styles.list}>
        <Title>Notification</Title>
      </List>
      <List style={styles.list}>
        <Title>Change password</Title>
      </List>

      <View style={styles.bottomBtn}>
        <List style={[styles.list, { alignItems: "center" }]}>
          <Title color={Colors.danger}>Logout</Title>
        </List>
      </View>
    </View>
  );
}

ProfileDetail.navigationOptions = {
  headerTitle: <TitleHeader>Profile</TitleHeader>,
  headerRight: <View />
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.smoke
  },
  header: {
    backgroundColor: Colors.light,
    height: "180@vs",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: Colors.background
  },
  avatarWrapper: {
    width: 55,
    height: 55
  },
  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: 25,
    resizeMode: "contain"
  },
  list: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.background
  },
  bottomBtn: {
    width: "100%",
    position: "absolute",
    bottom: 10
  }
});

export default ProfileDetail;
