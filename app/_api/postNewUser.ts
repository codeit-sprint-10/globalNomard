import fetcher from './api';

interface Props {
  email: string;
  nickname: string;
  password: string;
}

// export const postNewUser = async ({ email, nickname, password }: Props) => {
//   const body = {
//     email,
//     nickname,
//     password,
//   };
//   console.log(body);

//   const { data } = await POST(`/users`, body);
//   return data;
// };

export const postNewUser = async ({ email, nickname, password }: Props) => {
  const body = {
    email,
    nickname,
    password,
  };

  const { data } = await fetcher({ url: '/users', method: 'POST', data: body });
  return data;
};
