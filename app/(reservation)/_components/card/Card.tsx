import React from 'react';
import * as S from './card.style';
import Text, { TextType } from '@/_styles/Text';

export default function Card() {
  return (
    <S.Wrapper>
      <S.Header>
        <Text $normalType={TextType.Pre3} text="2024.02.23" />
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
        <S.ListCard>
          <Text $normalType={TextType.Pre41} text="닉네임" />
          <Text $normalType={TextType.Pre41} text="인원" />
        </S.ListCard>
      </S.List>
    </S.Wrapper>
  );
}
