'use client';
import { PlainButton } from '@/_components/Button/PlainButton/PlainButton';
import Input from '../_components/input/Input';
// import IMAGES from '@/assets/images';
import * as S from '@/_styles/sign.style';

function page() {
  return (
    <S.Wrapper>
      <Input title="이메일" type="email" placeholder="이메일을 입력해 주세요" />
      <Input title="닉네임" type="email" placeholder="닉네임을 입력해 주세요" />
      <Input
        title="비밀번호"
        type="email"
        placeholder="비밀번호를 입력해 주세요"
      />
      <Input
        title="비밀번호 확인"
        type="password"
        placeholder="비밀번호를 한 번 더 입력해 주세요"
      />
      <PlainButton style="primary" height="4.8rem" roundSize="M">
        로그인 하기
      </PlainButton>
      <S.Info>
        회원이 아니신가요? <S.Span>회원가입하기</S.Span>
      </S.Info>
    </S.Wrapper>
  );
}

export default page;
