import Axios from 'axios';

// import AppConstants from '../constants/AppConstants';

function request(method, api, data) {
  const url = api.substr(0, 4) === 'http' ? api : `/api${api}`;
  return Axios[method](url, data);
}

Axios.interceptors.response.use(
  (response) => {
    if (response.status === 403 || response.status === 401) {
      request('post', '/user/logout');
      // eslint-disable-next-line no-restricted-globals
      location.href = '/';
      return null;
    }
    return response;
  },
  error => Promise.reject(error),
);

export default request;
