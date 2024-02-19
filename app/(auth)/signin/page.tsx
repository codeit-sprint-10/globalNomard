/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { PlainButton } from '@/_components/Button/PlainButton/PlainButton';
import Input from '../../_components/input/Input';
import * as S from '@/(auth)/sign.style';
import { useForm } from 'react-hook-form';
import { postUser } from '@/_api/postUser';
import useSignin from '@/_hooks/useSignin';
import useAsync from '@/_hooks/useAsync';

function Signin() {
  const { control, handleSubmit } = useForm({ mode: 'onChange' });
  // const { execute } = useAsync(postUser);
  // postUser의 인수에 email, password를 넣어서 실행함
  // postUser는 /{teamId}/auth/login 경로로 POST함수를 통해 POST요청을 보냄
  // POST함수는 (url, body, token)로 이루어짐. body에는 Props가 들어감.
  // execute는 postUser함수를 실행함.
  const { email, password } = useSignin();

  // const Props = {
  //   email,
  //   password,
  // };

  const User = async (data: any) => {
    try {
      const { email, password } = data;

      const res = await postUser({ email, password });
      // res로 받아온 email, password를 zustand에 넣어야함.
      // 이걸 token으로도 받아와야함.
      console.log(res, 'zz');
    } catch (error) {
      console.log(error);
    }

    

  };

  const onSubmit = handleSubmit((data) => {
    User(data);
    // 폼을 제출하면 User의 data에 폼 데이터를 전달함.
    // data에는 폼의 데이터(email, password)가 들어있음.
    // User함수는 postUser함수를 비동기적으로 실행함.
  });

  return (
    <S.Wrapper>
      <S.Form onSubmit={onSubmit}>
        <Input
          title="이메일"
          name="email"
          placeholder="이메일을 입력해 주세요"
          type="email"
          control={control}
          rules={{ required: 'This field is required' }}
        />
        <Input
          title="비밀번호"
          name="password"
          placeholder="비밀번호를 입력해 주세요"
          type="password"
          control={control}
          rules={{ required: 'This field is required' }}
        />
      </S.Form>
      <PlainButton
        onClick={onSubmit}
        style="primary"
        height="4.8rem"
        roundSize="M"
      >
        로그인 하기
      </PlainButton>
      <S.Info>
        회원이 아니신가요? <S.Span>회원가입하기</S.Span>
      </S.Info>
    </S.Wrapper>
  );
}

export default Signin;
