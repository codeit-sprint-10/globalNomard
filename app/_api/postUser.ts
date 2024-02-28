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

  console.log(body, 'postUser body 테스트');

  const { data } = await fetcher<UserRes, Props>({
    url: '/auth/login',
    method: 'POST',
    data: body,
  });
  console.log(data, 'postUser data 테스트');
  return data;
};
