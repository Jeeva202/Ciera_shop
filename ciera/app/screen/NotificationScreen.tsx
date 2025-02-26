import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const notifications = [
    {
        id: 1,
        title: 'New Coffee Flavor',
        description: 'Try our new Caramel Macchiato, available now!',
        time: '5 minutes ago',
        image: 'https://via.placeholder.com/60', // Dummy image URL
    },
    {
        id: 2,
        title: 'Sandwich Special',
        description: 'Get a free drink with every sandwich purchase.',
        time: '1 hour ago',
        image: 'https://via.placeholder.com/60', // Dummy image URL
    },
    {
        id: 3,
        title: 'Cake Promotion',
        description: 'Enjoy 20% off on all cakes this weekend.',
        time: '2 days ago',
        image: 'https://via.placeholder.com/60', // Dummy image URL
    },
];

const NotificationScreen: React.FC = () => {
    return (
        <ScrollView style={styles.container}>
            {notifications.map(notification => (
                <View key={notification.id} style={styles.card}>
                    <Image source={{ uri: notification.image }} style={styles.cardImage} />
                    <View style={styles.cardContent}>
                        <Text style={styles.cardTitle}>{notification.title}</Text>
                        <Text style={styles.cardDescription}>{notification.description}</Text>
                        <Text style={styles.cardTime}>{notification.time}</Text>
                    </View>
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    card: {
        backgroundColor: '#f5f5f7',
        borderRadius: 10,
        padding: 16,
        marginBottom: 16,
        shadowColor: 'rgba(204,214,221,1.00)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 16,
    },
    cardContent: {
        flex: 1,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    cardDescription: {
        fontSize: 16,
        marginBottom: 8,
    },
    cardTime: {
        fontSize: 14,
        color: '#888',
        textAlign: 'right',
    },
});

export default NotificationScreen;