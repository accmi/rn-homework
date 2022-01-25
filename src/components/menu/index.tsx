import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import React, {FC, useCallback} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Routes} from '../../config/constants';
import {DrawerSectionsType} from '../../navigation/drawerSections';
import {SeparatorComponent} from '../separator';

import {styles} from './styles';

interface MenuProps extends DrawerContentComponentProps {
  sections: DrawerSectionsType[];
}

export const Menu: FC<MenuProps> = ({sections, navigation: {navigate}}) => {
  const navigateToRoute = useCallback(
    (route: Routes) => {
      navigate(route);
    },
    [navigate],
  );

  return (
    <DrawerContentScrollView>
      <View style={styles.header}>
        <Text style={styles.headerText}>Ecomerce Store</Text>
      </View>
      {sections.map(({title, items}, index) => (
        <>
          {title && (
            <Text key={title} style={styles.sectionHeader}>
              {title}
            </Text>
          )}
          {items.map(({icon, label, route}) => (
            <TouchableOpacity
              onPress={navigateToRoute.bind(null, route)}
              key={label}
              style={styles.itemContainer}>
              <View>{icon}</View>
              <Text style={styles.itemText}>{label}</Text>
            </TouchableOpacity>
          ))}

          {sections.length - 1 > index && <SeparatorComponent />}
        </>
      ))}
    </DrawerContentScrollView>
  );
};
