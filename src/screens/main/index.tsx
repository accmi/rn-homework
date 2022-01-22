import React, {FC, useState} from 'react';
import {useQuery} from 'react-query';
import {
  SafeAreaView,
  ActivityIndicator,
  View,
  RefreshControl,
} from 'react-native';
import {
  MainStackParamList,
  NavigationProps,
} from '../../navigation/mainNavigator';
import {Routes} from '../../config/constants';
import {CatalogComponent} from './components/catalog';
import {SearchComponent} from './components/search';
import {getProducts} from '../../utils/API';
import {colors} from '../../config/colors';

import {styles} from './styles';

export const MainScreen: FC<
  NavigationProps<MainStackParamList, Routes.Home>
> = ({navigation}) => {
  const [searchInput, setSearchInput] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const query = useQuery('products', getProducts);
  const products = query?.data?.products;
  const {refetch} = query;

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    refetch().then(() => {
      setRefreshing(false);
    });
  }, [refetch]);

  const navigateToProductScreen = React.useCallback(
    (name: string) => {
      navigation.navigate(Routes.Product, {
        name,
      });
    },
    [navigation],
  );

  return (
    <SafeAreaView style={styles.container}>
      <SearchComponent value={searchInput} searchDidChange={setSearchInput} />
      {query.isLoading ? (
        <View style={styles.spinnerContainer}>
          <ActivityIndicator color={colors.blue} size="large" />
        </View>
      ) : (
        <CatalogComponent
          products={products || []}
          navigateToProductScreen={navigateToProductScreen}
          refreshControll={
            <RefreshControl
              onRefresh={onRefresh}
              refreshing={refreshing}
              colors={[colors.blue]}
              tintColor={colors.blue}
            />
          }
        />
      )}
    </SafeAreaView>
  );
};
