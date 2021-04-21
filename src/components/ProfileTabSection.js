import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import MenuItem from './MenuItem';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={styles.indicator}
    style={styles.tabBarStyle}
    tabStyle={styles.tabStyle}
    renderLabel={({route, focused}) => (
      <Text style={styles.tabText(focused)}>{route.title}</Text>
    )}
  />
);

const Account = ({navigation}) => {
  //   const navigation = useNavigation();
  const signOut = () => {
    AsyncStorage.multiRemove(['userProfile', 'token']).then(res => {
      console.log('userProfile', res);
      //   navigation.reset({index: 0, routes: [{name: 'RegisterScreen'}]});
      navigation.replace('LoginScreen');
    });
  };
  return (
    <View style={styles.containerAccount}>
      <MenuItem
        text="Edit Profile"
        onPress={() => navigation.navigate('EditProfile')}
      />
      <MenuItem text="Home Address" />
      <MenuItem text="Security" />
      <MenuItem text="Payments" />
      <MenuItem text="SignOut" onPress={signOut} />
    </View>
  );
};

const FoodMarket = () => {
  return (
    <View style={styles.containerFoodMarket}>
      <MenuItem text="Rate App" />
      <MenuItem text="Help Center" />
      <MenuItem text="Privacy & Policy" />
      <MenuItem text="Terms & Conditions" />
    </View>
  );
};

const initialLayout = {width: Dimensions.get('window').width};

const ProfileTabSection = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Account'},
    {key: '2', title: 'FoodMarket'},
  ]);

  const renderScene = SceneMap({
    1: Account,
    2: FoodMarket,
  });

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={styles.tabView}
    />
  );
};

export default ProfileTabSection;

const styles = StyleSheet.create({
  tabView: {backgroundColor: 'white'},
  indicator: {
    backgroundColor: '#020202',
    height: 3,
    width: '15%',
    marginLeft: '3%',
  },
  tabBarStyle: {
    backgroundColor: 'white',
    elevation: 0,
    shadowOpacity: 0,
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 1,
  },
  tabStyle: {width: 'auto'},
  tabText: focused => ({
    color: focused ? '#020202' : '#8D92A3',
  }),
  containerAccount: {paddingTop: 8, paddingHorizontal: 24},
  containerFoodMarket: {paddingTop: 8, paddingHorizontal: 24},
});
