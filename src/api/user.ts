import { USER_SERVICE_URL } from './constant';
import { get } from './index';

export interface IUser {
  _id: string;
  username: string;
  email: string;
  profilePictureUrl: string;
  createdAt: string;
  updatedAt: string;
}

export const getUsers = async () => {
  const res = await get(`${USER_SERVICE_URL}`);
  return res;
};
