import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Button = ({text, color = '#ffc700', btnColor = '#020202', onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container(color)}>
        <Text style={styles.text(btnColor)}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: color => ({
    backgroundColor: color,
    padding: 12,
    borderRadius: 8,
  }),
  text: btnColor => ({
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: btnColor,
    textAlign: 'center',
  }),
});
