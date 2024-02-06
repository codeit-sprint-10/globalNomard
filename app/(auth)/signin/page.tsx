'use client';
import { PlainButton } from '@/_components/Button/PlainButton/PlainButton';
import Input from '../_components/input/Input';
import IMAGES from '@/public/images';
import * as S from '@/_styles/sign.style';
import Image from 'next/image';
import Test from '../_components/input/Test';
import { useForm } from 'react-hook-form';

function Page() {
  const { control, handleSubmit } = useForm({ mode: 'onChange' });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <S.Wrapper>
      <Image src={IMAGES.logo} alt="logo" />
      <form onSubmit={onSubmit}>
        <Test
          label="Example"
          name="email"
          type="email"
          control={control}
          rules={{ required: 'This field is required' }}
        />
      </form>
      <Input title="이메일" type="email" placeholder="이메일을 입력해 주세요" />
      <Input title="비밀번호" type="email" placeholder="비밀번호를 입력해 주세요" />
      <PlainButton style="primary" height="4.8rem" roundSize="M">
        로그인 하기
      </PlainButton>
      <S.Info>
        회원이 아니신가요? <S.Span>회원가입하기</S.Span>
      </S.Info>
    </S.Wrapper>
  );
}

export default Page;
