import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {AsyncStorageKeys, Routes} from '../config/constants';
import {LoginFirstScreen} from '../screens/cart/loginFirst';
import {CartScreen} from '../screens/cart';
import {SplashScreen} from '../screens/splash';

import {useAsyncStorage} from '../hooks/useAsyncStorage';

const Stack = createStackNavigator();

export const CartNavigator = () => {
  const {loading, data} = useAsyncStorage(AsyncStorageKeys.UserToken);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {data !== null ? (
        <Stack.Screen
          name={Routes.CartLoginFirst}
          component={LoginFirstScreen}
        />
      ) : (
        <Stack.Screen name={Routes.Cart} component={CartScreen} />
      )}
    </Stack.Navigator>
  );
};
