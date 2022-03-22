import React, {useEffect, useState} from 'react';
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
import {AuthResponse, signIn} from '../../../utils/API';

import {styles} from './style';

export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loadingButtonStatus, setLoadingButtonStatus] = useState(
    LoadingButtonStatus.initial,
  );
  const {mutate, isError, isLoading, isSuccess} = useMutation<
    AuthResponse,
    Error,
    {email: string; password: string}
  >(({email, password}) => signIn(email, password));

  const onLoginPress = () => {
    setLoadingButtonStatus(LoadingButtonStatus.loading);
    setTimeout(() => mutate({email, password}), 1000);
  };

  useEffect(() => {
    if (isError) {
      setLoadingButtonStatus(LoadingButtonStatus.error);
      return;
    }

    if (isLoading) {
      setLoadingButtonStatus(LoadingButtonStatus.loading);
      return;
    }

    if (isSuccess) {
      setLoadingButtonStatus(LoadingButtonStatus.success);
      return;
    }
  }, [isError, isLoading, isSuccess]);

  useEffect(() => {
    if (loadingButtonStatus !== LoadingButtonStatus.initial) {
      setLoadingButtonStatus(LoadingButtonStatus.initial);
    }
  }, [email, password]);

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
              onChangeText={e => setEmail(e)}
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
              onChangeText={e => setPassword(e)}
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
