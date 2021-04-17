import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { block } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SliderBox } from 'react-native-image-slider-box';
import CardSilder from 'react-native-cards-slider';
import { render } from 'react-dom';
import Gap from '../components/Gap';
import FoodCard from '../components/FoodCard';
import axios from 'axios';

import { FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4 } from '../assets';
import HomeTabSection from '../components/HomeTabSection';

const url = 'https://admin-appv1.herokuapp.com/api/v1/items/';
const Dashboard = ({ navigation }) => {
  const [datas, setDatas] = useState([]);
  const [country, setCountry] = useState('pilih');
  const [images, setImages] = useState([
    'https://blogpictures.99.co/makanan-khas-indonesia-header.png',
    'https://cdn.popbela.com/content-images/post/20200417/2f4801387f2c957d598dfe8dd74b11bf_750x500.jpg',
    'https://img.okezone.com/content/2019/07/04/298/2074589/4-makanan-khas-indonesia-yang-paling-diburu-di-luar-negeri-gOjMyZizaf.jpg',
    'https://cdn.idntimes.com/content-images/post/20170721/resep-rawon-98d900d3e27085f192f57e3167b4d834_600x400.jpeg', // url gambar
  ]);

  // this.state = {
  //   country: 'pilih',
  //   images: [
  //     'https://blogpictures.99.co/makanan-khas-indonesia-header.png',
  //     'https://cdn.popbela.com/content-images/post/20200417/2f4801387f2c957d598dfe8dd74b11bf_750x500.jpg',
  //     'https://img.okezone.com/content/2019/07/04/298/2074589/4-makanan-khas-indonesia-yang-paling-diburu-di-luar-negeri-gOjMyZizaf.jpg',
  //     'https://cdn.idntimes.com/content-images/post/20170721/resep-rawon-98d900d3e27085f192f57e3167b4d834_600x400.jpeg', // url gambar
  //   ],
  // };

  useEffect(() => {
    getAPI();
  }, []);

  const getAPI = () => {
    axios
      .get(url)
      .then(function (response) {
        console.log(response.data.item);
        setDatas(response.data.item);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <ScrollView style={styles.container}>
      <View
        style={{ backgroundColor: 'orange', height: 250, borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }}>
        <View
          style={{
            marginTop: 25,
            marginHorizontal: 30,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Icon name="bars" size={25} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <Icon name="cart-plus" size={25} color="white" />
          </TouchableOpacity>
        </View>
        <Text style={styles.h1}>MENU</Text>
        <Text style={{ marginLeft: 30, color: 'white', fontWeight: 'bold' }}>Dashboard</Text>
        <View>
          {/* text input search */}
          {/* <TextInput style={styles.textInput} placeholder="Search" /> */}

          {/* dropdown  */}
          {/* <DropDownPicker
          //item dropdown
          items={[
            {label: 'Pilih', value: 'pilih', hidden: true},
            {label: 'Asia', value: 'asia'},
            {label: 'Europa', value: 'europa'},
            {label: 'Timur', value: 'timur'},
          ]}
          defaultValue={country}
          containerStyle={{height: 70}}
          style={styles.dropdown}
          itemStyle={{
            justifyContent: 'flex-start',
          }}
          dropDownStyle={{backgroundColor: '#fafafa'}}
          onChangeItem={item => setCountry(item.value)}
        /> */}
          {/* dropdown  */}
        </View>
        {/* image slider */}
        <SliderBox
          style={{
            height: 200,
            marginLeft: 30,
            marginRight: 25,
            marginTop: 10,
            marginBottom: 10,
            borderRadius: 30
          }}
          images={images}
          autoplay
          circleLoop
        />
      </View>
      <View style={{ marginTop: 120 }}>
        <Text style={{ marginLeft: 30, color: 'black', fontWeight: 'bold' }}>Temukan menu yang cocok untukmu</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.foodCardContainer}>
            <Gap width={24} />
            {/* <FoodCard image={FoodDummy1} />
            <FoodCard image={FoodDummy3} />
            <FoodCard image={FoodDummy2} />
            <FoodCard image={FoodDummy4} /> */}
            {datas.map(data => {
              return (
                <FoodCard
                  key={data.id}
                  image={{
                    uri: data.imageId[0]
                      ? `https://admin-appv1.herokuapp.com/${data.imageId[0].imageUrl}`
                      : '',
                  }}
                  name={data.name}
                  category={data.categoryId.name}
                  onPress={() => navigation.navigate('DetailMenu', data)}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
      <View style={styles.tabContainer}>{/* <HomeTabSection /> */}</View>
    </ScrollView>
  );
};
export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  dropdown: {
    height: 48,
    width: 130,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    marginRight: 30,
    paddingLeft: 20,
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
  tabContainer: {
    flex: 1,
  },
});
