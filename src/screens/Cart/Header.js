import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = ({navigation, onPress}) => {
  return (
    <View style={styles.headerStyle}>
      <TouchableOpacity onPress={onPress}>
        <Icon
          name="angle-double-left"
          size={50}
          color="black"
          // onPress={handlePress}
        />
      </TouchableOpacity>
      <Text style={{fontSize: 18}}>Shopping Cart</Text>
      <Text>Empty</Text>
    </View>
  );
};

const styles = {
  headerStyle: {
    // flex: 0.4,
    elevation: 2,
    // marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 1,
    borderColor: '#e2e2e2',
  },
};

export default Header;
