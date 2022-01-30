import React, {FC, useCallback} from 'react';
import {TouchableOpacity} from 'react-native';
import CartWhiteIcon from '../../assets/cartWhite.svg';
import {Routes} from '../../config/constants';
import {styles} from './styles';

interface HeaderRightProps {
  onPress(route?: Routes): void;
}

export const HeaderRight: FC<HeaderRightProps> = ({onPress}) => {
  const onBackPress = useCallback(() => {
    onPress(Routes.Cart);
  }, [onPress]);

  return (
    <TouchableOpacity style={styles.container} onPress={onBackPress}>
      <CartWhiteIcon />
    </TouchableOpacity>
  );
};
