import React, {FC} from 'react';
import {ModalScreen} from '../../../components/modal';
import {MainButton} from '../../../components/mainButton';
import {
  MainStackParamList,
  NavigationProps,
} from '../../../navigation/mainNavigator';
import {Routes} from '../../../config/constants';

import {styles} from './styles';
import OKIcon from '../../../assets/ok.svg';

interface ProductAddedScreenProps
  extends NavigationProps<MainStackParamList, Routes.SelectColorErrorModal> {}

export const ProductAddedScreen: FC<ProductAddedScreenProps> = ({
  navigation: {goBack},
}) => {
  const onOKButtonPress = () => {
    goBack();
  };

  return (
    <ModalScreen
      icon={<OKIcon />}
      title="Product added to your cart"
      buttons={[
        <MainButton
          key="paok"
          containerStyle={styles.btn}
          text="OK"
          onPress={onOKButtonPress}
        />,
      ]}
    />
  );
};
