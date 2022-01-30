import React, {FC} from 'react';
import {Text, View, Image} from 'react-native';
import {ItemType} from '../..';
import {PriceComponent} from '../../../../components/price';

import {styles} from './styles';

interface CartItemProps extends ItemType {}

export const CartItem: FC<CartItemProps> = ({uri, title, color, price}) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemInfoContainer}>
        <Image style={styles.itemImage} source={{uri}} resizeMode="cover" />
        <View style={styles.itemTextContainer}>
          <Text style={styles.itemTitle}>{title}</Text>
          <Text style={styles.itemColor}>Color: {color}</Text>
          <PriceComponent price={price || 0} />
        </View>
      </View>
    </View>
  );
};
