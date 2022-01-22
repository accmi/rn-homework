import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
import {Routes} from '../config/constants';
import {MainScreen} from '../screens/main';
import {ProductScreen} from '../screens/product';

export type NavigationProps<
  P extends ParamListBase,
  S extends Routes,
> = NativeStackScreenProps<P, S>;

export type MainStackParamList = {
  [Routes.Home]: undefined;
  [Routes.Product]: {
    name: string;
  };
};

const Stack = createNativeStackNavigator<MainStackParamList>();

export const MainNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName={Routes.Home}>
      <Stack.Screen name={Routes.Home} component={MainScreen} />
      <Stack.Screen name={Routes.Product} component={ProductScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
