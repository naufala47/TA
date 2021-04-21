import React, { useState, useEffect } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { FoodDummy2, IcBackWhite } from '../assets';
import { connect } from 'react-redux';
import cartActions from '../redux/action/cartActions';
import Button from '../components/Button';
import * as actions from '../redux/action/cartActions';
import Counter from '../components/Counter';
import Number from '../components/Number';
import Rating from '../components/Rating';
import { getData } from '../utils';
const DetailMenu = props => {
  //   const [totalItem, setTotalItem] = useState(1);
  const {
    id,
    name,
    picturePath,
    description,
    ingredients,
    instructions,
    rate,
    price,
  } = props.route.params;
  const [totalItem, setTotalItem] = useState(1);
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    getData('userProfile').then(res => {
      setUserProfile(res);
    });
  }, []);
  //   const onOrder = () => {
  //     const totalPrice = totalItem * price;
  //     const driver = 50000;
  //     const tax = (10 / 100) * totalPrice;
  //     const total = totalPrice + driver + tax;
  //     const data = {
  //       item: {
  //         id,
  //         name,
  //         price,
  //       },
  //       transaction: {
  //         totalItem,
  //         totalPrice,
  //         driver,
  //         tax,
  //         total,
  //       },
  //     };
  //     navigation.navigate('OrderSummary', data);
  //   };
  const onCounterChange = value => {
    setTotalItem(value);
  };

  const onOrder = () => {
    const totalPrice = totalItem * price;
    const driver = 15000;
    const tax = (10 / 100) * totalPrice;
    const total = totalPrice + driver + tax;

    const data = {
      item: {
        id,
        name,
        price,
        picturePath,
      },
      transaction: {
        totalItem,
        totalPrice,
        driver,
        tax,
        total,
      },
      userProfile,
    };

    props.navigation.navigate('OrderSummary', data);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.page}>
        <ImageBackground
          source={{
            uri: picturePath,
          }}
          style={styles.cover}>
          <TouchableOpacity
            style={styles.back}
            onPress={() => props.navigation.navigate('Dashboard')}>
            <IcBackWhite />
          </TouchableOpacity>
        </ImageBackground>
        <View style={styles.content}>
          <View style={styles.mainContent}>
            <View style={styles.productContainer}>
              <View>
                <Text style={styles.title}>{name}</Text>
                <Rating number={rate} />
              </View>
              <Counter onValueChange={onCounterChange} />
            </View>
            <Text style={styles.desc}>{description}</Text>
            <Text style={styles.label}>Ingredients</Text>
            <Text style={styles.desc}>{ingredients}</Text>
            <Text style={styles.label}>Instructions</Text>
            <Text style={styles.desc}>{instructions}</Text>
          </View>
          <View style={styles.footer}>
            <View style={styles.priceContainer}>
              <Text style={styles.labelTotal}>Total Price</Text>
              {/* <Text style={styles.priceTotal}>IDR 12.000</Text> */}
              <Number number={totalItem * price} style={styles.priceTotal} />
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.button}>
                <Button text="Order Now" onPress={onOrder} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = dispatch => {
  return {
    addItemToCart: product => dispatch(actions.addToCart({ product })),
  };
};

export default connect(null, mapStateToProps)(DetailMenu);

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  cover: {
    height: 300,
    paddingTop: 26,
    paddingLeft: 22,
  },
  back: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: 'white',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    marginTop: -40,
    paddingTop: 26,
    paddingHorizontal: 16,
    flex: 1,
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  desc: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginBottom: 4,
  },
  mainContent: {
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    paddingVertical: 16,
    alignItems: 'center',
  },
  button: {
    width: 163,
    // flexDirection: 'row',
    marginLeft: 20,
  },

  priceContainer: {
    flex: 1,
  },
  labelTotal: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
  },
  priceTotal: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
});
