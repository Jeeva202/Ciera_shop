import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons'; // For a back button icon
import { useNavigation, NavigationProp } from '@react-navigation/native';

const QRCodeScreen = () => {

    const navigation = useNavigation();

  // Example user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1234567890',
  };

// Encode user data into a URL
const qrValue = `https://your-backend.com/redeem?name=${encodeURIComponent(user.name)}&email=${encodeURIComponent(user.email)}&phone=${encodeURIComponent(user.phone)}`;


  return (
    <LinearGradient
      colors={['#000000', '#1a1a1a', '#000000']}
      style={styles.container}
    >
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="arrowleft" size={24} color="#FFC400" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Scan to Redeem Points</Text>

      {/* QR Code */}
      <View style={styles.qrContainer}>
        <QRCode
          value={qrValue} // Pass the encoded user data here
          size={200}
          color="#FFC400"
          backgroundColor="transparent"
        />
      </View>

      {/* User Information */}
      <View style={styles.userInfoContainer}>
        <Text style={styles.userInfoText}>Name: {user.name}</Text>
        <Text style={styles.userInfoText}>Email: {user.email}</Text>
        <Text style={styles.userInfoText}>Phone: {user.phone}</Text>
      </View>

      {/* Footer Text */}
      <Text style={styles.footerText}>
        Show this QR code at the counter to redeem your points.
      </Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    padding: 10,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 196, 0, 0.1)',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFC400',
    marginBottom: 20,
    textAlign: 'center',
  },
  qrContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#FFC400',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  userInfoContainer: {
    marginTop: 30,
    padding: 20,
    backgroundColor: 'rgba(255, 196, 0, 0.1)',
    borderRadius: 20,
    width: '80%',
    alignItems: 'flex-start',
  },
  userInfoText: {
    fontSize: 16,
    color: '#FFC400',
    marginBottom: 10,
  },
  footerText: {
    marginTop: 30,
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    paddingHorizontal: 40,
  },
});

export default QRCodeScreen;