import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const images = [
    { uri: 'https://picsum.photos/800/400', description: 'Cake' },
    { uri: 'https://picsum.photos/801/400', description: 'Coffee' },
    { uri: 'https://picsum.photos/802/400', description: 'Pastry' },
    { uri: 'https://picsum.photos/803/400', description: 'Sandwich' },
    { uri: 'https://picsum.photos/804/400', description: 'Soft drink' },
];

const Category = () => {

    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
            >
                {images.map((item, index) => (

                        <View key={index} style={styles.card}>
                            <Image source={{ uri: item.uri }} style={styles.image} />
                            <Text style={styles.name}>{item.description}</Text>
                        </View>


                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 'auto',
        marginVertical: 20,
    },
    imageContainer: {
        width: 150, // Fixed width for the image + text block
        alignItems: 'center', // Center align content
        marginHorizontal: 10, // Add spacing between items
    },
    image: {
        width: 150, // Fixed width
        height: 150, // Adjusted height
        resizeMode: 'cover',
        borderRadius: 10,
    },
    description: {
        marginTop: 5,
        fontSize: 18,
        textAlign: 'center',
        color: '#000',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        marginBottom: 15,
        marginRight: 15,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        flex: 1,
        // marginRight: 5,
        marginTop: 5,
        textAlign: 'center',
    },
});

export default Category;
