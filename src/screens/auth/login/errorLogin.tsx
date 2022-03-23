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

const text = 'Network connection appears to have been corupted';

interface ErrorLoginScreenProps
  extends NavigationProps<MainStackParamList, Routes.AuthErrorModal> {}

export const ErrorLoginScreen: FC<ErrorLoginScreenProps> = ({
  navigation: {goBack},
  route: {
    params: {tryAgainCallback},
  },
}) => {
  const onCanclePress = () => {
    goBack();
  };

  return (
    <ModalScreen
      icon={<ExclamationIcon />}
      title="Something went wrong"
      text={text}
      buttons={[
        <MainButton
          key="tryagain"
          containerStyle={styles.btn}
          text="TRY AGAIN"
          onPress={tryAgainCallback}
        />,
        <MainButton
          key="cancel"
          containerStyle={styles.btn}
          text="CANCEL"
          onPress={onCanclePress}
        />,
      ]}
    />
  );
};
