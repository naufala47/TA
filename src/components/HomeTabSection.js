import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Dimensions,
} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {useDispatch, useSelector} from 'react-redux';
import {getFoodDataByTypes} from '../redux/action';
import {FoodDummy1, FoodDummy2} from '../assets';
import ItemListFood from '../components/ItemListFood';

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
  // <TabBar
  //   {...props}
  //   indicatorStyle={{
  //     backgroundColor: '#020202',
  //     height: 3,
  //     width: '15%',
  //     marginLeft: '3%',
  //   }}
  //   style={{
  //     backgroundColor: 'white',
  //     elevation: 0,
  //     shadowOpacity: 0,
  //     borderBottomColor: '#f2f2f2',
  //     borderBottomWidth: 1,
  //   }}
  //   tabStyle={{width: 'auto'}}
  //   renderLabel={({route, focused, color}) => (
  //     <Text
  //       style={{
  //         // fontFamily: 'Poppins-Medium',
  //         color: focused ? '#020202' : '#8d92a3',
  //       }}>
  //       {route.title}
  //     </Text>
  //   )}
  // />
);

const NewTaste = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {newTaste} = useSelector(state => state.homeReducer);

  useEffect(() => {
    dispatch(getFoodDataByTypes('new_food'));
  }, []);
  return (
    <View style={styles.containerNewTaste}>
      {newTaste.map(item => {
        return (
          <ItemListFood
            key={item.id}
            type="product"
            name={item.name}
            price={item.price}
            rating={item.rate}
            image={{uri: item.picturePath}}
            onPress={() => navigation.navigate('DetailMenu', item)}
          />
        );
      })}
      {/* <ItemListFood
        type="product"
        name="Sop iga"
        price="100000"
        rating={4}
        rating={3}
        image={FoodDummy2}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        type="product"
        name="Sop iga"
        price="100000"
        rating={4}
        rating={3}
        image={FoodDummy1}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        type="product"
        name="Sop iga"
        price="100000"
        rating={4}
        rating={3}
        image={FoodDummy1}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        type="product"
        name="Sop iga"
        price="100000"
        rating={4}
        rating={3}
        image={FoodDummy1}
        onPress={() => navigation.navigate('FoodDetail')}
      /> */}
    </View>
  );
};

const Popular = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {popular} = useSelector(state => state.homeReducer);

  useEffect(() => {
    dispatch(getFoodDataByTypes('popular'));
  }, []);

  return (
    <View style={styles.containerPopular}>
      {popular.map(item => {
        return (
          <ItemListFood
            key={item.id}
            type="product"
            name={item.name}
            price={item.price}
            rating={item.rate}
            image={{uri: item.picturePath}}
            onPress={() => navigation.navigate('DetailMenu', item)}
          />
        );
      })}
      {/* <ItemListFood
        type="product"
        name="Sop iga"
        price="100000"
        rating={4}
        rating={3}
        image={FoodDummy2}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        type="product"
        name="Sop iga"
        price="100000"
        rating={4}
        rating={3}
        image={FoodDummy1}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        type="product"
        name="Sop iga"
        price="100000"
        rating={4}
        rating={3}
        image={FoodDummy1}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        type="product"
        name="Sop iga"
        price="100000"
        rating={4}
        rating={3}
        image={FoodDummy1}
        onPress={() => navigation.navigate('FoodDetail')}
      /> */}
    </View>
  );
};

const Recommended = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {recommended} = useSelector(state => state.homeReducer);

  useEffect(() => {
    dispatch(getFoodDataByTypes('recommended'));
  }, []);
  return (
    <View style={styles.containerRecommended}>
      {recommended.map(item => {
        return (
          <ItemListFood
            key={item.id}
            type="product"
            name={item.name}
            price={item.price}
            rating={item.rate}
            image={{uri: item.picturePath}}
            onPress={() => navigation.navigate('FoodDetail', item)}
          />
        );
      })}
    </View>
    // <View style={styles.containerRecommended}>
    //   <Text>Hellow</Text>
    //   <ItemListFood
    //     type="product"
    //     name="Sop iga"
    //     price="100000"
    //     rating={4}
    //     rating={3}
    //     image={FoodDummy2}
    //     onPress={() => navigation.navigate('FoodDetail')}
    //   />
    //   <ItemListFood
    //     type="product"
    //     name="Sop iga"
    //     price="100000"
    //     rating={4}
    //     rating={3}
    //     image={FoodDummy1}
    //     onPress={() => navigation.navigate('FoodDetail')}
    //   />
    //   <ItemListFood
    //     type="product"
    //     name="Sop iga"
    //     price="100000"
    //     rating={4}
    //     rating={3}
    //     image={FoodDummy1}
    //     onPress={() => navigation.navigate('FoodDetail')}
    //   />
    //   <ItemListFood
    //     type="product"
    //     name="Sop iga"
    //     price="100000"
    //     rating={4}
    //     rating={3}
    //     image={FoodDummy1}
    //     onPress={() => navigation.navigate('FoodDetail')}
    //   />
    // </View>
  );
};
const initialLayout = {width: Dimensions.get('window').width};

const HomeTabSection = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'New Taste'},
    {key: '2', title: 'Popular'},
    {key: '3', title: 'Recommended'},
  ]);
  const renderScene = SceneMap({
    1: NewTaste,
    2: Popular,
    3: Recommended,
  });
  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={layout}
      style={styles.tabView}
    />
  );
};

export default HomeTabSection;

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
  containerNewTaste: {paddingTop: 8, paddingHorizontal: 24},
  containerPopular: {paddingTop: 8, paddingHorizontal: 24},
  containerRecommended: {paddingTop: 8, paddingHorizontal: 24},
});
// import * as React from 'react';
// import {View, useWindowDimensions, Text} from 'react-native';
// import {TabView, SceneMap} from 'react-native-tab-view';

// const FirstRoute = () => (
//   <View style={{flex: 1, backgroundColor: '#ff4081'}}>

//   </View>
// );

// const SecondRoute = () => (
//   <View style={{flex: 1, backgroundColor: '#673ab7'}}>
//     <Text>Test</Text>
//   </View>
// );

// const renderScene = SceneMap({
//   first: FirstRoute,
//   second: SecondRoute,
// });

// export default function HomeTabSection() {
//   const layout = useWindowDimensions();

//   const [index, setIndex] = React.useState(0);
//   const [routes] = React.useState([
//     {key: 'first', title: 'First'},
//     {key: 'second', title: 'Second'},
//   ]);

//   return (
//     <TabView
//       navigationState={{index, routes}}
//       renderScene={renderScene}
//       onIndexChange={setIndex}
//       initialLayout={{width: layout.width}}
//     />
//   );
// }
