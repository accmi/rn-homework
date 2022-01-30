import React, {useCallback, FC} from 'react';
import {TouchableOpacity} from 'react-native';

import HumburgerIcon from '../../assets/humburger.svg';
import {styles} from './styles';

interface HumburgerComponentProps {
  onPress(): void;
}

export const HumburgerComponent: FC<HumburgerComponentProps> = ({onPress}) => {
  const onHumburgerPress = useCallback(() => {
    onPress();
  }, [onPress]);

  return (
    <TouchableOpacity style={styles.container} onPress={onHumburgerPress}>
      <HumburgerIcon />
    </TouchableOpacity>
  );
};
