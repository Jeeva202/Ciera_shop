import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';


type RootStackParamList = {
  Main: undefined;
  NotificationScreen: undefined;
  MenuScreen: undefined;
};

type NavigationProps = StackNavigationProp<RootStackParamList, 'Main'>;

type AppHeaderProps = {
  openDrawer: () => void;
  closeDrawer: () => void;
};

const AppHeader: React.FC<AppHeaderProps> = ({ openDrawer }) => {
  const [greeting, setGreeting] = useState('');
  const navigation = useNavigation<NavigationProps>();

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) setGreeting('Good Morning');
    else if (currentHour < 18) setGreeting('Good Afternoon');
    else setGreeting('Good Evening');
  }, []);

  return (
    <View style={styles.header}>
      <View style={styles.leftSection}>
        <TouchableOpacity
          style={styles.userIconBackground}
          onPress={openDrawer}
        >
          <Feather name="user" size={30} color="black" />
        </TouchableOpacity>
        <View>
          <Text style={styles.greeting}>{greeting}</Text>
            <Text style={styles.username}>Jeeva</Text>
        </View>
      </View>
      <View style={styles.rightSection}>
        <TouchableOpacity
          style={styles.notificationIconBackground}
          onPress={() => navigation.navigate('NotificationScreen')}
        >
          <MaterialIcons name="notifications-none" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    zIndex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5'
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userIconBackground: {
    backgroundColor: '#F5F5F5',
    borderRadius: 150,
    padding: 3,
    width: 65,
    height: 65,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationIconBackground: {
    backgroundColor: '#F5F5F5',
    borderRadius: 150,
    padding: 3,
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greeting: {
    color: '#7E7E7E',
    fontSize: 16,
    fontWeight: '400',
  },
  username: {
    color: '#000',
    fontSize: 18,
    fontWeight: '500',
  },
  rightSection: {
    justifyContent: 'flex-end',
  },
});

export default AppHeader;
