import React from 'react';
import {ICustomeLogoProps} from './types';
import ImageStyled from './styles';
import {TouchableOpacity} from 'react-native';
function CustomeLogo({
  bankName,
  onPress,
  ...props
}: ICustomeLogoProps): JSX.Element {
  return (
    <TouchableOpacity onPress={onPress}>
      <ImageStyled bankName={bankName} testID="img-bank-logo" {...props} />
    </TouchableOpacity>
  );
}

export default CustomeLogo;
