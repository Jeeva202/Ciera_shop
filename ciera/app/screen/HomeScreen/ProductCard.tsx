import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const products = [
  {
    id: '1',
    name: 'Cappuccino',
    subtitle: 'Rich and creamy coffee',
    price: '$3.99',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: '2',
    name: 'Cheesecake',
    subtitle: 'Classic New York style',
    price: '$5.49',
    image: 'https://picsum.photos/201/300',
  },
  {
    id: '3',
    name: 'Croissant',
    subtitle: 'Buttery and flaky',
    price: '$2.99',
    image: 'https://picsum.photos/202/300',
  },
  {
    id: '4',
    name: 'Sandwich',
    subtitle: 'Loaded with fresh veggies',
    price: '$4.99',
    image: 'https://picsum.photos/203/300',
  },
];

interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  image: string;
}

interface ProductCardProps {
  products: Product[];
}

const ProductCard: React.FC<ProductCardProps> = ({ products }) => {
  return (
    <View style={styles.grid}>
      {products.map((item) => (
        <View key={item.id} style={styles.card}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <TouchableOpacity>
              <MaterialIcons name="favorite-border" size={24} color="gray" />
            </TouchableOpacity>
          </View>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    width: '48%',
    shadowColor: '#e1e1e1',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#f5f5f5',
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 8,
    marginBottom: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
    marginRight: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default ProductCard;
