import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const images = [
  'https://picsum.photos/800/400',
  'https://picsum.photos/801/400',
  'https://picsum.photos/802/400',
  'https://picsum.photos/803/400',
  'https://picsum.photos/804/400',
];

const OfferCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event: { nativeEvent: any; }) => {
    const { nativeEvent } = event;
    const { contentOffset } = nativeEvent;
    const currentIndex = Math.round(contentOffset.x / screenWidth);
    setActiveIndex(currentIndex);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16} // Improves scroll performance
      >
        {images.map((image, index) => (
          <Image
            key={index}
            source={{ uri: image }}
            style={styles.image}
          />
        ))}
      </ScrollView>
      <View style={styles.stepper}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.step,
              index === activeIndex && styles.activeStep,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    marginVertical: 20,
  },
  image: {
    width: screenWidth - 30, // Dynamically set width
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  stepper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // paddingVertical: 15,
    marginBottom: -15
  },
  step: {
    width: 20,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  activeStep: {
    backgroundColor: '#333',
    width: 20,
    height: 4,
    borderRadius: 5,
  },
});

export default OfferCarousel;
