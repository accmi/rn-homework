import React, {useState} from 'react';
import {useQuery} from 'react-query';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Pressable,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

import {PriceComponent} from '../../components/price';
import {SeparatorComponent} from '../../components/separator';
import {SliderComponent} from '../../components/slider';
import {getProduct} from '../../utils/API';

import {styles} from './styles';
import { colors } from '../../config/colors';

enum ProductColors {
  BLUE = 'Blue',
  RED = 'Red',
  MOUVE = 'Mouve',
}

export const ProductScreen = () => {
  const [selectedColor, setSelectedColor] = useState(ProductColors.BLUE);
  const {data: product, isLoading} = useQuery('product', () => getProduct());
  const colorButtonDidPress = () => {
    //
  };

  if (isLoading) {
    return (
      <View style={styles.indicator}>
        <ActivityIndicator color={colors.blue} size="large" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.sliderContainer}>
          <SliderComponent />
        </View>
        <View style={styles.namePriceContainer}>
          <Text style={styles.name}>{product?.attributes.name}</Text>
          <PriceComponent price={Number(product?.attributes.price)} />
        </View>

        <SeparatorComponent />

        <View style={styles.colorSelectionContainer}>
          <Text style={styles.colorTitle}>Select Color</Text>
          <View style={styles.colorList}>
            <Pressable
              style={styles.colorContainer}
              onPress={colorButtonDidPress}>
              <Text style={styles.colorText}>{ProductColors.BLUE}</Text>
            </Pressable>
            <Pressable
              style={styles.colorContainer}
              onPress={colorButtonDidPress}>
              <Text style={styles.colorText}>{ProductColors.RED}</Text>
            </Pressable>
            <Pressable
              style={styles.colorContainer}
              onPress={colorButtonDidPress}>
              <Text style={styles.colorText}>{ProductColors.MOUVE}</Text>
            </Pressable>
          </View>
        </View>

        <SeparatorComponent />

        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.descriptionText}>
            {product?.attributes.description}
          </Text>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.addBtn}>
        <Text style={styles.addBtnText}>ADD TO CARD</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
