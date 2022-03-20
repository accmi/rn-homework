import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from '../config/constants';
import {MainScreen} from '../screens/main';

const Stack = createStackNavigator();

export const Home = () => (
  <Stack.Navigator initialRouteName={Routes.Home}>
    <Stack.Screen name={Routes.Home} component={MainScreen} />
  </Stack.Navigator>
);
