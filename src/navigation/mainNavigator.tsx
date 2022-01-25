import React from 'react';

import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {NavigationContainer, ParamListBase} from '@react-navigation/native';
import {Routes} from '../config/constants';
import {ProductScreen} from '../screens/product';
import {DrawerNavigator} from './drawerNavigator';

export type NavigationProps<
  P extends ParamListBase,
  S extends Routes,
> = NativeStackScreenProps<P, S>;

export type MainStackParamList = {
  [Routes.Main]: undefined;
  [Routes.Product]: {
    name: string;
  };
};

const Stack = createNativeStackNavigator<MainStackParamList>();

export const MainNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName={Routes.Main}>
      <Stack.Screen
        name={Routes.Main}
        component={DrawerNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={Routes.Product}
        component={ProductScreen}
        options={{
          title: '',
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
