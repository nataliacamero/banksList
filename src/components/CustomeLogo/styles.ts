import {Image} from 'react-native';
import styled from 'styled-components';
import {StyledImageProps} from './types';

const ImageStyled = styled(Image)<StyledImageProps>`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: ${({bankName}) => (bankName === 'Banregio' ? 80 : 120)}px;
  padding: 24px;
`;

export default ImageStyled;
