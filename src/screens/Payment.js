import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {RadioButton} from 'react-native-paper';
const methods = [
  {
    name: 'Cash on Delivery',
    value: 1,
  },
  {
    name: 'Bank Transfer',
    value: 2,
  },
  {
    name: 'Card Payment',
    value: 3,
  },
];

const Payment = ({navigation}) => {
  const [selected, setSelected] = useState();
  const [pay, setPay] = useState('');
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
      }}>
      <ScrollView>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Pilih Metode Pembayaran</Text>
        </View>
        <View style={{marginTop: 20, marginBottom: 100}}>
          {methods.map((method, i) => {
            return (
              <RadioButton.Group
                key={i}
                value={selected}
                onValueChange={() => setSelected(method.value)}>
                <RadioButton.Item label={method.name} value={method.value} />
              </RadioButton.Group>
            );
          })}
          {selected == 3 ? (
            <DropDownPicker
              //item dropdown
              items={[
                {label: 'Pilih', value: 'pilih', hidden: true},
                {label: 'Wallet', value: 'wallet'},
                {label: 'Visa', value: 'visa'},
                {label: 'Master Card', value: 'mastercard'},
              ]}
              defaultValue={pay}
              containerStyle={{height: 70}}
              style={styles.dropdown}
              itemStyle={{
                justifyContent: 'flex-start',
              }}
              dropDownStyle={{backgroundColor: '#fafafa'}}
              onChangeItem={item => setPay(item.value)}
            />
          ) : null}
        </View>
        <View style={{marginTop: -50}}>
          <TouchableOpacity onPress={() => navigation.navigate('Success')}>
            <View style={styles.buttonCart}>
              <Text style={styles.textCart}>Confirm</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  titleWrapper: {
    marginTop: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dropdown: {
    height: '100%',
    width: '100%',
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    marginRight: 30,
    paddingLeft: 16,
  },
  buttonCart: {
    backgroundColor: '#ffc93c',
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
