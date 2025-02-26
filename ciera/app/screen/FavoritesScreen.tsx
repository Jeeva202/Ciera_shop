import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper'; // Import from react-native-paper
import ProductCard from './HomeScreen/ProductCard';

const products = [
    {
        id: '1',
        name: 'Cappuccino',
        subtitle: 'Rich and creamy coffee',
        price: '$3.99',
        image: 'https://picsum.photos/204/300',
    },
    {
        id: '2',
        name: 'Cheesecake',
        subtitle: 'Classic New York style',
        price: '$5.49',
        image: 'https://picsum.photos/205/300',
    },
    {
        id: '3',
        name: 'Croissant',
        subtitle: 'Buttery and flaky',
        price: '$2.99',
        image: 'https://picsum.photos/206/300',
    },
    {
        id: '4',
        name: 'Sandwich',
        subtitle: 'Loaded with fresh veggies',
        price: '$4.99',
        image: 'https://picsum.photos/207/300',
    },
];

const FavoritesScreen = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(products);

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        const filtered = products.filter((product) =>
            product.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
            keyboardShouldPersistTaps="handled"
        >
            <View style={styles.searchContainer}>
                <TextInput
                    mode="outlined"
                    dense
                    style={styles.searchInput}
                    theme={{
                        roundness: 10,
                        colors: {
                            primary: '#e1e1e1',
                        },
                    }}
                    placeholder="Search favorites"
                    value={searchQuery}
                    onChangeText={handleSearch}
                    left={
                        <TextInput.Icon
                            icon="magnify"
                            color='#808080'
                        />
                    }
                />
            </View>
            <View style={styles.productContainer}>
                <ProductCard products={filteredProducts} />
                <ProductCard products={filteredProducts} />
                <View style={{ marginBottom: 100 }}></View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    contentContainer: {
        paddingHorizontal: 15,
        flex: 1,
        // overflow: 'scroll',
        // height: 100,
    },
    searchContainer: {
        paddingVertical: 20,
        marginBottom: -10,
    },
    searchInput: {
        height: 40,
    },
    productContainer: {
        paddingHorizontal: 10,
    },
});

export default FavoritesScreen;
