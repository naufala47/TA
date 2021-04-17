import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {FoodDummy2, IcBackWhite} from '../assets';

import Button from '../components/Button';

const DetailMenu = ({navigation, route}) => {
  //   const [totalItem, setTotalItem] = useState(1);
    const {
      id,
      name,
      bahanId,
      stepId,
      imageId,
      price,
      city,
      description,
    } = route.params;

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

  return (
    <ScrollView style={styles.container}>
      {/* <View>
        <Text style={styles.h2top}>Detail Makanan</Text>

        <Image
          style={styles.imageStyle}
          source={{
            uri: 'https://blogpictures.99.co/makanan-khas-indonesia-header.png',
          }}
        />
      </View>
      <View>
        <Text style={styles.h2}>Penjelasan :</Text>

        <Text
          style={{
            marginLeft: 30,
            marginRight: 25,
          }}>
          Food is the necessity of life. It provides nutrition, sustenance and
          growth to human body. Food can be classified into cereals, pulses,
          nuts and oilseeds, vegetable, fruits, milk and milk products and flesh
          food. Food comprises protein, facts, carbohydrates, vitamins, minerals
          salts and water.{'\n'}
        </Text>
      </View>
      <View style={{marginBottom: 15}}>
        <Text style={styles.h2}>Bahan - bahan :</Text>
        <TextInput
          style={styles.textInput}
          editable={false}
          placeholder="Bahan 1"
        />
        <TextInput
          style={styles.textInput}
          editable={false}
          placeholder="Bahan 2"
        />
        <Text style={styles.h2}>Resep :</Text>
        <TextInput
          style={styles.textInput}
          editable={false}
          placeholder="Bahan 1"
        />
        <TextInput
          style={styles.textInput}
          editable={false}
          placeholder="Bahan 2"
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Cart')}
          style={styles.buttonStyle1}>
          <Text style={styles.buttonTitle}>Pesan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle2}>
          <Text style={styles.buttonTitle}>Tambah ke Cart</Text>
        </TouchableOpacity>
      </View>
      end button */}
      <View style={styles.page}>
        <ImageBackground
          source={{
            uri: imageId[0]
              ? `https://admin-appv1.herokuapp.com/${imageId[0].imageUrl}`
              : '',
          }}
          style={styles.cover}>
          <TouchableOpacity style={styles.back}>
            <IcBackWhite />
          </TouchableOpacity>
        </ImageBackground>
        <View style={styles.content}>
          <View style={styles.mainContent}>
            <View style={styles.productContainer}>
              <View>
                <Text style={styles.title}>{name}</Text>
                {/* <Rating /> */}
              </View>
              {/* <Counter /> */}
            </View>
            <Text style={styles.desc}>{description}</Text>
            <Text style={styles.label}>Ingredients</Text>
            {bahanId.map(bahan => {
              return <Text style={styles.desc}>{bahan.name}</Text>;
            })}
            <Text style={styles.label}>Instructions</Text>
            <Text style={styles.desc}>{stepId.name}</Text>
          </View>
          <View style={styles.footer}>
            <View style={styles.priceContainer}>
              <Text style={styles.labelTotal}>Total Price: {price}</Text>
              {/* <Text style={styles.priceTotal}>IDR 12.000</Text> */}
            </View>
            <View style={styles.button}>
              <Button text="Order Now"  />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailMenu;

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
