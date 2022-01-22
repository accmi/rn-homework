import {StyleSheet} from 'react-native';
import {colors} from '../../config/colors';

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.lightGray,
    borderWidth: 1,
    padding: 2,
    borderRadius: 4,
    paddingHorizontal: 14,
    paddingVertical: 9,
  },
  searchInput: {
    fontSize: 15,
    lineHeight: 20,
    flex: 1,
    marginLeft: 5,
  },
});
