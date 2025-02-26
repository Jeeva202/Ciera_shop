import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Feather from '@expo/vector-icons/Feather';
import { List } from 'react-native-paper';

export default function DrawerContent() {
  const navigation = useNavigation<any>();
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) setGreeting('Good Morning');
    else if (currentHour < 18) setGreeting('Good Afternoon');
    else setGreeting('Good Evening');
  }, []);

  return (
    <View>
      <View style={styles.header}>
        <Image source={require('../assets/images/cieraModal.svg')} style={styles.image} />
        <View style={styles.userInfo}>
          <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <TouchableOpacity style={styles.userIconBackground}>
              <Feather name="user" size={30} color="black" />
            </TouchableOpacity>
            <View style={styles.greetingContainer}>
              <View>
                <Text style={styles.greeting}>{greeting}</Text>
                <Text style={styles.username}>Jeeva</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('EditProfileScreen')}>
            <Feather name="edit" size={16} color="#7E7E7E" style={styles.editIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.listContainer}>
        <List.Item
          title="Favorites"
          left={() => (
            <View style={styles.iconBackground}>
              <Feather name="heart" size={20} color="white" />
            </View>
          )}
          onPress={() => navigation.navigate('FavoritesScreen')}
          titleStyle={styles.listItemTitle}
          style={styles.listItem}
        />
        <List.Item
          title="Call Us"
          left={() => (
            <View style={styles.iconBackground}>
              <Feather name="phone" size={20} color="white" />
            </View>
          )}
          onPress={() => navigation.navigate('CallUsScreen')}
          titleStyle={styles.listItemTitle}
          style={styles.listItem}
        />
        <List.Item
          title="About Us"
          left={() => (
            <View style={styles.iconBackground}>
              <Feather name="info" size={20} color="white" />
            </View>
          )}
          onPress={() => navigation.navigate('AboutUsScreen')}
          titleStyle={styles.listItemTitle}
          style={styles.listItem}
        />
        <List.Item
          title="Logout"
          left={() => (
            <View style={styles.iconBackground}>
              <Feather name="log-out" size={20} color="white" />
            </View>
          )}
          onPress={() => navigation.navigate('LogoutScreen')}
          titleStyle={styles.listItemTitle}
          style={styles.listItem}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#303030",
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  image: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  greetingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  greeting: {
    color: '#7E7E7E',
    fontSize: 16,
    fontWeight: '400',
    marginRight: 8,
  },
  editIcon: {
    marginLeft: 4,
    // borderWidth: 1,
    // padding: 10,
    // borderRadius: 50,
    // borderColor: '#F5F5F5',
  },
  username: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
    marginTop: 4,
  },
  listContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  listItem: {
    borderBottomWidth: 0,
    borderBottomColor: '#303030',
  },
  listItemTitle: {
    color: 'black',
    fontSize: 18,
  },
  iconBackground: {
    backgroundColor: '#303030',
    borderRadius: 30,
    padding: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
});