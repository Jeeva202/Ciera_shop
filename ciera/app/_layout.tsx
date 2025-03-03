import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, StyleSheet, Text, Button } from 'react-native';
import AppHeader from './AppHeader'; // Path to AppHeader
import BottomTabNavigator from './(tabs)/_layout'; // Path to BottomTabNavigator
import NotificationScreen from './screen/NotificationScreen'; // Path to NotificationScreen
import MenuScreen from './screen/MenuScreen';
import FavoritesScreen from './screen/FavoritesScreen';
import WalletScreen from './screen/WalletScreen';
import { Drawer } from 'react-native-drawer-layout';
import DrawerContent from './DrawerContent';
import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import CallUsScreen from './screen/CallUsScreen';
import EditProfileScreen from './EditProfileScreen';
import QRCodeScreen from './screen/QRCodeScreen';

// Define the type for stack navigator
export type RootStackParamList = {
  Main: undefined;
  NotificationScreen: undefined;
  MenuScreen: undefined;
  FavoritesScreen: undefined;
  WalletScreen: undefined;
  SplashScreen: undefined;
  SignInScreen: undefined;
  CallUsScreen: undefined;
  EditProfileScreen: undefined;
  QRCodeScreen: undefined;
};

// Create the stack navigator with the defined types
const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <Stack.Navigator>
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Main" options={{ headerShown: false }} >
        {() => (
          <View style={styles.container}>
            <Drawer
              open={open}
              onOpen={openDrawer}
              onClose={closeDrawer}
              renderDrawerContent={() => {
                return <DrawerContent />;
              }}
            >
              <AppHeader openDrawer={openDrawer} closeDrawer={closeDrawer} />
              <BottomTabNavigator />
            </Drawer>
          </View>
        )}
      </Stack.Screen>
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} options={{ title: 'Notifications' }} />
      <Stack.Screen name="MenuScreen" component={MenuScreen} options={{ title: '' }} />
      <Stack.Screen name="FavoritesScreen" component={FavoritesScreen} />
      <Stack.Screen name="WalletScreen" component={WalletScreen} />
      <Stack.Screen name="CallUsScreen" component={CallUsScreen} options={{ title: 'Contact Us' }} />
      <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} options={{ title: 'Edit Profile' }} />
      <Stack.Screen name="QRCodeScreen" component={QRCodeScreen}  options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
