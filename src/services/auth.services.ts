import { authKey } from "@/constants/authKey";
import { setToLocalstorage } from "@/utils/local-storage";

export const storeUserInfo = async ({
  accessToken,
}: {
  accessToken: string;
}) => {
    return setToLocalstorage(authKey, accessToken);
};
