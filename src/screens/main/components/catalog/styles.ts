import {StyleSheet} from 'react-native';
import {colors} from '../../../../config/colors';

export const styles = StyleSheet.create({
  columnWrapper: {
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  container: {
    flexBasis: '46%',
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
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  nameContainer: {
    marginTop: 5,
  },
  name: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '400',
    color: colors.neutral,
  },
});
