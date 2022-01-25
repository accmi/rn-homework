import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from '../config/constants';
import {MainScreen} from '../screens/main';

const Stack = createNativeStackNavigator();

export const Home = () => (
  <Stack.Navigator initialRouteName={Routes.Home}>
    <Stack.Screen name={Routes.Home} component={MainScreen} />
  </Stack.Navigator>
);
