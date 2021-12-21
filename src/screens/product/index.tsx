import React, {useState} from 'react';
import {useQuery} from 'react-query';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from 'react-native';

import {PriceComponent} from '../../components/price';
import {SeparatorComponent} from '../../components/separator';
import {getProduct} from '../../utils/API';

import {styles} from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import { SliderComponent } from '../../components/slider';

enum ProductColors {
  BLUE = 'Blue',
  RED = 'Red',
  MOUVE = 'Mouve',
}

export const ProductScreen = () => {
  const [selectedColor, setSelectedColor] = useState(ProductColors.BLUE);
  const {data: product} = useQuery('product', () => getProduct());
  const colorButtonDidPress = () => {
    //
  };

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
