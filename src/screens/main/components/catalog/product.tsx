import React, {FC, useCallback} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {PriceComponent} from '../../../../components/price';
import {ProductsResponseProduct} from '../../../../utils/API';

import {styles} from './styles';

interface ProductProps {
  product: ProductsResponseProduct;
  onPress?(id: string): void;
}

export const Product: FC<ProductProps> = ({product, onPress}) => {
  const onProductPress = useCallback(() => {
    onPress?.(product.attributes.name);
  }, [onPress, product.attributes.name]);

  return (
    <TouchableOpacity style={styles.container} onPress={onProductPress}>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{
          uri: `https://picsum.photos/id/${product.id}/200/300`,
        }}
      />
      <View style={styles.nameContainer}>
        <Text numberOfLines={1} style={styles.name}>
          {product.attributes.name}
        </Text>
      </View>
      <PriceComponent price={Number(product.attributes.price)} />
    </TouchableOpacity>
  );
};
