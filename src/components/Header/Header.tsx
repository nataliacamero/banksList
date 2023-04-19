import React from 'react';
import HeaderContainer, {HeaderOne, HeaderTwo} from './styles';
import {IHeaderProps} from './types';

function Header({title, subtitle, testID}: IHeaderProps): JSX.Element {
  return (
    <HeaderContainer>
      <HeaderOne testID={`title-${testID}`}>{title}</HeaderOne>
      <HeaderTwo testID={`subtitle-${testID}`}>{subtitle}</HeaderTwo>
    </HeaderContainer>
  );
}

export default Header;
