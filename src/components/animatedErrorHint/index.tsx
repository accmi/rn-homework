import React, {FC, useEffect, useRef} from 'react';
import {Animated, Text} from 'react-native';
import {styles} from './styles';

interface AnimatedErrorHintProps {
  errorText: string;
  isShown: boolean;
}

export const AnimatedErrorHint: FC<AnimatedErrorHintProps> = ({
  errorText,
  isShown,
}) => {
  const hintAnimatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isShown) {
      Animated.spring(hintAnimatedValue, {
        toValue: 1,
        useNativeDriver: false,
      }).start();

      return;
    }

    Animated.spring(hintAnimatedValue, {
      toValue: 0,
      useNativeDriver: false,
    }).start();
  }, [hintAnimatedValue, isShown]);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: hintAnimatedValue,
          transform: [
            {
              translateX: hintAnimatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [-2, 2],
              }),
            },
          ],
        },
      ]}>
      <Text style={styles.text}>{errorText}</Text>
    </Animated.View>
  );
};
