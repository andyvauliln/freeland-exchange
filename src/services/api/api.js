import axios from 'axios';
import store from '@/store';
import {baseURL, timeout} from '@/config';


const instance = axios.create({
  baseURL,
  timeout,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use((config) => {
  const isLoggedIn = store.getters['membership/isLoggedIn'];
  const token = (isLoggedIn) ? store.state.membership.token : null;
  config.headers.Authorization = 'token ' + token;
  return config;
});

instance.interceptors.response.use((response) => {
  store.dispatch('membership/rememberLastAction');
  return response;
}, ({response}) => {
  const {status, config} = response;
  if (status === 401) {
    return new Promise((resolve, reject) => {
      store.dispatch('membership/tryReconnect', {response}).then((res) => {
        const token = store.state.membership.token;
        config.headers.Authorization = 'token ' + token;
        resolve(axios(config));
      });
    });
  } else {

  }
  return Promise.reject(response);
});

export default instance;
