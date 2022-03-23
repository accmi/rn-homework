import React, {createRef, FC, useEffect, useRef} from 'react';
import {View, Text, TextInput, Animated, Pressable} from 'react-native';

import {styles} from './styles';

interface AnimatedInputProps {
  placeholder: string;
  onChangeText(value: string): void;
  value: string;
  isSecure: boolean;
}

const initialY = 10;
const animatedY = -7;

export const AnimatedInput: FC<AnimatedInputProps> = ({
  placeholder,
  onChangeText,
  value,
  isSecure,
}) => {
  const placeholderY = useRef(new Animated.Value(initialY)).current;
  const textInputRef = createRef<TextInput>();

  const onFocus = () => {
    animatePlacholder(false);
  };
  const onBlur = () => {
    if (!value.length) {
      animatePlacholder(true);
    }
  };

  const onPlaceholderPress = () => {
    textInputRef.current?.focus();
  };

  const animatePlacholder = (isFocused: boolean, duration = 200) => {
    Animated.timing(placeholderY, {
      toValue: isFocused ? initialY : animatedY,
      duration,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    if (value.length) {
      animatePlacholder(false, 0);
    }
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.textContainer,
          {
            transform: [
              {
                translateY: placeholderY,
              },
              {
                translateX: 15,
              },
            ],
          },
        ]}>
        <Pressable onPress={onPlaceholderPress}>
          <Text style={styles.text}>{placeholder}</Text>
        </Pressable>
      </Animated.View>
      <TextInput
        ref={textInputRef}
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        onFocus={onFocus}
        onBlur={onBlur}
        secureTextEntry={isSecure}
      />
    </View>
  );
};
