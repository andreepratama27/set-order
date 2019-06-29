import React from "react";
import { Text } from "react-native";
import { Colors } from "styles";

import styled from "styled-components/native";

type TextProps = {
  isWhite: "boolean";
  isBold: "boolean";
  isSemibold: "boolean";
  size: "number";
  color: "string";
};

export const Title = styled.Text`
  font-size: ${(props: TextProps) => (props.size ? props.size : "14px")};
  font-family: ${(props: TextProps) =>
    props.isBold ? "SFUIText-Bold" : "SFUIText-Regular"};
  color: ${(props: TextProps) => (props.color ? props.color : Colors.dark)};
  line-height: 28px;
`;

export const Medium = styled.Text`
  font-size: 14px;
  font-family: "SFUIText-Bold";
  line-height: 28px;
`;

export const Caption = styled.Text`
  font-size: ${(props: TextProps) => (props.size ? props.size : "12px")};
  font-family: "SFUIText-Light";
  color: ${(props: TextProps) => (props.color ? props.color : Colors.dark)};
`;

export const P = styled.Text`
  font-size: 14px;
  font-family: "SFUIText-Regular";
  color: ${Colors.text};
`;

export const TitleHeader = styled(Title)`
  width: 100%;
  color: #333;
  text-align: center;
  font-family: "SFUIText-Bold";
  font-size: 16;
`;
