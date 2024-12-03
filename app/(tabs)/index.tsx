import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

export default function ProductCard() {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: 'https://m.media-amazon.com/images/I/41JQbzI2kwL.jpg' }}
        style={styles.productImage}
      />
      <Text style={styles.productName}>Samsung Galaxy S23 FE</Text>
      <Text style={styles.productPrice}>R$ 2.800,00</Text>
      <Button title="Comprar" onPress={() => alert('Produto adicionado ao carrinho')} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'orange',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    margin: 20,
  },
  productImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 15,
  },
  productName: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 20,
    color: 'blue',
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold'
  },
});
