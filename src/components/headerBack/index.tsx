import React, {FC, useCallback} from 'react';
import {TouchableOpacity} from 'react-native';
import BackIcon from '../../assets/back.svg';
import {styles} from './styles';

interface HeaderBackProps {
  onPress(): void;
}

export const HeaderBack: FC<HeaderBackProps> = ({onPress}) => {
  const onBackPress = useCallback(() => {
    onPress();
  }, [onPress]);

  return (
    <TouchableOpacity style={styles.container} onPress={onBackPress}>
      <BackIcon />
    </TouchableOpacity>
  );
};
