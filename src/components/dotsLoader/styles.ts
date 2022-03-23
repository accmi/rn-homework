import {StyleSheet} from 'react-native';
import {colors} from '../../config/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
  dot: {
    width: 5,
    height: 5,
    backgroundColor: colors.white,
    borderRadius: 5 * 5,
  },
});
