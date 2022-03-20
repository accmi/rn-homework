import React, {FC} from 'react';
import {ModalScreen} from '../../../components/modal';
import {MainButton} from '../../../components/mainButton';
import {
  MainStackParamList,
  NavigationProps,
} from '../../../navigation/mainNavigator';
import {Routes} from '../../../config/constants';

import {styles} from './styles';
import ExclamationIcon from '../../../assets/exclamation.svg';

const text = 'Please login to add product \n in your cart';

interface LoginToContinueScreenProps
  extends NavigationProps<MainStackParamList, Routes.SelectColorErrorModal> {}

export const LoginToContinueScreen: FC<LoginToContinueScreenProps> = ({
  navigation: {goBack},
}) => {
  const onOKButtonPress = () => {
    goBack();
  };

  return (
    <ModalScreen
      icon={<ExclamationIcon />}
      title="Login To Continue"
      text={text}
      buttons={[
        <MainButton
          key="login"
          containerStyle={styles.btn}
          text="LOGIN"
          onPress={onOKButtonPress}
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
