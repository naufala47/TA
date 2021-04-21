import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SliderBox } from 'react-native-image-slider-box';

import Gap from '../components/Gap';
import FoodMenu from '../components/FoodMenu';
import FoodCard from '../components/FoodCard';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import { FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4 } from '../assets';
import HomeTabSection from '../components/HomeTabSection';
import { getFoodData } from '../redux/action';
import ProfileTabSection from '../components/ProfileTabSection';

// const url = 'https://admin-appv1.herokuapp.com/api/v1/items/';
const Dashboard = ({ navigation }) => {
  const dispatch = useDispatch();
  const { food } = useSelector(state => state.homeReducer);
  const [images, setImages] = useState([
    'https://blogpictures.99.co/makanan-khas-indonesia-header.png',
    'https://cdn.popbela.com/content-images/post/20200417/2f4801387f2c957d598dfe8dd74b11bf_750x500.jpg',
    'https://img.okezone.com/content/2019/07/04/298/2074589/4-makanan-khas-indonesia-yang-paling-diburu-di-luar-negeri-gOjMyZizaf.jpg',
    'https://cdn.idntimes.com/content-images/post/20170721/resep-rawon-98d900d3e27085f192f57e3167b4d834_600x400.jpeg', // url gambar
  ]);

  useEffect(() => {
    dispatch(getFoodData());
  }, []);

  return (
    // <ScrollView>
    //   <View style={styles.page}>
    //     {/* <HomeProfile /> */}
    //     <View>
    //       <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    //         <View style={styles.foodCardContainer}>
    //           <Gap width={24} />
    //           {food.map(itemFood => {
    //             return (
    //               <FoodCard
    //                 key={itemFood.id}
    //                 name={itemFood.name}
    //                 image={{uri: itemFood.picturePath}}
    //                 rating={itemFood.rate}
    //                 onPress={() => navigation.navigate('FoodDetail', itemFood)}
    //               />
    //             );
    //           })}
    //         </View>
    //       </ScrollView>
    //     </View>
    //     <View style={styles.tabContainer}>
    //       <HomeTabSection />
    //     </View>
    //   </View>
    // </ScrollView>
    <ScrollView>
      <View
        style={{
          backgroundColor: 'orange',
          height: 250,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
        }}>
        <View
          style={{
            marginTop: 30,
            marginHorizontal: 30,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Icon name="bars" size={25} color="white" />
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <Icon name="cart-plus" size={25} color="white" />
          </TouchableOpacity> */}
        </View>
        <SliderBox
          style={{
            height: 200,
            marginLeft: 30,
            marginRight: 25,
            marginTop: 30,
            marginBottom: 10,
            borderRadius: 30,
          }}
          images={images}
          autoplay
          circleLoop
        />
      </View>
      <View style={{ marginTop: 50 }}>
        <Text style={{ marginLeft: 30, color: 'black', fontWeight: 'bold' }}>
          Temukan menu yang cocok untukmu
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.foodCardContainer}>
            <Gap width={24} />

            {food.map(itemFood => {
              return (
                <FoodCard
                  key={itemFood.id}
                  name={itemFood.name}
                  rating={itemFood.rate}
                  image={{ uri: itemFood.picturePath }}
                  onPress={() => navigation.navigate('DetailMenu', itemFood)}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
      <View style={{ marginTop: 15 }}>
        <Text style={{ marginLeft: 30, color: 'black', fontWeight: 'bold' }}>
          Temukan lebih banyak lagi
        </Text>
        <ScrollView>
          <View style={styles.foodCardContainer1}>
            <Gap width={24} />

            {food.map(itemFood => {
              return (
                <FoodMenu
                  key={itemFood.id}
                  name={itemFood.name}
                  rating={itemFood.rate}
                  types={itemFood.types}
                  image={{ uri: itemFood.picturePath }}
                  onPress={() => navigation.navigate('DetailMenu', itemFood)}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
      {/* <View style={styles.tabContainer}>
        <HomeTabSection />
      </View> */}
    </ScrollView>
  );
};
export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: { flex: 1 },
  h1: {
    color: 'white',
    marginLeft: 28,
    fontSize: 50,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  buttonTitle: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  buttonStyle: {
    backgroundColor: '#00345e',
    width: 100,
    height: 48,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    width: 350,
    borderRadius: 5,
    backgroundColor: 'white',
    marginLeft: 20,
    marginRight: 20,
    marginVertical: 20,
    paddingLeft: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  foodCardContainer: {
    flexDirection: 'row',
    marginVertical: 12,
  },
  foodCardContainer1: {
    marginVertical: 12,
  },
  tabContainer: {
    flex: 1,
  },
});
