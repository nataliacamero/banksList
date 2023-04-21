import React from 'react';
import {cleanup, render, screen} from '@testing-library/react-native';
import {useNavigation} from '@react-navigation/native';
import Home from '../Home';

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
    const rendered = render(<Home />).toJSON();
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
});
