import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { Feather } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper';

export default function EditProfileScreen() {
    const navigation = useNavigation<any>();
    const [name, setName] = useState('Jeeva');
    const [email, setEmail] = useState('jeeva@example.com');
    const [number, setNumber] = useState('1234567890');
    const [image, setImage] = useState<string | null>(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <View style={styles.container}>
            <View style={{
                padding: 20, backgroundColor: "#f5f5f7", borderRadius: 10, shadowColor: 'rgba(204,214,221,1.00)',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 1,
                shadowRadius: 3,
            }}>

            <TouchableOpacity onPress={pickImage}>
                {image ? (
                    <Image source={{ uri: image }} style={styles.profileImage} />
                ) : (
                    <View style={styles.defaultProfileImage}>
                        <Feather name="user" size={50} color="black" />
                    </View>
                )}
            </TouchableOpacity>
            <View style={{ gap: 20 }}>

                <TextInput
                    mode="outlined"
                    placeholder="Name"
                    outlineStyle={styles.input}
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    mode="outlined"
                    outlineStyle={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
                <TextInput
                    mode="outlined"
                    outlineStyle={styles.input}
                    placeholder="Number"
                    value={number}
                    onChangeText={setNumber}
                    keyboardType="phone-pad"
                />
                <TouchableOpacity style={styles.saveButton} onPress={() => navigation.goBack()}>
                    <Text style={styles.saveButtonText}>Save</Text>
                </TouchableOpacity>
            </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        alignSelf: 'center',
        marginBottom: 20,
    },
    defaultProfileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        alignSelf: 'center',
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    input: {
        borderRadius: 7, // Customize the border radius
        borderColor: '#e1e1e1', // Default border color
        borderWidth: 1, // Add border width for clarity
        backgroundColor: '#fff', // Add background color to the input
    },
    saveButton: {
        backgroundColor: '#303030',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});
