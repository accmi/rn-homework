import {StyleSheet} from 'react-native';
import {colors} from '../../config/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.transparentBlack,
  },
  content: {
    backgroundColor: colors.white,
    borderRadius: 5,
    padding: 25,
    minWidth: '90%',
    margin: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {},
  textContainer: {
    marginTop: 15,
  },
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
  buttonsContainer: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
