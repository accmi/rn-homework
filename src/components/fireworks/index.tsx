import React, {FC, useCallback, useEffect, useRef, useState} from 'react';
import {Dimensions, View, Animated, Easing} from 'react-native';
import {styles} from './styles';

const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

const areaAnimationDuration = 1000;
const ballsAnimationDelay = 500;
const ballsAnimationDuration = 500;

const getRandomNumber = (n: number): number => {
  return Math.round(Math.random() * n);
};

const getRandomArbitrary = (min: number, max: number) => {
  return Math.round(Math.random() * (max - min) + min);
};

const getRandomColor = () => {
  const colors = ['#ff0', '#ff3', '#cc0', '#ff4500', '#ff6347'];
  const colorIndex = getRandomNumber(colors.length - 1);
  return colors[colorIndex];
};

type AreaType = {
  balls: number[];
  leftPosition: number;
  topPosition: number;
};

const createArea = (ballsCount: number): AreaType => {
  return {
    balls: Array.from({length: ballsCount}),
    leftPosition: getRandomNumber(windowWidth),
    topPosition: getRandomArbitrary(10, windowHeight / 3),
  };
};

const getAreasCount = (playableTime: number) => {
  const animationTime =
    areaAnimationDuration + ballsAnimationDelay + ballsAnimationDuration;
  return Math.round(playableTime / animationTime);
};

interface FireworksComponentProps {
  playableTime: number; // milliseconds
  ballsCount: number;
}

export const FireworksComponent: FC<FireworksComponentProps> = ({
  playableTime,
  ballsCount,
}) => {
  let areas = useRef(
    Array.from({length: getAreasCount(playableTime)}).map(() =>
      createArea(ballsCount),
    ),
  ).current;
  let ballsAnimatedValues = useRef(new Animated.Value(0)).current;
  let areaAnimatedValue = useRef(new Animated.Value(0)).current;
  const [currentAreaIndex, setCurrentAreaIndex] = useState(0);

  const updateAreas = useCallback(() => {
    setCurrentAreaIndex(currentAreaIndex + 1);
  }, [currentAreaIndex]);

  const resetAnimatedValue = useCallback(
    (value: Animated.Value, callback: () => void) => {
      Animated.timing(value, {
        toValue: 0,
        duration: 0,
        useNativeDriver: false,
      }).start(callback);
    },
    [],
  );

  const runAnotherAreaExplosion = useCallback(() => {
    Animated.parallel([
      Animated.timing(areaAnimatedValue, {
        toValue: 1,
        duration: areaAnimationDuration,
        useNativeDriver: false,
      }),
      Animated.timing(ballsAnimatedValues, {
        toValue: 1,
        delay: ballsAnimationDelay,
        duration: ballsAnimationDuration,
        easing: Easing.ease,
        useNativeDriver: false,
      }),
    ]).start(() => {
      resetAnimatedValue(areaAnimatedValue, () => {
        resetAnimatedValue(ballsAnimatedValues, () => {
          if (currentAreaIndex < areas.length - 1) {
            updateAreas();
          }
        });
      });
    });
  }, [
    areaAnimatedValue,
    areas.length,
    ballsAnimatedValues,
    currentAreaIndex,
    resetAnimatedValue,
    updateAreas,
  ]);

  useEffect(() => {
    runAnotherAreaExplosion();
  });

  const getBallLeftInterpolated = (left: number) => {
    const nextLeft = left < 3 ? -getRandomNumber(200) : getRandomNumber(200);
    return ballsAnimatedValues.interpolate({
      inputRange: [0, 1],
      outputRange: [left, nextLeft],
    });
  };

  const getBallTopInterpolated = (top: number) => {
    const nextTop = top < 3 ? -getRandomNumber(200) : getRandomNumber(200);
    return ballsAnimatedValues.interpolate({
      inputRange: [0, 1],
      outputRange: [top, nextTop],
    });
  };

  const getBallOpacityInterpolated = () =>
    ballsAnimatedValues.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0],
    });

  const getAreaTransformInterpolated = () =>
    areaAnimatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [windowHeight + 200, 0],
    });

  const {leftPosition, topPosition, balls} = areas[currentAreaIndex];

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.explosionBoundary,
          {
            left: leftPosition,
            top: topPosition,
            transform: [
              {
                translateY: getAreaTransformInterpolated(),
              },
            ],
          },
        ]}>
        {balls.map((_, i) => (
          <Animated.View
            key={String(i) + 'ball'}
            style={[
              styles.ball,
              {
                opacity: getBallOpacityInterpolated(),
                left: getBallLeftInterpolated(getRandomNumber(i * 10)),
                top: getBallTopInterpolated(getRandomNumber(i * 10)),
                backgroundColor: getRandomColor(),
              },
            ]}
          />
        ))}
      </Animated.View>
    </View>
  );
};
