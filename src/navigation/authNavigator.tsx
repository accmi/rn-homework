import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from '../config/constants';
import {LoginScreen} from '../screens/auth/login';

const Stack = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Routes.Login} component={LoginScreen} />
    </Stack.Navigator>
  );
};
