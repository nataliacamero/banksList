import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components';

export const SafeAreaStyled = styled(SafeAreaView)`
  background-color: white;
`;

export const Container = styled(View)`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const BoldParagraph = styled(Text)`
  font-size: 16px;
  font-weight: 700;
  color: #020202;
`;
