import axios from 'axios';
import {API_HOST} from '../../config';
import {showMessage, storeData} from '../../utils';
import {setLoading} from './global';

export const signInAction = (form, navigation) => dispatch => {
  dispatch(setLoading(true));
  axios
    .post(`${API_HOST.url}/login`, form)
    .then(res => {
      const token = `Bearer ${res.data.token}`;
      dispatch(setLoading(false));
      storeData('token', {value: token});

      navigation.reset({index: 0, routes: [{name: 'Dashboard'}]});
    })
    .catch(err => {
      dispatch(setLoading(false));
      showMessage(err?.response?.data?.data?.message);
    });
};
