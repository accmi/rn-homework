import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './styles';

import SafetyIcon from '../../../../assets/safety.svg';

export const Safety = () => {
  return (
    <View style={styles.container}>
      <SafetyIcon />
      <Text style={styles.title}>
        {'Safe and Secure Payments \n 100% Authentic Ptoducts'}
      </Text>
    </View>
  );
};
