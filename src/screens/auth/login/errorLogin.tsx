import React, {FC} from 'react';
import {ModalScreen} from '../../../components/modal';
import {MainButton} from '../../../components/mainButton';
import {
  MainStackParamList,
  NavigationProps,
} from '../../../navigation/mainNavigator';
import {Routes} from '../../../config/constants';

import {styles} from './style';
import ExclamationIcon from '../../../assets/exclamation.svg';

const text = 'Please login to add product \n in your cart';

interface LoginToContinueScreenProps
  extends NavigationProps<MainStackParamList, Routes.SelectColorErrorModal> {}

export const ErrorLoginScreen: FC<LoginToContinueScreenProps> = ({
  navigation: {goBack, navigate, popToTop},
}) => {
  const onOKButtonPress = () => {
    goBack();
  };

  const onLoginButtonPress = () => {
    popToTop();
    navigate(Routes.AuthNavigator, {
      screen: Routes.Login,
    });
  };

  return (
    <ModalScreen
      icon={<ExclamationIcon />}
      title="Something went wrong"
      text={text}
      buttons={[
        <MainButton
          key="login"
          containerStyle={styles.btn}
          text="LOGIN"
          onPress={onLoginButtonPress}
        />,
        <MainButton
          key="signup"
          containerStyle={styles.btn}
          text="SIGN UP"
          onPress={onOKButtonPress}
        />,
      ]}
    />
  );
};
