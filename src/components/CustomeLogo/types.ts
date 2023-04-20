import {ImageProps} from 'react-native';

export interface ICustomeLogoProps extends ImageProps {
  bankName: string;
  onPress: () => void;
}

export interface StyledImageProps {
  bankName: string;
}
