import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Routes} from '../config/constants';
import {MainScreen} from '../screens/main';
import {Menu} from '../components/menu';
import {CartNavigator} from './cartNavigator';

import {drawerSections} from './drawerSections';
import {colors} from '../config/colors';
import {HeaderButton} from '../components/headerButton';

import CartWhiteIcon from '../assets/cartWhite.svg';
import HumburgerIcon from '../assets/humburger.svg';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName={Routes.Main}
      drawerContent={props => <Menu sections={drawerSections} {...props} />}
      screenOptions={({navigation}) => ({
        headerStyle: {
          backgroundColor: colors.blue,
        },
        headerTitleStyle: {
          color: colors.white,
        },
        headerLeft: () => (
          <HeaderButton
            onPress={navigation.openDrawer}
            icon={<HumburgerIcon />}
          />
        ),
        headerRight: () => (
          <HeaderButton
            onPress={navigation.navigate}
            icon={<CartWhiteIcon />}
          />
        ),
      })}>
      <Drawer.Screen
        name={Routes.Main}
        component={MainScreen}
        options={{
          title: 'Ecommerce store',
          drawerLabel: () => null,
        }}
      />
      <Drawer.Screen
        name={Routes.CartNavigator}
        component={CartNavigator}
        options={{
          title: 'My Cart',
          headerRight: () => null,
        }}
      />
    </Drawer.Navigator>
  );
};
