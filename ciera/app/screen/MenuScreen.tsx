// import React, { useState } from 'react';
// import { View, ScrollView, StyleSheet, Text } from 'react-native';
// import { TextInput } from 'react-native-paper'; // Import from react-native-paper
// import ProductCard from './HomeScreen/ProductCard';

// const products = [
//     {
//         id: '1',
//         name: 'Cappuccino',
//         subtitle: 'Rich and creamy coffee',
//         price: '$3.99',
//         image: 'https://picsum.photos/204/300',
//     },
//     {
//         id: '2',
//         name: 'Cheesecake',
//         subtitle: 'Classic New York style',
//         price: '$5.49',
//         image: 'https://picsum.photos/205/300',
//     },
//     {
//         id: '3',
//         name: 'Croissant',
//         subtitle: 'Buttery and flaky',
//         price: '$2.99',
//         image: 'https://picsum.photos/206/300',
//     },
//     {
//         id: '4',
//         name: 'Sandwich',
//         subtitle: 'Loaded with fresh veggies',
//         price: '$4.99',
//         image: 'https://picsum.photos/207/300',
//     },
// ];

// const MenuScreen = () => {
//     const [searchQuery, setSearchQuery] = useState('');
//     const [filteredProducts, setFilteredProducts] = useState(products);



//     const handleSearch = (query: string) => {
//         setSearchQuery(query);

//         // Filter products based on the query
//         const filtered = products.filter((product) =>
//             product.name.toLowerCase().includes(query.toLowerCase()) ||
//             product.subtitle.toLowerCase().includes(query.toLowerCase())
//         );
//         setFilteredProducts(filtered);
//     };

//     return (
//         <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
//             <View style={{ paddingHorizontal: 15 }}>
//                 <Text style={{ fontSize: 24, fontWeight: "bold" }}>All Menu</Text>
//                 <View style={styles.searchContainer}>
//                     <TextInput
//                         mode="outlined"
//                         dense
//                         style={styles.searchInput}
//                         theme={{
//                             roundness: 10,
//                             colors: {
//                                 primary: '#e1e1e1', // Border color
//                             },
//                         }}
//                         placeholder="What you like to eat..."
//                         value={searchQuery}
//                         onChangeText={handleSearch}
//                         left={
//                             <TextInput.Icon
//                                 icon="magnify"
//                                 color='#808080'
//                             />
//                         }
//                     />
//                 </View>
//                 <Text style={{ fontSize: 22, fontWeight: "bold" }}>Best Selling</Text>
//                 <ProductCard products={filteredProducts} />
//                 <Text style={{ fontSize: 22, fontWeight: "bold" }}>New Arrival</Text>
//                 <ProductCard products={filteredProducts} />
//                 <View style={{ marginBottom: 70 }}></View>
//             </View>
//         </ScrollView>
//     );
// };

// const styles = StyleSheet.create({
//     searchContainer: {
//         paddingVertical: 20,
//         marginBottom: -10,
//     },
//     searchInput: {
//         height: 40,
//     },
// });

// export default MenuScreen;

import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import ProductCard from './HomeScreen/ProductCard';
import imag from '../../assets/icons/coffeeTab.png';
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

const categories = [
  { name: 'All', icon: require('../../assets/icons/tabAll.svg') },
  { name: 'Cake', icon: require('../../assets/icons/tabCake.svg') },
  { name: 'Coffee', icon: require('../../assets/icons/tabCoffee.svg') },
  { name: 'Pastry', icon: require('../../assets/icons/tabPastry.svg') },
  { name: 'Sandwich', icon: require('../../assets/icons/tabSandwich.svg') },
  { name: 'Soft drink', icon: require('../../assets/icons/tabSoftdrink.svg') },
];

const MenuScreen = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [activeCategory, setActiveCategory] = useState('All');
  
    const handleSearch = (query: string) => {
      setSearchQuery(query);
  
      // Filter products based on the query
      const filtered = products.filter(
        (product) =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.subtitle.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    };
  
    const handleCategoryChange = (category: string) => {
      setActiveCategory(category);
  
      if (category === 'All') {
        setFilteredProducts(products);
      } else {
        // Filter products by category (for now using dummy data logic)
        const filtered = products.filter((product) =>
          product.subtitle.toLowerCase().includes(category.toLowerCase())
        );
        setFilteredProducts(filtered);
      }
    };
  
    return (
      <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ paddingHorizontal: 15 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>All Menu</Text>
  
          {/* Search Bar */}
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
              placeholder="What you like to eat..."
              value={searchQuery}
              onChangeText={handleSearch}
              left={<TextInput.Icon icon="magnify" color="#808080" />}
            />
          </View>
  
          {/* Navbar with Images and Text */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.navbar}
          >
            {categories.map((category) => (
              <TouchableOpacity
                key={category.name}
                style={[
                  styles.categoryContainer,
                  activeCategory === category.name && styles.activeCategory,
                ]}
                onPress={() => handleCategoryChange(category.name)}
              >
                <Image
                  source={category.icon}
                  style={[
                    styles.categoryIcon,
                    { tintColor: activeCategory === category.name ? 'white' : 'black' },
                  ]}
                />
                <Text
                  style={[
                    styles.categoryText,
                    activeCategory === category.name && styles.activeCategoryText,
                  ]}
                >
                  {category.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
  
          {/* Product Sections */}
          <Text style={{ fontSize: 22, fontWeight: 'bold', marginTop: 20 }}>Best Selling</Text>
          <ProductCard products={filteredProducts} />
          <Text style={{ fontSize: 22, fontWeight: 'bold' }}>New Arrival</Text>
          <ProductCard products={filteredProducts} />
          <View style={{ marginBottom: 70 }}></View>
        </View>
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    searchContainer: {
      paddingVertical: 20,
      marginBottom: -10,
    },
    searchInput: {
      height: 40,
    },
    navbar: {
      flexDirection: 'row',
      marginVertical: 10,
    },
    categoryContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 10,
      paddingHorizontal: 15,
      marginRight: 10,
      borderWidth: 1,
      borderRadius: 20,
      borderColor: '#e1e1e1',
      backgroundColor: 'transparent',
    },
    activeCategory: {
      backgroundColor: '#303030',
    },
    categoryText: {
      fontSize: 14,
      color: '#000',
      marginTop: 5,
    },
    activeCategoryText: {
      color: 'white',
    },
    categoryIcon: {
      width: 24,
      height: 24,
      resizeMode: 'contain',
    },
  });
  
  export default MenuScreen;
  
