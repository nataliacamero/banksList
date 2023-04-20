import {useRoute} from '@react-navigation/native';
import React from 'react';
import {StatusBar, Text} from 'react-native';
import {Header} from '../../components';
import {BoldParagraph, Container, SafeAreaStyled, Separator} from './styles';
import {BankDetailsRouteProp} from './types';

const BankDetails: () => JSX.Element = () => {
  const route = useRoute<BankDetailsRouteProp>();
  const {info} = route?.params;

  return (
    <SafeAreaStyled>
      <StatusBar barStyle={'dark-content'} />
      <Header
        title={'Bank Details'}
        subtitle={'Here you will find the information of the chosen Bank.'}
        testID="header-bank-details"
      />
      <Container testID={`container-sku-product`}>
        <BoldParagraph>{info.bankName}</BoldParagraph>
        <Separator />
        <Text>{info.description}.</Text>
        <Separator />
        <Text>Fecha de creacion: {info.age} años.</Text>
      </Container>
    </SafeAreaStyled>
  );
};

export default BankDetails;
