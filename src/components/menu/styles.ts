import {StyleSheet} from 'react-native';
import {colors} from '../../config/colors';

export const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 12,
    paddingTop: 10,
    marginBottom: 43,
  },
  headerText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: colors.btnBlue,
  },
  sectionHeader: {
    paddingHorizontal: 12,
    fontSize: 20,
    fontWeight: '700',
    color: colors.lightGray,
    marginVertical: 30,
  },
  itemContainer: {
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  itemText: {
    fontSize: 15,
    lineHeight: 20,
    color: colors.neutral,
    marginLeft: 14,
  },
});
