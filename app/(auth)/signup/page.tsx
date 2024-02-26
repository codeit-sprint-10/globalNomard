'use client';
import * as S from '@/(auth)/sign.style';
import { postNewUser } from '@/_api/postNewUser';
import { PlainButton } from '@/_components/Button/PlainButton/PlainButton';
import { useForm } from 'react-hook-form';
import Input from '../../_components/input/Input';

function Signup() {
  const { control, handleSubmit } = useForm({ mode: 'onChange' });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const newUser = async (data: any) => {
    try {
      const { email, nickname, password } = data;

      const res = await postNewUser({ email, nickname, password });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = handleSubmit((data) => {
    newUser(data);
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
          title="닉네임"
          name="nickname"
          placeholder="닉네임을 입력해 주세요"
          type="nickname"
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
        <Input
          title="비밀번호 확인"
          name="passwordCheck"
          placeholder="비밀번호를 한 번 더 입력해 주세요"
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
        회원가입 하기
      </PlainButton>
      <S.Info>
        회원이 아니신가요? <S.Span>회원가입하기</S.Span>
      </S.Info>
    </S.Wrapper>
  );
}

export default Signup;
