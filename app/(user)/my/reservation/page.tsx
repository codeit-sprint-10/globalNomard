'use client';
import React from 'react';
import Card from './_components/card/Card';
import Text, { TextType } from '@/_styles/Text';
import * as S from './reservation.style';

export default function Reservation() {
  return (
    <div>
      <S.Title>
        <Text $normalType={TextType.Pre22} text="이번 달 예약 현황" />
        <Text $normalType={TextType.Pre9} text="2024년 2월" />
      </S.Title>
      <Card />
    </div>
  );
}
