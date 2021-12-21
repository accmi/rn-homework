import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../config/colors';
const {width} = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {},
  slideContainer: {
    width: width - 20 - 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width / 2,
    height: width / 2,
  },
});
