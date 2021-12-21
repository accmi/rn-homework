import React, {useRef} from 'react';
import {Animated, Image, View} from 'react-native';
import {Indicator} from './indicator';
import {styles} from './styles';

const IMAGES = [
  'https://picsum.photos/250/250',
  'https://picsum.photos/250/250',
  'https://picsum.photos/250/250',
  'https://picsum.photos/250/250',
];

export const SliderComponent = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <Animated.FlatList
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
      <Indicator numeberOfDots={IMAGES.length} scrollX={scrollX} />
    </View>
  );
};
