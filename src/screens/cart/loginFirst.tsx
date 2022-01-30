import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {MainButton} from '../../components/mainButton';

import AvatarIcon from '../../assets/avatar.svg';
import {styles} from './styles';

export const LoginFirstScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <AvatarIcon />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Login First!</Text>
        <Text style={styles.body}>Login first to view your cart</Text>
      </View>
      <View style={styles.btnContainer}>
        <MainButton text="LOGIN NOW" onPress={() => {}} />
        <TouchableOpacity style={styles.signUPContainer}>
          <Text style={styles.signUPText}>New here? Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
