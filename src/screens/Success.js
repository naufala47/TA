import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import SuccessImg from '../Image/success1.png';

const Success = ({navigation}) => {
  return (
    <View style={styles.image}>
      <Image source={SuccessImg} style={styles.iconContainer} />
      <Text style={styles.textlogin}>Berhasil Checkout</Text>
      <View style={styles.buttonSection}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('Dashboard')}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 'bold',
              color: 'white',
              textTransform: 'uppercase',
              textAlign: 'center',
            }}>
            Done
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Success;

const styles = StyleSheet.create({
  textStyle: {
    marginTop: 50,
    margin: 20,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: 'skyblue',
    padding: 10,
    borderRadius: 20,
  },
  textlogin: {
    // margin: 15,

    paddingLeft: 30,
    marginBottom: 10,
    fontSize: 20,
    marginTop: 20,
    marginLeft: 65,
  },
  textGeo: {
    paddingLeft: 30,
    fontSize: 15,
  },
  textTime: {
    paddingLeft: 30,
    fontSize: 15,
  },

  iconContainer: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
  },
  image: {
    padding: 20,
    marginTop: 50,
    marginBottom: 10,
    flex: 1,
  },
  buttonSection: {
    width: '100%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 70,
    marginBottom: 25,
    marginTop: 20,
  },
});
