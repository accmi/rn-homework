import React from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';
import {colors} from '../../config/colors';

export const SplashScreen = () => (
  <View style={styles.container}>
    <ActivityIndicator color={colors.blue} size="large" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
