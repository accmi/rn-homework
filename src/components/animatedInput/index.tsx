import React, {FC, useRef} from 'react';
import {View, Text, TextInput, Animated, Pressable} from 'react-native';

import {styles} from './styles';

interface AnimatedInputProps {
  placeholder: string;
  onChangeText(value: string): void;
  value: string;
}

const initialY = 10;
const animatedY = -7;

export const AnimatedInput: FC<AnimatedInputProps> = ({
  placeholder,
  onChangeText,
  value,
}) => {
  const placeholderY = useRef(new Animated.Value(initialY)).current;
  const textInputRef = useRef<TextInput>();

  const onFocus = () => {
    animatePlacholder(false);
  };
  const onBlur = () => {
    animatePlacholder(true);
  };

  const onPlaceholderPress = () => {
    textInputRef.current?.focus();
  };

  const animatePlacholder = (isFocused: boolean) => {
    Animated.timing(placeholderY, {
      toValue: isFocused ? initialY : animatedY,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

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
      />
    </View>
  );
};
