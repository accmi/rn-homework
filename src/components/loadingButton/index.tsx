import React, {FC, useCallback, useEffect, useRef} from 'react';
import {
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
  Animated,
  View,
} from 'react-native';
import {DotsLoader} from '../dotsLoader';

import CrossIcon from '../../assets/cross.svg';
import SuccessIcon from '../../assets/success.svg';

import {styles} from './styles';

export enum LoadingButtonStatus {
  initial,
  loading,
  success,
  error,
}

interface LoadingButtonProps {
  text: string;
  errorText: string;
  successText: string;
  onPress(): void;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  status: LoadingButtonStatus;
}

export const LoadingButton: FC<LoadingButtonProps> = ({
  text,
  errorText,
  successText,
  containerStyle,
  textStyle,
  onPress,
  status,
}) => {
  const widthValue = useRef(new Animated.Value(0)).current;

  const widthInterpolate = widthValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['100%', '25%'],
  });
  const textOpacityInterpolate = widthValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  const animateToInitial = useCallback(() => {
    Animated.timing(widthValue, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [widthValue]);

  const animateToLoading = useCallback(() => {
    Animated.timing(widthValue, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [widthValue]);

  useEffect(() => {
    switch (status) {
      case LoadingButtonStatus.initial:
        animateToInitial();
        break;
      case LoadingButtonStatus.loading:
        animateToLoading();
        break;
      default:
        animateToInitial();
    }
  }, [status, animateToInitial, animateToLoading]);

  const isError = status === LoadingButtonStatus.error;
  const isSuccess = status === LoadingButtonStatus.success;

  const getText = () => {
    if (isError) {
      return errorText;
    }

    if (isSuccess) {
      return successText;
    }

    return text;
  };

  return (
    <Animated.View
      style={[
        styles.animatedContainer,
        {
          width: widthInterpolate,
        },
      ]}>
      <TouchableOpacity
        style={[
          styles.container,
          containerStyle,
          isError && styles.errorAnimatedContainer,
          isSuccess && styles.successAnimatedContainer,
        ]}
        onPress={onPress}>
        {(isError || isSuccess) && (
          <View
            style={[
              styles.iconContainer,
              isError && styles.errorIcon,
              isSuccess && styles.successIcon,
            ]}>
            {isError ? (
              <CrossIcon width={20} height={20} />
            ) : (
              <SuccessIcon width={20} height={20} />
            )}
          </View>
        )}
        <Animated.Text
          style={[
            styles.text,
            textStyle,
            {
              opacity: textOpacityInterpolate,
            },
          ]}>
          {getText()}
        </Animated.Text>
        <Animated.View style={{opacity: widthValue}}>
          <DotsLoader />
        </Animated.View>
      </TouchableOpacity>
    </Animated.View>
  );
};
