import { POST } from './api';

interface Props {
  email: string;
  password: string;
}

export const postUser = async ({ email, password }: Props) => {
  const body = {
    email,
    password,
  };
  console.log(body, 'postUser 테스트');

  const { data } = await POST(`/auth/login`, body);
  return data;
};
