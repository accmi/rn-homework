import React, {useRef} from 'react';
import {
  Animated,
  FlatList,
  Image,
  View,
  TouchableOpacity,
  ViewToken,
} from 'react-native';
import {Indicator} from './indicator';
import {styles} from './styles';

import LeftArrow from '../../assets/leftArrow.svg';
import RightArrow from '../../assets/rightArrow.svg';

type onViewableItemsChangedType = (info: {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}) => void;

const IMAGES = [
  'https://picsum.photos/250/250',
  'https://picsum.photos/250/250',
  'https://picsum.photos/250/250',
  'https://picsum.photos/250/250',
];

export const SliderComponent = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList<string> | null>();
  let currentIndex = 0;

  const goToPreviousPage = () => {
    if (currentIndex !== 0) {
      currentIndex -= 1;
      flatListRef?.current?.scrollToIndex({
        animated: true,
        index: currentIndex,
      });
    }
  };

  const goToNextPage = () => {
    if (currentIndex !== IMAGES.length - 1) {
      currentIndex += 1;
      flatListRef?.current?.scrollToIndex({
        animated: true,
        index: currentIndex,
      });
    }
  };

  const onViewRef = React.useRef<onViewableItemsChangedType>(({changed}) => {
    currentIndex = changed[0]?.index || 0;
  });

  const viewConfigRef = React.useRef({viewAreaCoveragePercentThreshold: 50});

  return (
    <View style={styles.container}>
      <View style={styles.imagesContainer}>
        <TouchableOpacity onPress={goToPreviousPage}>
          <LeftArrow />
        </TouchableOpacity>
        <Animated.FlatList
          ref={flatListRef}
          viewAreaCoveragePercentThreshold={viewConfigRef.current}
          onViewableItemsChanged={onViewRef.current}
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
            <View style={styles.slideContainer}>
              <Image
                style={styles.image}
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
