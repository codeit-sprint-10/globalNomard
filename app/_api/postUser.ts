import { User } from '@/_hooks/useUserinfo';
import fetcher from './api';

interface Props {
  email: string;
  password: string;
}

interface UserRes {
  accessToken: string;
  refreshToken: string;
  user: User;
}

export const postUser = async ({ email, password }: Props) => {
  const body = {
    email,
    password,
  };

  const { data } = await fetcher<UserRes, Props>({
    url: '/auth/login',
    method: 'POST',
    data: body,
  });
  return data;
};
