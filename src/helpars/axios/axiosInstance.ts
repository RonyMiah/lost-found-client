import { authKey } from '@/constants/authKey';
import { getNewAccessToken } from '@/services/auth.services';
import { IGenericErrorResponse, IMeta } from '@/types';
import { getFromLocalStorage, setToLocalstorage } from '@/utils/local-storage';
import axios from 'axios';

const axiosInstance = axios.create();

axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';
axiosInstance.defaults.headers['Accept'] = 'application/json';
axiosInstance.defaults.timeout = 60000;

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const accessToken = getFromLocalStorage(authKey);
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  //@ts-ignore
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    const responseObject: { data: any; meta: IMeta } = {
      data: response?.data?.data,
      meta: response?.data?.meta,
    };

    return responseObject;
  },
  async function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    const config = error?.config;
    console.log(config);
    if (error?.response?.status === 500 && !config.sent) {
      config.sent = true;
      const response = await getNewAccessToken();
      // console.log(response);
      const accessToken = response?.data?.accessToken;
      // console.log(accessToken);
      config.headers['Authorization'] = accessToken;
      setToLocalstorage(authKey, accessToken);
      return axiosInstance(config);
    } else {
      const responseObject: IGenericErrorResponse = {
        statusCode: error?.response?.data?.statusCode || 500,
        message: error?.response?.data?.message || 'Something went Wrong !',
        errorMessage: error?.response?.data?.message,
      };
      return responseObject;
    }
  }
);

export { axiosInstance };
