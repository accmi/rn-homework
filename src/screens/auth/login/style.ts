import {StyleSheet} from 'react-native';
import {colors} from '../../../config/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topSeparator: {
    flexBasis: '0%',
  },
  mainTitle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainTitleText: {
    fontSize: 40,
    fontWeight: '700',
    color: colors.blue,
    paddingHorizontal: 21,
    textAlign: 'center',
  },
  forgotPasswordText: {
    fontSize: 15,
    color: colors.blue,
  },
  inputs: {
    paddingHorizontal: 21,
  },
  formContainer: {
    flexBasis: '50%',
  },
  skipContainer: {
    flexBasis: '10%',
  },
  midstSeparator: {
    flexBasis: '10%',
  },
  skipBtn: {
    backgroundColor: colors.lightGray,
  },
});
