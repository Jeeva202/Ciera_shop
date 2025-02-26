import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const CallUsScreen: React.FC = () => {
    const [message, setMessage] = useState('');

    return (
        <View style={styles.container}>
            <View style={{padding:20, backgroundColor:"#f5f5f7", borderRadius:10, shadowColor: 'rgba(204,214,221,1.00)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 3,}}>

            <View style={styles.infoContainer}>
                <MaterialIcons name="call" size={24} color="#303030" />
                <Text style={styles.infoText}>+1 234 567 890</Text>
            </View>
            <View style={styles.infoContainer}>
                <MaterialIcons name="email" size={24} color="#303030" />
                <Text style={styles.infoText}>info@restaurant.com</Text>
            </View>
            <View style={styles.infoContainer}>
                <MaterialIcons name="location-on" size={24} color="#303030" />
                <Text style={styles.infoText}>123 Main Street, City, Country</Text>
            </View>
            <TextInput
                style={styles.textArea}
                placeholder="Your message"
                placeholderTextColor="#888"
                multiline
                numberOfLines={4}
                value={message}
                onChangeText={setMessage}
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Send Message</Text>
            </TouchableOpacity>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 15,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    infoText: {
        fontSize: 18,
        marginLeft: 15,
    },
    textArea: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        textAlignVertical: 'top',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#303030',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CallUsScreen;
