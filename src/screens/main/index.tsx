import React, {useState} from 'react';
import {useQuery} from 'react-query';
import {SafeAreaView, ActivityIndicator, View} from 'react-native';
import {CatalogComponent} from './components/catalog';
import {SearchComponent} from './components/search';
import {getProducts} from '../../utils/API';
import {colors} from '../../config/colors';

import {styles} from './styles';

export const MainScreen = () => {
  const [searchInput, setSearchInput] = useState('');
  const query = useQuery('products', getProducts);
  const products = query?.data?.products;

  return (
    <SafeAreaView style={styles.container}>
      <SearchComponent value={searchInput} searchDidChange={setSearchInput} />
      {query.isLoading ? (
        <View style={styles.spinnerContainer}>
          <ActivityIndicator color={colors.blue} size="large" />
        </View>
      ) : (
        <CatalogComponent products={products || []} />
      )}
    </SafeAreaView>
  );
};
