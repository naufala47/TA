import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  Dashboard,
  DetailMenu,
  Cart,
  Checkout,
  Payment,
  EditProfile,
  Shipping,
  Resep,
  DetailResep,
  Success,
  SignUpAddress,
  SuccessSignup,
  OrderSummary,
  Profile,
  OrderDetail,
} from '../screens';

const Stack = createStackNavigator();

const StackMenu = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="LoginScreen">
      <Stack.Screen name="StartScreen" component={StartScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="SignUpAddress" component={SignUpAddress} />
      <Stack.Screen name="SuccessSignup" component={SuccessSignup} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="DetailMenu" component={DetailMenu} />
      {/* <Stack.Screen name="Cart" component={Cart} /> */}
      <Stack.Screen name="OrderSummary" component={OrderSummary} />
      <Stack.Screen name="OrderDetail" component={OrderDetail} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Success" component={Success} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="Resep" component={Resep} />
      {/* <Stack.Screen name="DetailResep" component={DetailResep} /> */}

      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
      <Stack.Screen name="Shipping" component={Shipping} />
    </Stack.Navigator>
  );
};

export default StackMenu;
