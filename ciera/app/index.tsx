import * as React from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import App from './_layout';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const appConfig = require('../app.json');
const appName = appConfig.expo.name;

export default function Main() {
  const [fontsLoaded, setFontsLoaded] = React.useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'Andika-Regular': require('../assets/fonts/Andika-Regular.ttf'),
      'Arizonia-Regular': require('../assets/fonts/Arizonia-Regular.ttf'),
    });
    setFontsLoaded(true);
  };

  if (!fontsLoaded) {
    return <AppLoading startAsync={loadFonts} onFinish={() => setFontsLoaded(true)} onError={console.warn} />;
  }

  return (
    <PaperProvider>
      <View style={styles.container}>
        <App />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Andika-Regular',
  },
});

AppRegistry.registerComponent(appName, () => Main);