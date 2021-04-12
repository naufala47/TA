import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {Text} from 'react-native-paper';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import {theme} from '../core/theme';
import {emailValidator} from '../helpers/emailValidator';
import {passwordValidator} from '../helpers/passwordValidator';
import {nameValidator} from '../helpers/nameValidator';
import Gap from '../components/Gap';

const RegisterScreen = ({navigation}) => {
  const [name, setName] = useState({value: '', error: ''});
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.page}>
        <Header
          title="SignUp"
          subTitle="Register and eat"
          onBack={() => navigation.goBack()}
        />
        <View style={styles.container}>
          <View style={styles.photo}>
            <View style={styles.borderPoto}>
              <View style={styles.potoContainer}>
                <Text style={styles.addPhoto}>Add Photo</Text>
              </View>
            </View>
          </View>
          <TextInput placeholder="Name" label="Name: " />
          <Gap height={16} />
          <TextInput placeholder="Email" label="Email: " />
          <Gap height={24} />
          <TextInput placeholder="Password" label="Password" />
          <Gap height={24} />
          <TextInput placeholder="Re-Password" label="Re-password" />
          <Gap height={20} />
          <Button
            text="Continue"
            onPress={() => navigation.navigate('Dashboard')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
  },
  addPhoto: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8092a3',
    textAlign: 'center',
  },
  potoContainer: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: '#F0f0f0',
    padding: 24,
  },
  borderPoto: {
    borderWidth: 1,
    borderRadius: 110,
    borderColor: '#8d92a3',
    width: 110,
    height: 110,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: {
    alignItems: 'center',
    marginTop: 26,
    marginBottom: 26,
  },
});

export default RegisterScreen;
