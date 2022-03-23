import React, {useEffect} from 'react';
import {Animated, View} from 'react-native';
import {useDotAnimation} from '../../hooks/useDotAnimation';
import {styles} from './styles';

const dotAnimatedValueRange: [number, number] = [0, -10];

export const DotsLoader = () => {
  const {values, animation} = useDotAnimation({
    dotsValues: {
      one: dotAnimatedValueRange,
      two: dotAnimatedValueRange,
      three: dotAnimatedValueRange,
    },
    duration: 200,
  });

  useEffect(() => {
    animation.start();
  }, [animation]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.dot, {transform: [{translateY: values.one}]}]}
      />
      <Animated.View
        style={[styles.dot, {transform: [{translateY: values.two}]}]}
      />
      <Animated.View
        style={[styles.dot, {transform: [{translateY: values.three}]}]}
      />
    </View>
  );
};
