import React from 'react';
import {cleanup, render, screen} from '@testing-library/react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import BankDetails from '../BankDetails';

jest.useFakeTimers();
jest.mock('@react-navigation/native', () => ({
  useRoute: jest.fn(),
  useNavigation: jest.fn(),
}));

const useNavigationMock = useNavigation as jest.MockedFunction<
  typeof useNavigation
>;

afterEach(cleanup);

describe('<BankDetails/>', () => {
  beforeEach(() => {
    useNavigationMock.mockReset();
  });

  it('Should render the component', () => {
    const infoItem = {
      bankName: 'Banregio',
      description: 'Somos el banco de creadores',
      age: 10,
    };
    const route = {params: {info: infoItem}};
    (useRoute as jest.Mock).mockReturnValue(route);
    const rendered = render(<BankDetails />).toJSON();
    expect(rendered).toMatchSnapshot();
  });

  it('Should render the Title -Bank Details-', () => {
    render(<BankDetails />);
    const {getByTestId} = screen;
    const title = getByTestId('title-header-bank-details');
    expect(title.children[0]).toBe('Bank Details');
  });
  it('Should render the subtitle -Here you can...-', () => {
    render(<BankDetails />);
    const {getByTestId} = screen;
    const subtitle = getByTestId('subtitle-header-bank-details');
    expect(subtitle.children[0]).toBe(
      'Here you will find the information of the chosen Bank.',
    );
  });
});
