import React from "react";
import { View, TouchableOpacity } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import { Colors } from "styles";
import styled from "styled-components/native";

import { Button } from "commons/button";
import { Column, Spacing } from "commons/ui";
import { Title, TitleHeader, Caption } from "commons/text";

import styles from "./styles";

const Dot = styled.TouchableOpacity`
  width: 10px;
  height: 10px;
  border-radius: 30px;
  background-color: ${Colors.warning};
`;

const Divider = styled.View`
  height: 40px;
  justify-content: center;
  padding-left: 15px;
  padding-right: 15px;
  border-top-width: 1px;
  border-top-color: ${Colors.background};
  border-bottom-width: 1px;
  border-bottom-color: ${Colors.background};
`;

type FilterProps = {
  navigation: NavigationScreenProp<any, any>;
};

function Filter(props: FilterProps) {
  const [neighborhood] = React.useState([
    {
      title: "Anthem",
      active: false
    },
    { title: "Buolder Juction", active: false },
    { title: "Chinatown", active: true },
    { title: "Downtown", active: false },
    { title: "Green Valley South", active: false },
    { title: "Henderson", active: false },
    { title: "Northwest Last Vegas", active: false },
    { title: "Southeas", active: false },
    { title: "Southwest", active: false },
    { title: "Summerlin", active: false }
  ]);

  const [cuisines] = React.useState([
    {
      title: "American (New)",
      active: false
    },
    { title: "American (Traditional)", active: false },
    { title: "Barbeque", active: false },
    { title: "Dinner Theater", active: false },
    { title: "French", active: false },
    { title: "Indian", active: false },
    { title: "Japanese", active: false },
    { title: "Lebanese", active: false },
    { title: "Mexican", active: false },
    { title: "Sandwiches", active: false },
    { title: "Seafood", active: false }
  ]);

  return (
    <View style={styles.container}>
      <Divider>
        <Column alignItems="center">
          <Caption>
            <Title>Neighbourhood</Title>
          </Caption>
          <Spacing marginRight={10} />
          <Dot />
        </Column>
      </Divider>

      <View style={styles.content}>
        {neighborhood.map((v, k) => (
          <TouchableOpacity
            style={[styles.pill, v.active ? styles.pillActive : null]}
            key={k}
          >
            <Caption>{v.title}</Caption>
          </TouchableOpacity>
        ))}
      </View>

      <Divider>
        <Column alignItems="center">
          <Caption>
            <Title>Cuisines</Title>
          </Caption>
        </Column>
      </Divider>

      <View style={styles.content}>
        {cuisines.map((v, k) => (
          <TouchableOpacity
            style={[styles.pill, v.active ? styles.pillActive : null]}
            key={k}
          >
            <Caption>{v.title}</Caption>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.buttonWrapper}>
        <Button
          bgColor={Colors.warning}
          onPress={() => props.navigation.goBack()}
        >
          <Title isBold color={Colors.dark}>
            Done
          </Title>
        </Button>
      </View>
    </View>
  );
}

Filter.navigationOptions = {
  headerStyle: {
    elevation: 0
  },
  headerTitle: <TitleHeader>Filter</TitleHeader>,
  headerRight: <View />
};

export default Filter;
