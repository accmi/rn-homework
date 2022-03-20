import {StyleSheet} from 'react-native';
import {colors} from '../../../../config/colors';

export const styles = StyleSheet.create({
  itemContainer: {
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
  itemInfoContainer: {
    flexDirection: 'row',
  },
  itemImage: {
    width: 100,
    height: 100,
  },
  itemTextContainer: {
    marginLeft: 10,
  },
  itemTitle: {
    color: colors.neutral,
    fontSize: 15,
    lineHeight: 20,
  },
  itemColor: {
    color: colors.textGray,
    fontSize: 15,
  },
});
