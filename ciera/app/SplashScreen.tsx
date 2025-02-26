import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image, Dimensions } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from './_layout';
import * as Font from 'expo-font';

const SplashScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'Arizonia-Regular': require('../assets/fonts/Arizonia-Regular.ttf'),
      });
    };

    loadFonts();

    setTimeout(() => {
      navigation.navigate('SignInScreen');
    }, 2000); 
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/images/splashScreen.svg')} style={styles.image} />
      </View>
      <ActivityIndicator size="large" color="#333" />
      <Text style={styles.sampleText}>Ciera</Text>
    </View>
  ); 
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    fontFamily: 'Andika-Regular',
  },
  imageContainer: {
    width: '100%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  sampleText: {
    fontSize: 24,
    fontFamily: 'Arizonia-Regular',
    marginTop: 20,
  },
});

export default SplashScreen;
