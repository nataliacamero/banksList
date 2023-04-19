import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList, Image, StatusBar, Text} from 'react-native';
import {Header} from '../../components';
import {BoldParagraph, Container, SafeAreaStyled} from './styles';
import {HomeScreenNavigationProp} from './types';
import {generateId} from '../../utils/functions';
import getBanksInfo from '../../services/getBanksInfo';

interface IResponse {
  age: number;
  bankName: string;
  description: string;
  url: string;
  id: string;
}

type ImageDimensions = {
  width: number;
  height: number;
};

const dimensionsImages = (itemName: string): ImageDimensions => {
  const customeHeight = itemName === 'Banregio' ? 80 : 120;
  return {
    width: 160,
    height: customeHeight,
  };
};

const Home: () => JSX.Element = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [data, setData] = useState<IResponse[] | null>(null);

  useEffect(() => {
    if (!data) {
      getBanksInfo()
        .then(dataService => {
          let dataWithIdProperty =
            dataService &&
            dataService?.map((item: IResponse) => {
              item.id = generateId();
              console.log(item.url);

              return item;
            });
          setData(dataWithIdProperty);
        })
        .catch((error: {message: string}) => console.error(error.message));
    }
  }, [data]);

  return (
    <SafeAreaStyled>
      <StatusBar barStyle={'dark-content'} />
      <Header
        title={'Available Banks'}
        subtitle={'Find your preferred bank in our list of available banks.'}
        testID="header-products-list"
      />
      <Container testID={`container-sku-product`}>
        {data && data ? (
          <FlatList<IResponse>
            data={data}
            renderItem={({item}) => (
              <Image
                // eslint-disable-next-line react-native/no-inline-styles
                style={dimensionsImages(item.bankName)}
                source={{
                  uri: `${item.url}`,
                }}
              />
            )}
          />
        ) : (
          <BoldParagraph>Loading...</BoldParagraph>
        )}
      </Container>
    </SafeAreaStyled>
  );
};

export default Home;
