import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet } from 'react-native';

import HomeScreen from '../screen/HomeScreen/HomeScreen';
import MenuScreen from '../screen/MenuScreen';
import WalletScreen from '../screen/WalletScreen';
import GoodToGoScreen from '../screen/GoodToGoScreen';
import AppHeader from '../AppHeader';
import { createDrawerNavigator } from '@react-navigation/drawer';
// Define the type for tab names
type TabNames = 'Home' | 'Menu' | 'Wallet' | 'GoodToGo';

// Define the icons object with proper typing
const icons: Record<TabNames, { active: any; inactive: any }> = {
  Home: {
    active: require('../../assets/icons/home-filled.svg'),
    inactive: require('../../assets/icons/home-outlined.svg'),
  },
  Menu: {
    active: require('../../assets/icons/menu-filled.svg'),
    inactive: require('../../assets/icons/menu-outlined.svg'),
  },
  Wallet: {
    active: require('../../assets/icons/wallet-filled.svg'),
    inactive: require('../../assets/icons/wallet-outlined.svg'),
  },
  GoodToGo: {
    active: require('../../assets/icons/goodToGo-filled.svg'),
    inactive: require('../../assets/icons/goodToGo-outlined.svg'),
  },
};

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size }) => {
          // Ensure TypeScript knows route.name is a valid TabName
          const icon = icons[route.name as TabNames][focused ? 'active' : 'inactive'];

          return (
            <Image
              source={icon}
              style={[
                styles.icon,
                { width: size, height: size },
              ]}
            />
          );
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#303030',
          borderRadius: 50,
          position: 'absolute', 
          marginHorizontal: 16, 
          marginBottom: 16, 
          height: 70,
          padding: 7,
          borderColor: 'none'
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Menu" component={MenuScreen} />
      <Tab.Screen name="Wallet" component={WalletScreen} />
      <Tab.Screen name="GoodToGo" component={GoodToGoScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    // resizeMode: 'contain',
  },
});

export default BottomTabNavigator;
