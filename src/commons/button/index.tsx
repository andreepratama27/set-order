import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import styled from "styled-components/native";

import { Colors } from "styles";

type ButtonProps = {
  bgColor: "string";
  isTransparent: "boolean";
  borderRadius: "string";
};

export const Button = styled.TouchableOpacity`
  height: 50px;
  border-radius: ${(props: ButtonProps) =>
    props.borderRadius ? props.borderRadius : "4px"};
  background-color: ${(props: ButtonProps) =>
    props.bgColor ? props.bgColor : Colors.light};
  align-items: center;
  justify-content: center;
`;
