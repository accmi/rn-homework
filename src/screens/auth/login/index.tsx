import React, {useState} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {AnimatedInput} from '../../../components/animatedInput';
import {MainButton} from '../../../components/mainButton';
import {Routes} from '../../../config/constants';

import {styles} from './style';

export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={{flex: 1}}>
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
            />
            <View style={styles.midstSeparator} />
            <AnimatedInput
              placeholder="Password"
              value={password}
              onChangeText={e => setPassword(e)}
            />
            <View style={styles.midstSeparator} />
            <TouchableOpacity>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.midstSeparator} />
          <MainButton text="SIGN IN" onPress={() => {}} />
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
