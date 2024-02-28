'use client';
import React, { useEffect, useState } from 'react';
import Card from './_components/card/Card';
import Text, { TextType } from '@/_styles/Text';
import * as S from './reservation.style';
import { getMyActivityReservation } from '@/_api/myActivities/getMyActivityReservation';
import Left from '@/assets/icons/Arrow_left.svg';
import Right from '@/assets/icons/Arrow_right.svg';

export default function Reservation() {
  const [year, setYear] = useState(2024);
  const [month, setMonth] = useState(12);
  const [dateList, setDateList] = useState([]);

  const hanleMinusMonth = () => {
    if (month === 1) {
      setYear(year - 1);
      setMonth(12);
      return;
    }
    setMonth(month - 1);
  };

  const handlePlusMonth = () => {
    if (month === 12) {
      setYear(year + 1);
      setMonth(1);
      return;
    }
    setMonth(month + 1);
  };

  const fetchReservation = async () => {
    try {
      // 월별 호출
      const activityId = 144;
      const result = await getMyActivityReservation(activityId, year, month);

      setDateList(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchReservation();
  }, [month]);

  return (
    <div>
      <S.Title>
        <Text $normalType={TextType.Pre22} text="이번 달 예약 현황" />
        <S.Schedule>
          <S.Arrow onClick={() => hanleMinusMonth()}>
            <Left />
          </S.Arrow>
          <Text $normalType={TextType.Pre9} text={`${year}년 ${month}월`} />
          <S.Arrow onClick={() => handlePlusMonth()}>
            <Right />
          </S.Arrow>
        </S.Schedule>
      </S.Title>
      {dateList && dateList.length !== 0 ? (
        <Card dateList={dateList} />
      ) : (
        <S.Page>
          <p>예약 목록이 없습니다</p>
        </S.Page>
      )}
    </div>
  );
}
