import { Dimensions } from "react-native";
import styled from "styled-components";

const { width, height } = Dimensions.get('screen');

export const Container = styled.View`
  margin-top: 1rem;
  /*max-width: ${ width };
  max-height: ${ height };*/
`;