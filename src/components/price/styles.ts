import {StyleSheet} from 'react-native';
import {colors} from '../../config/colors';

export const styles = StyleSheet.create({
  priceContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
  },
  newPrice: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.neutral,
  },
  oldPrice: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.textGray,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  offer: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.blue,
  },
});
