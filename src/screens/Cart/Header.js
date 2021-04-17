import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FoodDummy2, IcBackWhite } from '../../assets';

const Header = ({ navigation, onPress }) => {
  return (
    <View style={styles.headerStyle}>
      <TouchableOpacity onPress={onPress}>
        {/* <Icon
          name="angle-double-left"
          size={30}
          color="black"
        // onPress={handlePress}
        /> */}
        {/* <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('Dashboard')}> */}
        <IcBackWhite />
        {/* </TouchableOpacity> */}
      </TouchableOpacity>
      <Text style={{ fontSize: 20, color: "white", fontWeight: 'bold' }}>My Cart</Text>
      <Text></Text>
    </View>
  );
};

const styles = {
  headerStyle: {
    backgroundColor: 'orange',
    // flex: 0.4,
    elevation: 2,
    // marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    height: 75,
    paddingRight: 15,
    borderBottomWidth: 1,
    borderColor: '#e2e2e2',
  },
};

export default Header;
