import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const FoodCard = ({image, name, category, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.text}>{name}</Text>
          <Text style={styles.text}>{category}</Text>

          {/* <Rating /> */}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  container: {
    width: 200,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 7},
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
  content: {padding: 12},
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
    width: 200,
    height: 140,
    resizeMode: 'cover',
  },
});
