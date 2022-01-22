import React, {FC} from 'react';
import {View, Text, Image} from 'react-native';
import {PriceComponent} from '../../../../components/price';
import {ProductsResponseProduct} from '../../../../utils/API';

import {styles} from './styles';

interface ProductProps {
  product: ProductsResponseProduct;
}

export const Product: FC<ProductProps> = ({product}) => (
  <View style={styles.container}>
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
  </View>
);
