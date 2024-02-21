/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { PlainButton } from '@/_components/Button/PlainButton/PlainButton';
import Input from '../../_components/input/Input';
import * as S from '@/(auth)/sign.style';
import { useForm } from 'react-hook-form';
import { postUser } from '@/_api/postUser';
import { useRouter } from 'next/navigation';

function Signin() {
  const { control, handleSubmit } = useForm({ mode: 'onChange' });
  const router = useRouter();

  const User = async (data: any) => {
    try {
      const { email, password } = data;
      // data = 내가 친 email, password만 들어있음
      const res = await postUser({ email, password });
      console.log(res);
      localStorage.setItem('token', res.accessToken);
      localStorage.setItem('token', res.refreshToken);
      router.push('/home');
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = handleSubmit((data) => {
    User(data);
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
