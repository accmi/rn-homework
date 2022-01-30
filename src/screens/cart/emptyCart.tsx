import React, {FC} from 'react';
import {View, Text} from 'react-native';

import {MainButton} from '../../components/mainButton';

import BoxIcon from '../../assets/box.svg';
import {styles} from './styles';

interface EmptyCartProps {
  goBackToShopping(): void;
}

export const EmptyCart: FC<EmptyCartProps> = ({goBackToShopping}) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <BoxIcon />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Your Cart is Empty!</Text>
        <Text style={styles.body}>Add product in your cart now</Text>
      </View>
      <View style={styles.btnContainer}>
        <MainButton text="SHOP NOW" onPress={goBackToShopping} />
      </View>
    </View>
  );
};
