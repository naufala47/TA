import {combineReducers} from 'redux';
import {registerReducer, photoReducer} from './auth';
import {globalReducer} from './global';
import {homeReducer} from './home';
import {orderReducer} from './order';
import cartItems from './cartItems';

const reducer = combineReducers({
  registerReducer,
  globalReducer,
  photoReducer,
  cartItems,
  homeReducer,
  orderReducer,
});

export default reducer;
