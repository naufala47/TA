import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Logo} from '../assets';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('LoginScreen');
    }, 2002);
  }, []);

  return (
    <View style={styles.container}>
      <Logo />
      <View style={{height: 38}} />
      <Text
        style={{fontSize: 32, color: '#020202', fontFamily: 'Poppins-Medium'}}>
        Lets Cook
      </Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffc700',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
