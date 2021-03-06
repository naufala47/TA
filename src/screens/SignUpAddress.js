import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {useForm} from '../utils';
import Gap from '../components/Gap';
import Header from '../components/Header/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import {useDispatch, useSelector} from 'react-redux';
import {setLoading, signUpAction} from '../redux/action';
const SignUpAddress = ({navigation}) => {
  const [form, setForm] = useForm({
    phoneNumber: '',
    address: '',
    houseNumber: '',
    city: '',
  });
  const dispatch = useDispatch();
  const {registerReducer, photoReducer} = useSelector(state => state);

  const onSubmit = () => {
    console.log('INI DATA', data);

    const data = {
      ...form,
      ...registerReducer,
    };
    console.log('INI DATA', data);
    dispatch(setLoading(true));
    dispatch(signUpAction(data, photoReducer, navigation));
    console.log('INI DATA', data);
  };

  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.page}>
        <Header
          title="Address"
          subTitle="Make sure it’s valid"
          onBack={() => navigation.goBack()}
        />
        <View style={styles.container}>
          <TextInput
            label="Phone No."
            placeholder="Type your phone number"
            value={form.phoneNumber}
            onChangeText={value => setForm('phoneNumber', value)}
          />
          <Gap height={16} />
          <TextInput
            label="Address"
            placeholder="Type your address"
            value={form.address}
            onChangeText={value => setForm('address', value)}
          />
          <Gap height={16} />
          <TextInput
            label="House No."
            placeholder="Type your house number"
            value={form.houseNumber}
            onChangeText={value => setForm('houseNumber', value)}
          />
          <Gap height={16} />
          <TextInput
            label="City"
            placeholder="Type your city"
            value={form.city}
            onChangeText={value => setForm('city', value)}
          />
          <Gap height={24} />
          <Button text="Sign Up Now" onPress={onSubmit} />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpAddress;

const styles = StyleSheet.create({
  scroll: {flexGrow: 1},
  page: {flex: 1},
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
});
