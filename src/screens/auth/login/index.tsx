import React, {FC, useCallback, useEffect, useState} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {useMutation} from 'react-query';
import {AnimatedErrorHint} from '../../../components/animatedErrorHint';
import {AnimatedInput} from '../../../components/animatedInput';
import {
  LoadingButton,
  LoadingButtonStatus,
} from '../../../components/loadingButton';
import {MainButton} from '../../../components/mainButton';
import {Routes} from '../../../config/constants';
import {
  MainStackParamList,
  NavigationProps,
} from '../../../navigation/mainNavigator';
import {AuthResponse, signIn} from '../../../utils/API';

import {styles} from './style';

interface LoginScreenProps
  extends NavigationProps<MainStackParamList, Routes.Login> {}

export const LoginScreen: FC<LoginScreenProps> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loadingButtonStatus, setLoadingButtonStatus] = useState(
    LoadingButtonStatus.initial,
  );
  const {mutate, isError, isLoading, isSuccess, error, reset} = useMutation<
    AuthResponse | Error,
    Error,
    {email: string; password: string}
  >(({email: emailArg, password: passwordArg}) =>
    signIn(emailArg, passwordArg),
  );

  const onLoginPress = useCallback(() => {
    setLoadingButtonStatus(LoadingButtonStatus.loading);
    setTimeout(() => mutate({email, password}), 1000);
  }, [email, mutate, password]);

  const tryAgainCallback = useCallback(() => {
    navigation.goBack();
    reset();
    onLoginPress();
  }, [navigation, onLoginPress, reset]);

  useEffect(() => {
    console.log(isSuccess);
    if (isError) {
      if (error?.message === 'Network request failed') {
        navigation.navigate(Routes.AuthErrorModal, {
          tryAgainCallback,
        });
      }
      setLoadingButtonStatus(LoadingButtonStatus.error);
      return;
    }

    if (isLoading) {
      setLoadingButtonStatus(LoadingButtonStatus.loading);
      return;
    }

    if (isSuccess) {
      setLoadingButtonStatus(LoadingButtonStatus.success);
      setTimeout(() => {
        navigation.goBack();
      }, 400);
      return;
    }
  }, [isError, isLoading, isSuccess, error, navigation, tryAgainCallback]);

  const updateStatus = useCallback(() => {
    if (loadingButtonStatus !== LoadingButtonStatus.initial) {
      reset();
      setLoadingButtonStatus(LoadingButtonStatus.initial);
    }
  }, [loadingButtonStatus, reset]);

  const onEmailTextChange = useCallback(
    (e: string) => {
      updateStatus();
      setEmail(e);
    },
    [updateStatus],
  );

  const onPasswordTextChange = useCallback(
    (e: string) => {
      updateStatus();
      setPassword(e);
    },
    [updateStatus],
  );

  const isErrorHintsShown = loadingButtonStatus === LoadingButtonStatus.error;

  return (
    <SafeAreaView style={styles.safeAriaContainer}>
      <View style={styles.container}>
        <View style={styles.topSeparator} />
        <View style={styles.mainTitle}>
          <Text style={styles.mainTitleText}>{'Ecomerce\nStore'}</Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.inputs}>
            <AnimatedInput
              placeholder="Email Address"
              value={email}
              onChangeText={onEmailTextChange}
              isSecure={false}
            />
            <AnimatedErrorHint
              isShown={isErrorHintsShown}
              errorText={'invalid email'}
            />
            <View style={styles.midstSeparator} />
            <AnimatedInput
              placeholder="Password"
              value={password}
              onChangeText={onPasswordTextChange}
              isSecure={true}
            />
            <AnimatedErrorHint
              isShown={isErrorHintsShown}
              errorText={'invalid password'}
            />
            <View style={styles.midstSeparator} />
            <TouchableOpacity>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.midstSeparator} />
          <LoadingButton
            text="SIGN IN"
            errorText="Check your spelling"
            successText="Submited"
            onPress={onLoginPress}
            status={loadingButtonStatus}
          />
        </View>
        <View style={styles.skipContainer}>
          <MainButton
            text="SKIP LOGIN ->"
            onPress={() => {}}
            containerStyle={styles.skipBtn}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
