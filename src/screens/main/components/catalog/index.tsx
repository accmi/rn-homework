import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import {PriceComponent} from '../../../../components/price';
import {ProductsResponseProducts} from '../../../../utils/API';

import {styles} from './styles';

interface CatalogComponentProps {
  products: ProductsResponseProducts[];
}

export const CatalogComponent: React.FC<CatalogComponentProps> = ({
  products,
}) => {
  return (
    <FlatList
      data={products}
      columnWrapperStyle={styles.columnWrapper}
      numColumns={2}
      keyExtractor={item => item.id}
      contentInset={{bottom: 50}}
      renderItem={({item}) => (
        <View style={styles.container}>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{
              uri: `https://picsum.photos/id/${item.id}/200/300`,
            }}
          />
          <View style={styles.nameContainer}>
            <Text numberOfLines={1} style={styles.name}>
              {item.attributes.name}
            </Text>
          </View>
          <PriceComponent price={Number(item.attributes.price)} />
        </View>
      )}
    />
  );
};
