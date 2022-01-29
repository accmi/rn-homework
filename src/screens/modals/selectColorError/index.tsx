import React, {FC} from 'react';
import {ModalScreen} from '../../../components/modal';
import {MainButton} from '../../../components/mainButton';
import {
  MainStackParamList,
  NavigationProps,
} from '../../../navigation/mainNavigator';
import {Routes} from '../../../config/constants';

import {styles} from './styles';
import ErrorIcon from '../../../assets/error.svg';

const text = 'Please select your color \n to add this item in your cart';

interface SelectColorErrorScreenProps
  extends NavigationProps<MainStackParamList, Routes.SelectColorErrorModal> {}

export const SelectColorErrorScreen: FC<SelectColorErrorScreenProps> = ({
  navigation: {goBack},
}) => {
  const onOKButtonPress = () => {
    goBack();
  };

  return (
    <ModalScreen
      icon={<ErrorIcon />}
      title="Select color"
      text={text}
      buttons={[
        <MainButton
          key="scok"
          containerStyle={styles.btn}
          text="OK"
          onPress={onOKButtonPress}
        />,
      ]}
    />
  );
};
