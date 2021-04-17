import React from 'react';

import {theme} from './src/core/theme';
import {DrawerMenu, StackMenu} from './src/screens';
import {NavigationContainer} from '@react-navigation/native';
import {Provider, useSelector} from 'react-redux';
import FlashMessage from 'react-native-flash-message';

import Loading from './src/components/Loading';
import store from './src/redux/store';

// const App = () => {
//   return (
//     <Provider theme={theme}>
//       <NavigationContainer>
//         <DrawerMenu />
//       </NavigationContainer>
//     </Provider>
//   )
// }
const MainApp = () => {
  const {isLoading} = useSelector(state => state.globalReducer);
  return (
    <NavigationContainer>
      <DrawerMenu />
      <FlashMessage position="top" />
      {isLoading && <Loading />}
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;
