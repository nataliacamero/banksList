import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParamList} from '../../../navigation/types';

export interface IResponse {
  age: number;
  bankName: string;
  description: string;
  url: string;
  id: string;
}

export type ImageDimensions = {
  width: number;
  height: number;
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  StackParamList,
  'ProductsList'
>;

export type HomeRouteProp = RouteProp<StackParamList, 'Home'>;
