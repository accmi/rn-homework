import React, {FC, useCallback} from 'react';
import {TouchableOpacity} from 'react-native';
import {styles} from './styles';

interface HeaderButtonProps {
  onPress(): void;
  icon: JSX.Element;
}

export const HeaderButton: FC<HeaderButtonProps> = ({onPress, icon}) => {
  const onBackPress = useCallback(() => {
    onPress();
  }, [onPress]);

  return (
    <TouchableOpacity style={styles.container} onPress={onBackPress}>
      {icon}
    </TouchableOpacity>
  );
};
