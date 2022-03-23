import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationContainer, ParamListBase} from '@react-navigation/native';
import {Routes} from '../config/constants';
import {ProductScreen} from '../screens/product';
import {DrawerNavigator} from './drawerNavigator';
import {AuthNavigator} from './authNavigator';
import {SelectColorErrorScreen} from '../screens/modals/selectColorError';
import {ProductAddedScreen} from '../screens/modals/productAdded';
import {LoginToContinueScreen} from '../screens/modals/loginToContinue';
import {HeaderButton} from '../components/headerButton';

import {colors} from '../config/colors';
import BackIcon from '../assets/back.svg';
import {ErrorLoginScreen} from '../screens/auth/login/errorLogin';

export type NavigationProps<
  P extends ParamListBase,
  S extends Routes,
> = NativeStackScreenProps<P, S>;

export type MainStackParamList = {
  [Routes.Main]: undefined;
  [Routes.SelectColorErrorModal]: undefined;
  [Routes.ProductAddedModal]: undefined;
  [Routes.LoginToContinueModal]: undefined;
  [Routes.AuthNavigator]: {
    screen: Routes.Login | Routes.SignUp | Routes.ForgotPassword;
  };
  [Routes.AuthErrorModal]: {
    tryAgainCallback(): void;
  };
  [Routes.Product]: {
    name: string;
  };
};

const Stack = createStackNavigator<MainStackParamList>();

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
        options={({navigation}) => ({
          title: '',
          headerBackTitle: ' ',
          headerStyle: {
            backgroundColor: colors.blue,
          },
          headerTitleStyle: {
            color: colors.white,
          },
          headerLeft: () => (
            <HeaderButton onPress={navigation.goBack} icon={<BackIcon />} />
          ),
        })}
      />
      <Stack.Screen
        name={Routes.SelectColorErrorModal}
        component={SelectColorErrorScreen}
        options={{
          presentation: 'transparentModal',
          headerShown: false,
          cardStyleInterpolator:
            CardStyleInterpolators.forScaleFromCenterAndroid,
        }}
      />

      <Stack.Screen
        name={Routes.ProductAddedModal}
        component={ProductAddedScreen}
        options={{
          presentation: 'transparentModal',
          headerShown: false,
          cardStyleInterpolator:
            CardStyleInterpolators.forScaleFromCenterAndroid,
        }}
      />

      <Stack.Screen
        name={Routes.LoginToContinueModal}
        component={LoginToContinueScreen}
        options={{
          presentation: 'transparentModal',
          headerShown: false,
          cardStyleInterpolator:
            CardStyleInterpolators.forScaleFromCenterAndroid,
        }}
      />
      <Stack.Screen
        name={Routes.AuthErrorModal}
        component={ErrorLoginScreen}
        options={{
          presentation: 'transparentModal',
          headerShown: false,
          cardStyleInterpolator:
            CardStyleInterpolators.forScaleFromCenterAndroid,
        }}
      />
      <Stack.Screen
        name={Routes.AuthNavigator}
        component={AuthNavigator}
        options={{
          title: '',
          headerBackTitle: ' ',
          headerStyle: {
            backgroundColor: colors.white,
          },
          headerTitleStyle: {
            color: colors.white,
          },
          headerLeft: () => null,
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
