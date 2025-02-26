import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from './_layout'; // Adjust the import path as necessary
import { TextInput, Button, Divider } from 'react-native-paper';

const SignInScreen = () => {
  const [identifier, setIdentifier] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpScreen, setIsOtpScreen] = useState(false);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleSignIn = () => {
    // Add your sign-in logic here
    setIsOtpScreen(true);
  };

  const handleVerifyOtp = () => {
    // Add your OTP verification logic here
    navigation.navigate('Main');
  };

  const handleBackToSignIn = () => {
    setIsOtpScreen(false);
  };

  const isPhoneNumber = (input: string) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(input);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image source={require('../assets/images/signIn.svg')} style={styles.image} />
      </View>
      <View style={styles.bottomSection}>
        {isOtpScreen ? (
          <View style={{ gap: '20px' }}>
            <Text style={styles.mainText}>
            Verify your {isPhoneNumber(identifier) ? 'mobile' : 'email'}
            </Text>
              <Text style={{ fontSize: 16, fontWeight: 500, textAlign: 'center', }}>
                Please enter the 4 digit code sent to
              </Text>
              <Text style={{ fontSize: 16, fontWeight: 500, color: '#7e7e7e' }}>{identifier}</Text>
            <TextInput
              mode="outlined"
              placeholder="Enter OTP"
              outlineStyle={styles.input}
              value={otp}
              onChangeText={setOtp}
              style={{ borderColor: 'blue' }}
            />
            <Text style={{ fontSize: 12, fontWeight: 500, color: '#7e7e7e', textAlign: 'right', paddingHorizontal: 5, marginVertical:10 }}>
              didn't receive the code, <Text style={{ fontWeight: 'bold' }}>Resend Code</Text>
            </Text>
            <View style={styles.buttonRow}>
              <TouchableOpacity style={{ ...styles.buttonHalfWidth, backgroundColor: '#efefef' }} onPress={handleBackToSignIn}>
                <Text style={{ ...styles.buttonText, color: '#303030' }}>Back</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonHalfWidth} onPress={handleVerifyOtp}>
                <Text style={styles.buttonText}>Verify OTP</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={{ gap: '20px' }}>
            <View style={styles.textContainer}>
              <Text style={styles.mainText}>
                Welcome to <Text style={styles.highlightedText}>Ciera</Text>
              </Text>
              <Text style={{ fontSize: 16, fontWeight: 500 }}>Login or Sign In</Text>
            </View>
            <TextInput
              mode="outlined"
              placeholder="Email or Phone Number"
              outlineStyle={styles.input}
              value={identifier}
              onChangeText={setIdentifier}
            />
            <TouchableOpacity style={styles.button} onPress={handleSignIn}>
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Andika-Regular',
    backgroundColor: '#303030',
  },
  topSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '60%',
    backgroundColor: '#303030',
  },
  bottomSection: {
    flex: 1,
    justifyContent: 'space-around',
    padding: 16,
    height: '40%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  image: {
    width: '70%',
    height: '70%',
    resizeMode: 'contain',
  },
  textContainer: {
    alignItems: 'center',
    padding: 10,
    marginBottom: 20,
  },
  mainText: {
    fontWeight: '500',
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 10,
  },
  highlightedText: {
    fontFamily: 'Arizonia-Regular', // Ensure the font is loaded correctly in your project
    fontSize: 28,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
    fontFamily: 'Arizonia-Regular',
  },
  input: {
    borderRadius: 7, // Customize the border radius
    borderColor: '#e1e1e1', // Default border color
    borderWidth: 1, // Add border width for clarity
    backgroundColor: '#fff', // Add background color to the input
  },
  button: {
    backgroundColor: '#303030',
    height: 60,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonFullWidth: {
    backgroundColor: '#303030',
    width: '100%',
    height: 60,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonHalfWidth: {
    backgroundColor: '#303030',
    width: '48%',
    height: 60,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 500,
  },
});

export default SignInScreen;
