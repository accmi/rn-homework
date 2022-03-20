import React, {useState, useCallback, FC} from 'react';
import {useQuery} from 'react-query';
import {
  SafeAreaView,
  Text,
  View,
  Pressable,
  ScrollView,
  ActivityIndicator,
  Dimensions,
} from 'react-native';

import {PriceComponent} from '../../components/price';
import {SeparatorComponent} from '../../components/separator';
import {SliderComponent} from '../../components/slider';
import {getProduct} from '../../utils/API';

import {styles} from './styles';
import {colors} from '../../config/colors';
import {MainButton} from '../../components/mainButton';
import {
  MainStackParamList,
  NavigationProps,
} from '../../navigation/mainNavigator';
import {Routes} from '../../config/constants';

const {width} = Dimensions.get('screen');

enum ProductColors {
  BLUE = 'Blue',
  GREEN = 'Green',
  ORANGE = 'Orange',
}

const getStyleForColor = (
  color: ProductColors,
  selectedColor: ProductColors,
) => {
  switch (color) {
    case ProductColors.BLUE:
      return selectedColor === color ? styles.btnBlueActive : null;
    case ProductColors.GREEN:
      return selectedColor === color ? styles.btnGreenActive : null;
    case ProductColors.ORANGE:
      return selectedColor === color ? styles.btnOrangeActive : null;
    default:
      break;
  }
};

export const ProductScreen: FC<
  NavigationProps<MainStackParamList, Routes.Product>
> = ({
  navigation,
  route: {
    params: {name},
  },
}) => {
  const [selectedColor, setSelectedColor] = useState(ProductColors.BLUE);
  const {data: product, isLoading} = useQuery('product', () =>
    getProduct(name),
  );
  const colorButtonDidPress = useCallback(
    (color: ProductColors) => {
      setSelectedColor(color);
    },
    [setSelectedColor],
  );

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
          <SliderComponent containerWidth={width - 30 - 30} />
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
              style={[
                styles.colorContainer,
                getStyleForColor(ProductColors.BLUE, selectedColor),
              ]}
              onPress={colorButtonDidPress.bind(null, ProductColors.BLUE)}>
              <Text style={styles.colorText}>{ProductColors.BLUE}</Text>
            </Pressable>
            <Pressable
              style={[
                styles.colorContainer,
                getStyleForColor(ProductColors.GREEN, selectedColor),
              ]}
              onPress={colorButtonDidPress.bind(null, ProductColors.GREEN)}>
              <Text style={styles.colorText}>{ProductColors.GREEN}</Text>
            </Pressable>
            <Pressable
              style={[
                styles.colorContainer,
                getStyleForColor(ProductColors.ORANGE, selectedColor),
              ]}
              onPress={colorButtonDidPress.bind(null, ProductColors.ORANGE)}>
              <Text style={styles.colorText}>{ProductColors.ORANGE}</Text>
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
      <MainButton
        text="ADD TO CARD"
        onPress={() => {
          navigation.navigate(Routes.LoginToContinueModal);
        }}
      />
    </SafeAreaView>
  );
};
