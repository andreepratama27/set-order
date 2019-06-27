import React from "react";
import { TextInput } from "react-native";
import styled from "styled-components/native";

import { Colors } from "styles";

export const Input = styled.TextInput`
  border-bottom-width: ${props => (props.noBorder ? `0px` : `1px`)};
  border-bottom-color: ${Colors.smoke};
  height: 50px;
  background-color: ${Colors.light};
  padding-left: 15px;
`;
