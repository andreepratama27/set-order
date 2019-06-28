import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Colors } from "styles";

export const Divider = styled.View`
  height: 40px;
  justify-content: center;
  background-color: ${Colors.smoke};
  padding-left: 15px;
`;

export const Column = styled.View`
  flex-direction: ${(props: any) => (props.isColumn ? "column" : "row")};
  justify-content: ${(props: any) =>
    props.justifyContent ? props.justifyContent : "flex-start"};
  align-items: ${(props: any) =>
    props.alignItems ? props.alignItems : "flex-start"};
`;

export const List = styled.TouchableOpacity`
  background-color: ${Colors.light};
  height: ${(props: any) => (props.height ? props.height : "60px")};
  justify-content: center;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Spacing = styled.View`
  margin-bottom: ${(props: any) =>
    props.marginBottom ? props.marginBottom : 0};
  margin-top: ${(props: any) => (props.marginTop ? props.marginTop : 0)};
`;
