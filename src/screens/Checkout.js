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

const Checkout = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
      }}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
            <Icon
              name="angle-double-left"
              size={50}
              color="black"
              // onPress={handlePress}
            />
          </TouchableOpacity>
          <View>
            <View style={styles.container}>
              <Text style={styles.title}>Checkout</Text>
            </View>
          </View>
        </View>
        <View style={{marginTop: 30}}>
          <TextInput label="Nama" />
          <Gap height={24} />

          <TextInput label="No Hp" />
          <Gap height={24} />

          <TextInput label="Alamat" />
        </View>
        <View style={{marginTop: 30}}>
          <TouchableOpacity onPress={() => navigation.navigate('Shipping')}>
            <View style={styles.buttonCart}>
              <Text style={styles.textCart}>Confirm</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
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
    marginRight: 20,
  },
  textInput: {
    color: 'grey',
    // marginBottom: 20,
  },
  buttonCart: {
    backgroundColor: 'skyblue',
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
