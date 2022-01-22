import React, {FC} from 'react';
import {View, TextInput} from 'react-native';
import {styles} from './styles';

interface InputProps {
  Icon: JSX.Element;
  value: string;
  searchDidChange(value: string): void;
}

export const Input: FC<InputProps> = ({Icon, value, searchDidChange}) => {
  return (
    <View style={styles.inputContainer}>
      {Icon}
      <TextInput
        style={styles.searchInput}
        value={value}
        onChangeText={searchDidChange}
      />
    </View>
  );
};
