import {useRef} from 'react';
import {Animated} from 'react-native';

type dotValueType = [number, number];
type useDotAnimationArg = {
  dotsValues: {
    one: dotValueType;
    two: dotValueType;
    three: dotValueType;
  };
  duration: number;
};
interface UseDotAnimationRetyrnType {
  values: {
    one: Animated.Value;
    two: Animated.Value;
    three: Animated.Value;
  };
  animation: Animated.CompositeAnimation;
}

export const useDotAnimation = ({
  dotsValues: {one, two, three},
  duration,
}: useDotAnimationArg): UseDotAnimationRetyrnType => {
  const dotsAnimatedValues = useRef({
    one: new Animated.Value(one[0]),
    two: new Animated.Value(two[0]),
    three: new Animated.Value(three[0]),
  }).current;

  const getDotAnimation = (
    delay: number,
    dotValue: Animated.Value,
    valueRange: dotValueType,
  ) =>
    Animated.sequence([
      Animated.delay(delay),
      Animated.timing(dotValue, {
        toValue: valueRange[1],
        useNativeDriver: false,
        duration,
      }),
      Animated.timing(dotValue, {
        toValue: valueRange[0],
        useNativeDriver: false,
        duration,
      }),
    ]);

  const getNextDelay = (percantage: number) => {
    return duration * (percantage / 100);
  };

  return {
    values: dotsAnimatedValues,
    animation: Animated.loop(
      Animated.parallel([
        // First dot
        getDotAnimation(0, dotsAnimatedValues.one, one),
        // Second dot
        getDotAnimation(getNextDelay(80), dotsAnimatedValues.two, two),
        // Third dot
        getDotAnimation(getNextDelay(120), dotsAnimatedValues.three, three),
      ]),
    ),
  };
};
