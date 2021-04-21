import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import StackMenu from './StackMenu';
import Profile from './Profile';
import Order from './OrderScreen';
import OrderDetail from './OrderDetail';

const Drawer = createDrawerNavigator();

const DrawerMenu = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={StackMenu} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Order" component={Order} />
    </Drawer.Navigator>
  );
};

export default DrawerMenu;
