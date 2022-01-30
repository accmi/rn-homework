import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {ItemType} from '../..';

import {styles} from './styles';

interface PriceDetailsProps extends ItemType {}

export const PriceDetails: FC<PriceDetailsProps> = ({
  price,
  delivery,
  discount,
  tax,
  items,
  amount,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Price details</Text>
      <View style={styles.rowContainer}>
        <Text style={styles.rowTitle}>Price ({items} item)</Text>
        <Text style={styles.rowValue}>${price}</Text>
      </View>

      <View style={styles.rowContainer}>
        <Text style={styles.rowTitle}>Delivery</Text>
        <Text style={styles.rowValue}>${delivery}</Text>
      </View>

      <View style={styles.rowContainer}>
        <Text style={styles.rowTitle}>Discount</Text>
        <Text style={styles.discountValue}>-${discount}</Text>
      </View>

      <View style={styles.rowContainer}>
        <Text style={styles.rowTitle}>Tax (2%)</Text>
        <Text style={styles.rowValue}>${tax}</Text>
      </View>

      <View style={styles.separator} />

      <View style={styles.amountContainer}>
        <Text style={styles.amountTitle}>Amount Payable</Text>
        <Text style={styles.amountValue}>${amount}</Text>
      </View>
    </View>
  );
};
