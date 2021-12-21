import {StyleSheet} from 'react-native';
import {colors} from '../../config/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    paddingHorizontal: 20,
  },
  namePriceContainer: {},
  sliderContainer: {
    marginTop: 43,
    marginBottom: 30,
  },
  name: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '400',
    color: colors.neutral,
  },
  colorSelectionContainer: {},
  colorTitle: {
    fontSize: 20,
    lineHeight: 25,
    fontWeight: '700',
    color: colors.neutral,
    marginBottom: 10,
  },
  colorList: {
    flexDirection: 'row',
  },
  colorContainer: {
    backgroundColor: colors.btnBackgroundGray,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  colorText: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '400',
    color: colors.neutral,
  },
  descriptionContainer: {},
  descriptionTitle: {
    fontSize: 20,
    lineHeight: 25,
    fontWeight: '700',
    color: colors.neutral,
    marginBottom: 10,
  },
  descriptionText: {},
  addBtn: {
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
  addBtnText: {
    fontSize: 15,
    lineHeight: 16,
    fontWeight: '500',
    letterSpacing: 1.25,
    color: colors.white,
  },
});
