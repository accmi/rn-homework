import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Routes} from '../config/constants';
import {MainScreen} from '../screens/main';
import {Menu} from '../components/menu';

import {drawerSections} from './drawerSections';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => (
  <Drawer.Navigator
    initialRouteName={Routes.Main}
    drawerContent={props => <Menu sections={drawerSections} {...props} />}>
    <Drawer.Screen
      name={Routes.Main}
      component={MainScreen}
      options={{
        title: 'Ecommerce store',
        drawerLabel: () => null,
      }}
    />
  </Drawer.Navigator>
);
