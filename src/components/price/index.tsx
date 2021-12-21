import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './styles';

interface PriceComponentProps {
  price: number;
}

interface OfferedPrice {
  newPrice: string;
  oldPrice: string;
  offer: string;
}

const getRandomOffer = (price: number): OfferedPrice => {
  const randomOffer = Math.random() * (100 - 5) + 5;

  return {
    newPrice: `$${((price * randomOffer) / 100).toFixed(1)}`,
    oldPrice: `$${Number(price).toFixed(0)}`,
    offer: `${randomOffer.toFixed(0)}%`,
  };
};

export const PriceComponent: React.FC<PriceComponentProps> = ({price}) => {
  const {newPrice, oldPrice, offer} = getRandomOffer(price);

  return (
    <View style={styles.priceContainer}>
      <Text style={styles.newPrice}>{`${newPrice} `}</Text>
      <Text style={styles.oldPrice}>{`${oldPrice} `}</Text>
      <Text style={styles.offer}>{offer} Off</Text>
    </View>
  );
};
