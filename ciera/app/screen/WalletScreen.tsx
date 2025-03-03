import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Circle } from 'react-native-progress'; // Replace with react-native-progress
import { LinearGradient } from 'expo-linear-gradient';
import { ProgressBar } from 'react-native-paper'; // Add this line
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../_layout';
import { MaterialIcons } from '@expo/vector-icons'; // For icons

const WalletScreen = () => {
  const rewards = [
    { id: 0, points: 0, description: '', image: null },
    { id: 1, points: 25, description: 'Grab a coffee for 25pts', image: require('../../assets/images/reward1.svg') },
    { id: 2, points: 50, description: 'Grab a coffee and pastry for 50pts', image: require('../../assets/images/reward1.svg') },
    { id: 3, points: 75, description: 'Grab a coffee, pastry and cake or sandwich for 75pts', image: require('../../assets/images/reward1.svg') },
    { id: 4, points: 100, description: 'Grab a coffee, pastry or cake and sandwich for 100pts', image: require('../../assets/images/reward1.svg') },
  ];

  const currentPoints = 50; // User's current points
  const progress = currentPoints / 100; // Convert to percentage for Circle
  const coinImage = require('../../assets/images/coin.svg'); // Add this line
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <ScrollView style={styles.container}>
      {/* Loyalty Card Section */}
      {/* <LinearGradient
        colors={['#000000', '#383838', '#121010', '#000000']}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.loyaltyCard}
      >
        <View style={styles.loyaltyHeader}>
          <Text style={styles.loyaltyTitle}>LOYALTY CARD</Text>
          <Text style={styles.userName}>CIERA</Text>
        </View>
        <View style={styles.loyaltyContent}>
          <View style={styles.progressContainer}>
            <Circle
              size={90}
              progress={progress}
              color={'#FFC400'}
              unfilledColor={'#444'}
              borderWidth={0}
              thickness={7}
              showsText={false}
            />
            <View style={styles.progressTextContainer}>
              <Image source={coinImage} style={styles.coinImage} />
            </View>
          </View>

          <View style={styles.pointsContainer}>
            <Text style={styles.points}>
              
              <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
                {currentPoints}/
                <Text style={{ fontSize: 16 }}>100 Points</Text>

              </Text>
            </Text>
            <Text style={styles.loyaltyDescription}>
              Earn 25 more points to grab a mini-meal or redeem and grab a coffee.
            </Text>
            <TouchableOpacity style={styles.redeemButton} onPress={() => navigation.navigate('QRCodeScreen')}>
              <Text style={styles.redeemButtonText}>Redeem</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.userNameFooter}>Jeeva</Text>
      </LinearGradient> */}
      <LinearGradient
        colors={['#000000', '#1E1E1E', '#121010', '#000000']}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.loyaltyCard}
      >
        <View style={styles.loyaltyHeader}>
          <Text style={styles.loyaltyTitle}>LOYALTY CARD</Text>
          <Text style={styles.userName}>CIERA</Text>
        </View>
        <View style={styles.loyaltyContent}>
          <View style={styles.progressContainer}>
            <Circle
              size={100}
              progress={progress}
              color={'#FFC400'}
              unfilledColor={'#444'}
              borderWidth={0}
              thickness={8}
              showsText={false}
            />
            <View style={styles.progressTextContainer}>
              <Image source={coinImage} style={styles.coinImage} />
            </View>
          </View>

          <View style={styles.pointsContainer}>
            <Text style={styles.points}>
              <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
                {currentPoints}/
                <Text style={{ fontSize: 18, fontWeight: 'normal' }}>100 Points</Text>
              </Text>
            </Text>
            <Text style={styles.loyaltyDescription}>
              Earn 25 more points to grab a mini-meal or redeem and grab a coffee.
            </Text>
            <TouchableOpacity
              style={styles.redeemButton}
              onPress={() => navigation.navigate('QRCodeScreen')}
            >
              <Text style={styles.redeemButtonText}>Redeem</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.userNameFooter}>Jeeva</Text>
      </LinearGradient>

      <Text style={styles.sectionTitle}>How it works?</Text>
      {/* <View style={styles.rewardsContainer}>
        {rewards.filter(reward => reward.points > 0).map((reward) => (
          <View key={reward.id} style={styles.rewardCard}>
            <Image source={reward.image} style={styles.rewardCardBackground} />
            <View style={styles.rewardCardOverlay}>
              <Text style={styles.rewardDescription}>{reward.description}</Text>
              <View style={styles.rewardPointsContainer}>
                <Text style={styles.rewardPoints}>{reward.points}</Text>
                <Image source={coinImage} style={styles.coinImageSmall} />
              </View>
            </View>
          </View>
        ))}
      </View> */}
      <View style={styles.rewardsContainer}>
      {rewards.filter(reward => reward.points > 0).map((reward) => (
        <TouchableOpacity key={reward.id} style={styles.rewardCard} activeOpacity={0.8}>
          <Image source={reward.image} style={styles.rewardCardBackground} />
          <LinearGradient
            colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.8)']}
            style={styles.rewardCardOverlay}
          >
            <Text style={styles.rewardDescription}>{reward.description}</Text>
            <View style={styles.rewardPointsContainer}>
              <Text style={styles.rewardPoints}>{reward.points}</Text>
              <Image source={coinImage} style={styles.coinImageSmall} />
            </View>
          </LinearGradient>
          <MaterialIcons name="local-offer" size={24} color="#FFC400" style={styles.offerIcon} />
        </TouchableOpacity>
      ))}
    </View>

      {/* Invite Friends Section */}
      <TouchableOpacity style={styles.inviteFriends}>
        <View style={styles.inviteIcon}>
          <Text style={styles.inviteIconText}>👥</Text>
        </View>
        <View>
          <Text style={styles.inviteTitle}>Invite Friends</Text>
          <Text style={styles.inviteDescription}>Refer your friends and family and earn XP points</Text>
        </View>
      </TouchableOpacity>
      <View style={{ marginBottom: 100 }}></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  loyaltyCard: {
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },
  loyaltyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  loyaltyTitle: {
    color: '#FFC400',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  userName: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loyaltyContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  progressContainer: {
    position: 'relative',
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressTextContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  coinImage: {
    width: 30,
    height: 30,
  },
  pointsContainer: {
    flex: 1,
    marginLeft: 20,
  },
  points: {
    color: '#FFC400',
    fontSize: 24,
    marginBottom: 10,
  },
  loyaltyDescription: {
    color: '#FFC400',
    fontSize: 12,
    fontWeight: '500',
    marginBottom: 20,
    lineHeight: 18,
  },
  redeemButton: {
    backgroundColor: '#FFC400',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
  },
  redeemButtonText: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight: 10,
  },
  userNameFooter: {
    color: '#FFF',
    fontSize: 14,
    marginTop: 10,
    fontWeight: '500',
    textAlign: 'right',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  progressCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 20,
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
  },
  progressLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15, // Decrease the top margin
  },
  progressLabel: {
    alignItems: 'center',
  },
  rewardsContainer: {
    marginTop: 20,
  },
  rewardCard: {
    flex: 1,
    marginBottom: 20,
    borderRadius: 15,
    overflow: 'hidden',
    position: 'relative',
    height: 180, // Increased height for better visuals
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  rewardCardBackground: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: 15,
  },
  rewardCardOverlay: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-end', // Align content to the bottom
  },
  rewardPointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 196, 0, 0.2)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    alignSelf: 'flex-start', // Align to the left
  },
  coinImageSmall: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },
  rewardPoints: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFC400',
  },
  rewardDescription: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
    marginBottom: 10,
  },
  offerIcon: {
    position: 'absolute',
    top: 15,
    right: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
    padding: 5,
  },
  inviteFriends: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F5F5F7',
    borderRadius: 12,
    marginTop: 20,
  },
  inviteIcon: {
    backgroundColor: '#E0E0E0',
    borderRadius: 50,
    padding: 10,
    marginRight: 10,
  },
  inviteIconText: {
    fontSize: 24,
  },
  inviteTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  inviteDescription: {
    fontSize: 12,
    color: '#666',
  },
});

export default WalletScreen;
