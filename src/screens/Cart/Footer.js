import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import TotalComp from './TotalComponent';

const Footer = ({ navigation, onPress }) => {
  const {
    containerStyle,
    buttonContainerStyle,
    closeButtonStyle,
    checkoutButtonStyle,
    btnCheckout,
  } = styles;
  return (
    <View style={containerStyle}>
      <TotalComp />
      <View style={buttonContainerStyle}>
        <TouchableOpacity onPress={onPress} style={styles.btnCheckout}>
          <View style={checkoutButtonStyle}>
            <Text style={{ color: '#fff', fontSize: 16 }}>Go to checkout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  containerStyle: {
    flex: 1,
    paddingRight: 15,
    paddingLeft: 15,
    borderTopWidth: 1,
    borderColor: '#e2e2e2',
  },
  buttonContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
  },
  checkoutButtonStyle: {
    backgroundColor: '#f39c12',
    padding: 10,
    paddingRight: 60,
    paddingLeft: 60,
    borderRadius: 3,
  },
  btnCheckout: {
    marginLeft: 150,
  },
};

export default Footer;
