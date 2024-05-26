import { authKey } from '@/constants/authKey';
import { jwtDecodedToken } from '@/utils/jwt';
import { getFromLocalStorage, setToLocalstorage } from '@/utils/local-storage';

export const storeUserInfo = async ({
  accessToken,
}: {
  accessToken: string;
}) => {
  return setToLocalstorage(authKey, accessToken);
};

export const getUserInfo = () => {
  const authToken = getFromLocalStorage(authKey);
  if (authToken) {
    const decoded: any = jwtDecodedToken(authToken);

    return {
      ...decoded,
      role: decoded?.role?.toLowerCase(),
    };
  }
};
