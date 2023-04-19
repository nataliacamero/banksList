import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackParamList} from './types';
import {Home} from '../screens';
import {MAIN_TITLE} from './constants';

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
            headerStyle: {backgroundColor: '#f8f8f8'},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
