import React, {FC} from 'react';
import {View, StyleSheet, Animated, Dimensions} from 'react-native';
import {colors} from '../../config/colors';

interface IndicatorProps {
  numeberOfDots: number;
  scrollX: Animated.Value;
}

const {width} = Dimensions.get('screen');

export const Indicator: FC<IndicatorProps> = ({numeberOfDots, scrollX}) => {
  return (
    <View style={styles.container}>
      {Array.from({length: numeberOfDots}).map((_, i) => {
        const backgroundColor = scrollX.interpolate({
          inputRange: [(i - 1) * width, i * width, (i + 1) * width],
          outputRange: [
            colors.indicatorGray,
            colors.btnBlue,
            colors.indicatorGray,
          ],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            key={String(i)}
            style={[styles.dot, {backgroundColor}]}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  dot: {
    width: 8,
    height: 8,
    backgroundColor: colors.indicatorGray,
    borderRadius: 4,
    marginRight: 5,
  },
  active: {
    backgroundColor: colors.btnBlue,
  },
});
