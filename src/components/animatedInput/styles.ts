import {StyleSheet} from 'react-native';
import {colors} from '../../config/colors';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  textContainer: {
    position: 'absolute',
    paddingHorizontal: 5,
    backgroundColor: colors.bgGrey,
    zIndex: 1,
  },
  text: {
    fontSize: 12,
  },
  input: {
    borderColor: colors.textGray,
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 4,
  },
});
