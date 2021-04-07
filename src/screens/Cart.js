import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../screens/Cart/Header';
import Item from '../screens/Cart/Item';
import Footer from '../screens/Cart/Footer';
import Basket from '../screens/Cart/BasketComponent';

const Cart = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header onPress={() => navigation.navigate('Dashboard')} />
      <Item />
      <Basket />
      <Footer onPress={() => navigation.navigate('Checkout')} />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
  },
  h1: {
    color: '#0099ff',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
