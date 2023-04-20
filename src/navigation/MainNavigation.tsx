import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackParamList} from './types';
import {BankDetails, Home} from '../screens';
import {MAIN_TITLE} from './constants';
import {Text} from 'react-native';

const Stack = createNativeStackNavigator<StackParamList>();

function MainNavigation(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: MAIN_TITLE,
            headerTintColor: 'black',
            headerStyle: {backgroundColor: '#f8f8f8'},
          }}
        />
        <Stack.Screen
          name="BankDetails"
          component={BankDetails}
          options={{
            title: MAIN_TITLE,
            headerBackTitle: 'Atrás',
            headerBackTitleVisible: false,
            headerTintColor: '#020202',
            headerStyle: {backgroundColor: '#f8f8f8'},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
