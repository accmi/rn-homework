import React, {FC, useCallback, useState} from 'react';
import {FlatList, View} from 'react-native';
import {Routes} from '../../config/constants';
import {
  MainStackParamList,
  NavigationProps,
} from '../../navigation/mainNavigator';
import {CartItem} from './components/cartItem';
import {PriceDetails} from './components/priceDetails';
import {EmptyCart} from './emptyCart';
import {MainButton} from '../../components/mainButton';
import {Safety} from './components/safety';

import {styles} from './styles';
import {FireworksComponent} from '../../components/fireworks';

interface CartScreenProps
  extends NavigationProps<MainStackParamList, Routes.Cart> {}

export interface ItemType {
  uri?: string;
  title?: string;
  color?: string;
  price?: number;

  isDetails?: boolean;
  delivery?: number;
  discount?: number;
  tax?: number;
  items?: number;
  amount?: number;
  type: ItemKind;
}

enum ItemKind {
  Item,
  Details,
  Button,
  Safety,
}

const getSections = (): ItemType[] => {
  return [
    {
      uri: 'https://picsum.photos/id/7/200/300',
      title: 'Xiaomi Mi A3',
      color: 'Blue',
      price: 244,
      type: ItemKind.Item,
    },
    {
      uri: 'https://picsum.photos/id/2/200/300',
      title: 'Macbook Pro',
      color: 'silver',
      price: 1000,
      type: ItemKind.Item,
    },
    {
      price: 1244,
      delivery: 1,
      amount: 1300.12,
      discount: 8,
      tax: 4.44,
      items: 2,
      type: ItemKind.Details,
    },
    {
      type: ItemKind.Safety,
    },
    {
      type: ItemKind.Button,
    },
  ];
};

export const CartScreen: FC<CartScreenProps> = ({navigation: {navigate}}) => {
  // TODO: make a request for cart items
  const isCartEmpty = false;
  const goBackToShoping = useCallback(() => {
    navigate(Routes.Main);
  }, [navigate]);
  const [isFireworkShown, setIsFireworkShown] = useState(false);

  if (isCartEmpty) {
    return <EmptyCart goBackToShopping={goBackToShoping} />;
  }

  const renderItem = ({item}: {item: ItemType}) => {
    switch (item.type) {
      case ItemKind.Item:
        return <CartItem {...item} />;
      case ItemKind.Details:
        return <PriceDetails {...item} />;
      case ItemKind.Safety:
        return <Safety />;
      default:
        return (
          <MainButton
            text="PROCEED TO PAYMENT"
            onPress={() => setIsFireworkShown(true)}
          />
        );
    }
  };

  return (
    <View style={styles.cartContainer}>
      <FlatList
        style={styles.cartSectionListContainer}
        data={getSections()}
        keyExtractor={(_, index) => String(index)}
        renderItem={renderItem}
      />
      {isFireworkShown && (
        <FireworksComponent playableTime={10000} ballsCount={50} />
      )}
    </View>
  );
};
