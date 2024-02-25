/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import * as S from '@/(auth)/sign.style';
import { postUser } from '@/_api/postUser';
import { PlainButton } from '@/_components/Button/PlainButton/PlainButton';
import { useToken, useUserinfo } from '@/_hooks/useUserinfo';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import Input from '../../_components/input/Input';
import ReservationCardList from '@/(main)/_components/reservationCard/ReservationCardList/ReservationCardList';

function Signin() {
  const { control, handleSubmit } = useForm({ mode: 'onChange' });
  const router = useRouter();
  const { setUserinfo } = useUserinfo();
  const { setAccessToken } = useToken();

  const User = async (data: any) => {
    try {
      const { email, password } = data;
      const res = await postUser({ email, password });
      setUserinfo(res?.user);
      localStorage.setItem('userInfo', res?.user);

      setAccessToken(res?.accessToken);
      localStorage.setItem('accessToken', res?.accessToken);

      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = handleSubmit((data) => {
    User(data);
  });

  return (
    <S.Wrapper>
      <ReservationCardList />
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
