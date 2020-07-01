const axios = require('axios');

const commonAxios = axios.create({
  baseURL: 'http://192.168.137.1:8080/',
  timeout: 3000,
});

// commonAxios.interceptors.request.use(function (config) {
//   const token = '',
//   if (token) {
//     config.headers.Authorization = 'Bearer ' + token;
//   }
//   return config;
// });

commonAxios.interceptors.response.use(
  function(response) {
    const {data} = response;
    if (data.code !== 0) {
      const error = new Error(data.message || 'Unknown error');
      error.data = data.data;
      throw error;
    }
    console.log('Api Util: ', data);
    return data.data;
    // return sleep(1000, data.data)
  },
  function(error) {
    return Promise.reject(error);
  },
);

export {commonAxios};
