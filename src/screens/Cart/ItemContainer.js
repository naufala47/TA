import React, { Component } from 'react';
import { View } from 'react-native';

class ItemsContainer extends Component {
  render() {
    return (
      <View style={styles.containterStyle}>
          <Text>Test</Text>
      </View>
    );
  }
}

const styles = {
  containterStyle: {
    flex: 4,
    backgroundColor: '#DCDCDC'
  }
};

export default ItemsContainer;

