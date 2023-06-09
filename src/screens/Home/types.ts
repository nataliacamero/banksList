import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParamList} from '../../navigation/types';

export interface IResponse {
  age: number;
  bankName: string;
  description: string;
  url: string;
  id: string;
}

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  StackParamList,
  'Home'
>;

export type HomeRouteProp = RouteProp<StackParamList, 'Home'>;
