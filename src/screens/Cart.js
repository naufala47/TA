import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import Header from '../screens/Cart/Header';
import Item from '../screens/Cart/Item';
import Footer from '../screens/Cart/Footer';
import Basket from '../screens/Cart/BasketComponent';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

var {width} = Dimensions.get('window');
const Cart = props => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
          <Icon
            name="angle-double-left"
            size={40}
            color="nlack"
            // onPress={handlePress}
          />
        </TouchableOpacity>
      </View>
      {props.cartItems.map(x => {
        return (
          <View
            style={{
              width: width - 20,
              margin: 10,
              backgroundColor: 'transparent',
              flexDirection: 'row',
              borderBottomWidth: 2,
              borderColor: '#cccccc',
              paddingBottom: 10,
            }}>
            <Image
              resizeMode={'contain'}
              style={{width: width / 3, height: width / 3}}
              source={{
                uri: 'http://tutofox.com/foodapp/food/pizza/pizza-1.png',
              }}
            />
            <View
              style={{
                flex: 1,
                backgroundColor: 'trangraysparent',
                padding: 10,
                justifyContent: 'space-between',
              }}>
              <View>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>
                  {x.product.name}
                </Text>
                <Text>{x.product.categoryId.name}</Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text
                  style={{fontWeight: 'bold', color: '#33c37d', fontSize: 20}}>
                  ${x.product.price}
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <TouchableOpacity>
                    <Icon name="minus-circle" size={35} color={'#33c37d'} />
                  </TouchableOpacity>
                  <Text
                    style={{
                      paddingHorizontal: 8,
                      fontWeight: 'bold',
                      fontSize: 18,
                    }}>
                    5
                  </Text>
                  <TouchableOpacity>
                    <Icon name="plus-circle" size={35} color={'#33c37d'} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        );
      })}
      {/* <ScrollView>
        <Header onPress={() => navigation.navigate('Dashboard')} />
        <Item />
        <Basket />
        <Footer onPress={() => navigation.navigate('Checkout')} />
      </ScrollView> */}

      <View style={{height: 20}} />

      <TouchableOpacity
        style={{
          backgroundColor: '#9fd236',
          width: width - 40,
          alignItems: 'center',
          padding: 10,
          borderRadius: 5,
          marginHorizontal: 20,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
          }}>
          Checkout
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = state => {
  const {cartItems} = state;
  return {
    cartItems: cartItems,
  };
};

export default connect(mapStateToProps, null)(Cart);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  h1: {
    color: '#0099ff',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  header: {
    paddingVertical: 20,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
});
