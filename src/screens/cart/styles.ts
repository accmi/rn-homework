import {StyleSheet} from 'react-native';
import {colors} from '../../config/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginBottom: 15,
  },
  textContainer: {},
  title: {
    textAlign: 'center',
    color: colors.neutral,
    fontSize: 20,
    lineHeight: 25,
  },
  body: {
    marginTop: 10,
    textAlign: 'center',
    color: colors.neutral,
    fontSize: 15,
    lineHeight: 20,
  },
  btnContainer: {
    marginTop: 35,
    width: '100%',
  },
  signUPContainer: {},
  signUPText: {
    marginTop: 10,
    color: colors.blue,
    fontSize: 15,
    lineHeight: 20,
    alignSelf: 'center',
  },
  cartContainer: {
    flex: 1,
  },
  cartSectionListContainer: {
    flex: 1,
  },
});
