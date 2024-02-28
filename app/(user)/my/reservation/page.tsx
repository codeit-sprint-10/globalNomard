'use client';
import React, { useEffect } from 'react';
import Card from './_components/card/Card';
import Text, { TextType } from '@/_styles/Text';
import * as S from './reservation.style';
import { getMyActivityReservation } from '@/_api/myActivities/getMyActivityReservation';

export default function Reservation() {
  const fetchRservation = async () => {
    try {
      const activityId = 102;
      const year = 2024;
      const month = 1;
      const result = await getMyActivityReservation(activityId, year, month);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRservation();
  });
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
