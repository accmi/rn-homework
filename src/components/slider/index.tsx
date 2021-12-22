import React, {useRef, useEffect, FC} from 'react';
import {Animated, FlatList, Image, View, TouchableOpacity} from 'react-native';
import {Indicator} from './indicator';
import {styles} from './styles';

import LeftArrow from '../../assets/leftArrow.svg';
import RightArrow from '../../assets/rightArrow.svg';

const IMAGES = [
  'https://picsum.photos/250/250',
  'https://picsum.photos/250/250',
  'https://picsum.photos/250/250',
  'https://picsum.photos/250/250',
];

interface SliderComponentProps {
  containerWidth: number;
}

export const SliderComponent: FC<SliderComponentProps> = ({containerWidth}) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList<string> | null>();
  const currentIndex = useRef(0);

  useEffect(() => {
    scrollX.addListener(({value}) => {
      const slideSize = containerWidth;
      const index = value / slideSize;
      const roundIndex = Math.round(index);

      currentIndex.current = roundIndex;
    });

    return () => {
      scrollX.removeAllListeners();
    };
  });

  const goToPreviousPage = () => {
    const isFirst = currentIndex.current === 0;
    currentIndex.current = isFirst ? IMAGES.length - 1 : --currentIndex.current;

    flatListRef?.current?.scrollToIndex({
      animated: true,
      index: currentIndex.current,
    });
  };

  const goToNextPage = () => {
    const isTheLast = currentIndex.current === IMAGES.length - 1;
    currentIndex.current = isTheLast ? 0 : ++currentIndex.current;

    flatListRef?.current?.scrollToIndex({
      animated: true,
      index: currentIndex.current,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.imagesContainer}>
        <TouchableOpacity onPress={goToPreviousPage}>
          <LeftArrow />
        </TouchableOpacity>
        <Animated.FlatList
          ref={flatListRef}
          data={IMAGES}
          scrollEventThrottle={16}
          keyExtractor={(_, index) => String(index)}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX,
                  },
                },
              },
            ],
            {useNativeDriver: false},
          )}
          renderItem={({item}) => (
            <View style={[styles.slideContainer, {width: containerWidth}]}>
              <Image
                style={{
                  width: containerWidth / 2,
                  height: containerWidth / 2,
                }}
                source={{uri: item}}
                resizeMode="contain"
              />
            </View>
          )}
          showsHorizontalScrollIndicator={false}
          horizontal
          pagingEnabled
        />
        <TouchableOpacity onPress={goToNextPage}>
          <RightArrow />
        </TouchableOpacity>
      </View>
      <Indicator numeberOfDots={IMAGES.length} scrollX={scrollX} />
    </View>
  );
};
