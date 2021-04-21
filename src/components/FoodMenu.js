import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Rating from './Rating';

const FoodMenu = ({ image, name, types, onPress, rating }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
            <Text style={styles.text}>{name}</Text>
            <Image source={image} style={styles.image} />
          </View>
          <Rating number={rating} />
          <Text style={{ color: 'grey' }}>{types}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FoodMenu;

const styles = StyleSheet.create({
  container: {
    width: 300,
    backgroundColor: 'white',
    marginLeft: 30,
    marginBottom: 20,
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 14,
    overflow: 'hidden',
    marginRight: 24,
  },
  image: {
    width: 200,
    height: 140,
    resizeMode: 'cover',
  },
  content: { padding: 12 },
  text: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  starContainer: {
    flexDirection: 'row',
  },
  image: {
    width: 75,
    height: 54,
    resizeMode: 'cover',
  },
});
