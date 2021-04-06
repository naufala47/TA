import React from 'react'
import { Provider } from 'react-native-paper'
import { theme } from './src/core/theme'
import {
  DrawerMenu,
  StackMenu
} from './src/screens'
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <DrawerMenu />
      </NavigationContainer>
    </Provider>
  )
}

export default App
