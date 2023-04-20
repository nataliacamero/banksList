import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, StatusBar, Text} from 'react-native';
import {CustomeLogo, Header} from '../../components';
import {BoldParagraph, Container, SafeAreaStyled} from './styles';
import {HomeScreenNavigationProp, IResponse} from './types';
import useTransformGetData from '../../hooks/customeHooks/useTransformGetData';

const Home: () => JSX.Element = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const {banksData, isloading, isError} = useTransformGetData();

  return (
    <SafeAreaStyled>
      <StatusBar barStyle={'dark-content'} />
      <Header
        title={'Available Banks'}
        subtitle={'Find your preferred bank in our list of available banks.'}
        testID="header-home"
      />
      <Container testID={`container-sku-product`}>
        {isError && <BoldParagraph>Ocurrio un error.</BoldParagraph>}
        {isloading && <BoldParagraph>Loading...</BoldParagraph>}
        {banksData && banksData ? (
          <FlatList<IResponse>
            data={banksData}
            renderItem={({item}) => (
              <CustomeLogo
                onPress={() =>
                  navigation.navigate('BankDetails', {
                    info: item,
                  })
                }
                key={item.id}
                bankName={item.bankName}
                source={{
                  uri: `${item.url}`,
                }}
              />
            )}
            testID="banks-list"
          />
        ) : (
          <BoldParagraph>Loading...</BoldParagraph>
        )}
      </Container>
    </SafeAreaStyled>
  );
};

export default Home;
