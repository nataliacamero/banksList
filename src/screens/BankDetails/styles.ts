import {SafeAreaView, Text, View} from 'react-native';
import styled from 'styled-components';

export const SafeAreaStyled = styled(SafeAreaView)`
  background-color: white;
  height: 100%;
`;

export const Container = styled(View)`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const BoldParagraph = styled(Text)`
  font-size: 18px;
  font-weight: 700;
  color: #020202;
`;

export const Separator = styled(View)`
  margin-top: 20px;
`;
