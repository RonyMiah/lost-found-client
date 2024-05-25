import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { deleteCookie } from './deleteCookie';
import { authKey } from '@/constants/authKey';

export const logoutUser = (router: AppRouterInstance) => {
  localStorage.removeItem(authKey);
  deleteCookie([authKey, 'refreshToken']);
  router.push('/');
  router.refresh();
};
