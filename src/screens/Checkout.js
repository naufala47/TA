import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import TextInput from '../components/TextInput';
import Icon from 'react-native-vector-icons/FontAwesome';
import Gap from '../components/Gap';
import Shipping from './Shipping';
import Payment from './Payment';

const Checkout = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <View style={{ backgroundColor: 'orange', flex: 1, padding: 20, }}>
        <View>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
              <Icon
                name="angle-double-left"
                size={30}
                color="white"
              // onPress={handlePress}
              />
            </TouchableOpacity>
            <View>
              <View style={styles.container}>
                <Text style={styles.title}>Order Confirm</Text>
              </View>
            </View>
          </View>
          <View style={{ backgroundColor: 'white', borderRadius: 30, marginBottom: 20, marginTop: 30 }}>
            <View style={{ marginTop: 30, marginLeft: 30, marginRight: 30, marginBottom: 30 }}>
              <TextInput label="Nama" placeholder="Masukkan Nama" />
              <Gap height={24} />

              <TextInput label="No Hp" placeholder="Masukkan No.Hp" />
              <Gap height={24} />

              <TextInput label="Alamat" placeholder="Masukkan Alamat" />
            </View>
          </View>
          <View style={{ backgroundColor: 'white', borderRadius: 30, marginBottom: 20 }}>
            <Shipping />
          </View>
          <View style={{ backgroundColor: 'white', borderRadius: 30 }}>
            <Payment />
          </View>
        </View>
      </View>
      <View style={{ marginTop: 20, marginBottom: 15, elevation: 2 }}>
        <TouchableOpacity onPress={() => navigation.navigate('Success')}>
          <View style={styles.buttonCart}>
            <Text style={styles.textCart}>Pesan</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  container: {
    width: '90%',
    marginLeft: 80,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginRight: 20,
  },
  textInput: {
    color: 'grey',
    // marginBottom: 20,
  },
  buttonCart: {
    backgroundColor: '#33cc33',
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCart: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
