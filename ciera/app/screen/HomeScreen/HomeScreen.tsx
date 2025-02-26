import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import OfferCarousel from './OfferCarousel'
import Category from './Category'
import ProductCard from './ProductCard'
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../_layout'; 
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const HomeScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  
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
  return (
    <ScrollView style={{ backgroundColor: 'white', flex: 1, paddingHorizontal: 15, overflow: 'scroll' }}>
      {/* <Text style={{ fontSize: 22, fontWeight: "bold" }}>Offer</Text> */}
      <OfferCarousel />
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>Category</Text>
      <Category />
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>Popular</Text>
      <ProductCard products={products} />
      <View style={{display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>Favorite</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('FavoritesScreen')} 
        style={{
          display:"flex", 
          flexDirection:"row", 
          alignItems:"center", 
          margin: 0
          }}>
      <Text style={{ fontSize: 14, fontWeight: 500 }}>View all</Text>
      <MaterialCommunityIcons name="chevron-right" size={24} color="black" />
      </TouchableOpacity>

      </View>
      <ProductCard products={products} />
      <View style={{marginBottom:70}}></View>
    </ScrollView>
  )
}

export default HomeScreen