import {Text, View} from 'react-native';
import styled from 'styled-components';

const HeaderContainer = styled(View)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #f8f8f8;
  width: 100%;
  height: 160px;
  padding: 24px;
`;

export const HeaderOne = styled(Text)`
  font-size: 32px;
  color: #020202;
  font-weight: 500;
`;
export const HeaderTwo = styled(Text)`
  font-size: 16px;
  color: #595959;
  align-self: center;
  text-align: center;
`;

export default HeaderContainer;
