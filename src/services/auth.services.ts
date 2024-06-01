import { authKey } from '@/constants/authKey';
import { axiosInstance } from '@/helpars/axios/axiosInstance';
import { jwtDecodedToken } from '@/utils/jwt';
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalstorage,
} from '@/utils/local-storage';

export const storeUserInfo = async ({
  accessToken,
}: {
  accessToken: string;
}) => {
  return setToLocalstorage(authKey, accessToken);
};

//authkey is "accessToken"
export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(authKey);
  if (authToken) {
    return !!authToken; //for boolean value( true )  return  >> using !! duble dagation
  }
};

export const removeFromUser = () => {
  return removeFromLocalStorage(authKey);
};

export const getUserInfo = () => {
  const authToken = getFromLocalStorage(authKey);
  if (authToken) {
    const decoded: any = jwtDecodedToken(authToken);

    return {
      ...decoded,
      role: decoded?.role?.toLowerCase(),
    };
  } else {
    return '';
  }
};

export const getNewAccessToken = async () => {
  return await axiosInstance({
    url: `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/refresh-token`,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  });
};
