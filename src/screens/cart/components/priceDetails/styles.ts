import {StyleSheet} from 'react-native';
import {colors} from '../../../../config/colors';

export const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '92%',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    borderRadius: 5,
    marginVertical: 15,
    padding: 10,
  },
  title: {
    fontSize: 20,
    lineHeight: 25,
    color: colors.textGray,
    fontWeight: '700',
    marginBottom: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  rowTitle: {
    fontSize: 15,
    lineHeight: 20,
    color: colors.textGray,
    fontWeight: '400',
  },
  rowValue: {
    fontSize: 15,
    lineHeight: 20,
    color: colors.textGray,
    fontWeight: '400',
  },
  discountValue: {
    fontSize: 15,
    lineHeight: 20,
    color: colors.blue,
    fontWeight: '400',
  },
  separator: {
    backgroundColor: colors.indicatorGray,
    height: 1,
    marginTop: 15,
    marginBottom: 10,
  },
  amountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  amountTitle: {
    fontSize: 15,
    lineHeight: 20,
    color: colors.neutral,
    fontWeight: '400',
  },
  amountValue: {
    fontSize: 15,
    lineHeight: 20,
    color: colors.neutral,
    fontWeight: '400',
  },
});
