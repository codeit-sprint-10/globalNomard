import React from 'react';
import * as S from './card.style';
import Text, { TextType } from '@/_styles/Text';
import { PlainButton } from '@/_components/Button/PlainButton/PlainButton';

export default function Card() {
  return (
    <S.Wrapper>
      <S.Header>
        <Text $normalType={TextType.Pre3} text="2024.02.23" />
        <S.Item>
          <S.Blue />
          <Text $normalType={TextType.Pre1} text="예약" />
          <Text $normalType={TextType.Pre1} text="2" />
        </S.Item>
        <S.Item>
          <S.Beige />
          <Text $normalType={TextType.Pre1} text="승인" />
          <Text $normalType={TextType.Pre1} text="1" />
        </S.Item>
        <S.Item>
          <S.Gray />
          <Text $normalType={TextType.Pre1} text="취소" />
          <Text $normalType={TextType.Pre1} text="0" />
        </S.Item>
      </S.Header>
      <S.Info>
        <Text $normalType={TextType.Pre40} text="예약 날짜" />
        <Text $normalType={TextType.Pre20} text="2024년 2월 23일" />
        <S.DropDown>
          <Text $normalType={TextType.Pre1} text="14:00 ~ 15:00" />
        </S.DropDown>
      </S.Info>
      <S.List>
        <Text $normalType={TextType.Pre40} text="예약 내역" />
        <ListCard />
      </S.List>
    </S.Wrapper>
  );
}

const ListCard = () => {
  return (
    <S.ListCard>
      <S.TextWrapper>
        <Text $normalType={TextType.Pre41} text="닉네임" />
        <Text $normalType={TextType.Pre41} text="장만철" />
      </S.TextWrapper>
      <S.TextWrapper>
        <Text $normalType={TextType.Pre41} text="인원" />
        <Text $normalType={TextType.Pre41} text="12명" />
      </S.TextWrapper>
      <S.ButtonWrapper>
        <PlainButton roundSize="S">승인하기</PlainButton>
        <PlainButton roundSize="S">거절하기</PlainButton>
      </S.ButtonWrapper>
    </S.ListCard>
  );
};
