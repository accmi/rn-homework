import {StyleSheet} from 'react-native';
import {colors} from '../../config/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    zIndex: 10,
  },
  explosionBoundary: {
    position: 'absolute',
    height: 200,
    width: 200,
    zIndex: 10,
  },
  ball: {
    position: 'absolute',
    borderRadius: 3,
    width: 7,
    height: 7,
    backgroundColor: colors.red,
  },
});
