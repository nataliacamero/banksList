import React from 'react';
import {cleanup, render, screen} from '@testing-library/react-native';
import {useNavigation} from '@react-navigation/native';
import Home from '../Home';
import {Context} from '../../../context/Context';

jest.useFakeTimers();
jest.mock('@react-navigation/native', () => ({
  useRoute: jest.fn(),
  useNavigation: jest.fn(),
}));

const useNavigationMock = useNavigation as jest.MockedFunction<
  typeof useNavigation
>;

afterEach(cleanup);

describe('<Home/>', () => {
  beforeEach(() => {
    useNavigationMock.mockReset();
  });

  it('Should render the component', () => {
    const value = {
      banksInfo: [
        {
          age: 10,
          bankName: 'Paga Todo',
          description: 'Banco Paga Todo es Para Todos',
          id: '168207566032366446',
          url: 'https://firebasestorage.googleapis.com/v0/b/stagingpagatodo-286214.appspot.com/o/Challenge%2Flogo-pagatodo.jpeg?alt=media&token=38b6ac4d-85ac-4288-bada-88eb5a0dec20',
        },
        {
          age: 11,
          bankName: 'BBVA Bancomer',
          description: 'BBVA Bancomer Creando Oportunidades',
          id: '1682075660336678274',
          url: 'https://firebasestorage.googleapis.com/v0/b/stagingpagatodo-286214.appspot.com/o/Challenge%2Flogo-bbva.jpeg?alt=media&token=435ed70e-061b-4a80-a216-c69cea04f068',
        },
      ],
      setBanksInfo: jest.fn(),
    };
    const rendered = render(
      <Context.Provider value={value}>
        <Home />
      </Context.Provider>,
    ).toJSON();
    // const rendered = render(<Home />).toJSON();
    expect(rendered).toMatchSnapshot();
  });

  it('Should render the Title -Available Banks-', () => {
    render(<Home />);
    const {getByTestId} = screen;
    const title = getByTestId('title-header-home');
    expect(title.children[0]).toBe('Available Banks');
  });
  it('Should render the subtitle -Here you can...-', () => {
    render(<Home />);
    const {getByTestId} = screen;
    const subtitle = getByTestId('subtitle-header-home');
    expect(subtitle.children[0]).toBe(
      'Find your preferred bank in our list of available banks.',
    );
  });

  it('Should display the data', () => {
    const value = {
      banksInfo: [
        {
          age: 10,
          bankName: 'Paga Todo',
          description: 'Banco Paga Todo es Para Todos',
          id: '168207566032366446',
          url: 'https://firebasestorage.googleapis.com/v0/b/stagingpagatodo-286214.appspot.com/o/Challenge%2Flogo-pagatodo.jpeg?alt=media&token=38b6ac4d-85ac-4288-bada-88eb5a0dec20',
        },
        {
          age: 11,
          bankName: 'BBVA Bancomer',
          description: 'BBVA Bancomer Creando Oportunidades',
          id: '1682075660336678274',
          url: 'https://firebasestorage.googleapis.com/v0/b/stagingpagatodo-286214.appspot.com/o/Challenge%2Flogo-bbva.jpeg?alt=media&token=435ed70e-061b-4a80-a216-c69cea04f068',
        },
      ],
      setBanksInfo: jest.fn(),
    };
    render(
      <Context.Provider value={value}>
        <Home />
      </Context.Provider>,
    ).toJSON();
    const {getByTestId} = screen;
    const flatList = getByTestId('banks-list');
    expect(flatList.props.data.length).toEqual(value.banksInfo.length);
    value.banksInfo.forEach(item => {
      const listItem = flatList.props.renderItem({item});
      expect(listItem.props.bankName).toBe(item.bankName);
      expect(listItem.props.source.uri).toBe(item.url);
      expect(listItem.props.onPress).toBeDefined();
      expect(listItem.key).toBe(item.id.toString());
    });
  });
});
