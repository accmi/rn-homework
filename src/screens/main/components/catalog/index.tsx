import React from 'react';
import {FlatList} from 'react-native';
import {ProductsResponseProduct} from '../../../../utils/API';
import {Product} from './product';

import {styles} from './styles';

interface CatalogComponentProps {
  products: ProductsResponseProduct[];
  refreshControll: React.ReactElement;
  navigateToProductScreen(id: string): void;
}

export const CatalogComponent: React.FC<CatalogComponentProps> = ({
  products,
  refreshControll,
  navigateToProductScreen,
}) => {
  return (
    <FlatList
      data={products}
      columnWrapperStyle={styles.columnWrapper}
      numColumns={2}
      keyExtractor={item => item.id}
      contentInset={{bottom: 50}}
      refreshControl={refreshControll}
      renderItem={({item}) => (
        <Product product={item} onPress={navigateToProductScreen} />
      )}
    />
  );
};
