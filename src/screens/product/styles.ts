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
    borderWidth: 1,
    borderColor: colors.btnBackgroundGray,
  },
  btnBlueActive: {
    borderColor: colors.blue,
  },
  btnGreenActive: {
    borderColor: colors.green,
  },
  btnOrangeActive: {
    borderColor: colors.orange,
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
  indicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
