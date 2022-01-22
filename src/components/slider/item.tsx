import React, {FC} from 'react';
import {View, Image, ImageSourcePropType} from 'react-native';

import {styles} from './styles';

interface SliderItemProps {
  containerWidth: number;
  width: number;
  height: number;
  source: ImageSourcePropType;
}

export const SliderItem: FC<SliderItemProps> = ({
  containerWidth,
  width,
  height,
  source,
}) => (
  <View style={[styles.slideContainer, {width: containerWidth}]}>
    <Image
      style={{
        width,
        height,
      }}
      source={source}
      resizeMode="contain"
    />
  </View>
);
