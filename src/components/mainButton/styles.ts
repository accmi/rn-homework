import {StyleSheet} from 'react-native';
import {colors} from '../../config/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.btnBlue,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    borderRadius: 5,
    marginHorizontal: 20,
  },
  text: {
    fontSize: 15,
    lineHeight: 16,
    fontWeight: '500',
    letterSpacing: 1.25,
    color: colors.white,
  },
});
