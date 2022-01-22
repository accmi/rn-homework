import {StyleSheet} from 'react-native';
import {colors} from '../../../../config/colors';

export const styles = StyleSheet.create({
  shadowContainer: {
    overflow: 'hidden',
    paddingBottom: 5,
  },
  searchContainer: {
    padding: 20,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
});
