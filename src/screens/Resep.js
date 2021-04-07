import React, {useEffect, useState} from 'react';
import {Image, FlatList, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import axios from 'axios';

const Resep = ({navigation, route}) => {
  const [datas, setDatas] = useState([]);
  const pathImage = {
    path: datas.bahanId,
  };
  const url = 'https://admin-appv1.herokuapp.com/api/v1/item/';

  useEffect(() => {
    getAPI();
    console.log(getAPI());
  }, []);

  const getAPI = () => {
    console.log(route.params.id);
    let press = url + route.params.id;
    console.log(press);
    axios
      .get(press)
      .then(function (response) {
        console.log(response.data.item);
        setDatas(response.data.item);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.h2top}>{datas.name}</Text>
      <View>
        <Text style={styles.h2}>Harga :</Text>
        <Text
          style={{
            marginLeft: 30,
            textAlign: 'justify',
          }}>
          {datas.price}
        </Text>
        <Text style={styles.h2}>Kota :</Text>
        <Text
          style={{
            marginLeft: 30,
            textAlign: 'justify',
          }}>
          {datas.city}
        </Text>
        <Text style={styles.h2}>Deskripsi :</Text>
        <Text
          style={{
            marginLeft: 30,
            textAlign: 'justify',
          }}>
          {datas.description}
        </Text>
        <Text style={styles.h2}>Instruksi :</Text>
        <FlatList
          data={datas.stepId}
          renderItem={({item}) => (
            <Text style={{marginLeft: 30, textAlign: 'justify'}}>
              {item.instructions}{' '}
            </Text>
          )}
        />
        <Text style={styles.h2}>Bahan :</Text>
        <FlatList
          data={datas.bahanId}
          renderItem={({item}) => (
            <Text style={{marginLeft: 30, textAlign: 'justify'}}>
              {item.name}
            </Text>
          )}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 30,
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
    </View>
  );
};

export default Resep;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
  },
  h2: {
    color: '#43a845',
    fontSize: 20,
    marginLeft: 30,
    fontWeight: 'bold',
  },
  h2top: {
    color: '#0688c9',
    textAlign: 'center',
    fontSize: 30,
    marginLeft: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textInput: {
    height: 48,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
  },
  buttonTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonStyle1: {
    backgroundColor: '#00345e',
    width: 100,
    height: 48,
    marginLeft: 30,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle2: {
    backgroundColor: '#00345e',
    width: 180,
    height: 48,
    marginLeft: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: 300,
    height: 200,
    marginLeft: 30,
    marginRight: 25,
    marginTop: 10,
    marginBottom: 10,
  },
});
