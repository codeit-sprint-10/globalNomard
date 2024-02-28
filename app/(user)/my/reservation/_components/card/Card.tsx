import React, { useEffect, useState } from 'react';
import * as S from './card.style';
import Text, { TextType } from '@/_styles/Text';
import { PlainButton } from '@/_components/Button/PlainButton/PlainButton';
import {
  getMyActivityDate,
  getMyActivityTime,
} from '@/_api/myActivities/getMyActivityReservation';

interface Props {
  dateList: Item;
}
interface Item {
  scheduleId: number;
  startTime: string;
  endTime: string;
  count: Count;
}

interface Count {
  declined: number;
  confirmed: number;
  pending: number;
}

export default function Card({ dateList }: Props) {
  return (
    dateList &&
    dateList.map((date: DateProps, index: number) => (
      <S.Wrapper key={index}>
        <S.Header>
          <Text $normalType={TextType.Pre3} text={date.date} />
          <S.Item>
            <S.Blue />
            <Text $normalType={TextType.Pre1} text="예약" />
            <Text
              $normalType={TextType.Pre1}
              text={date.reservations.pending}
            />
          </S.Item>
          <S.Item>
            <S.Beige />
            <Text $normalType={TextType.Pre1} text="승인" />
            <Text
              $normalType={TextType.Pre1}
              text={date.reservations.confirmed}
            />
          </S.Item>
          <S.Item>
            <S.Gray />
            <Text $normalType={TextType.Pre1} text="취소" />
            {/* <Text $normalType={TextType.Pre1} text={list.count.declined} /> */}
          </S.Item>
        </S.Header>
        <S.Info>
          <Text $normalType={TextType.Pre40} text="예약 날짜" />
          <Text $normalType={TextType.Pre20} text={date.date} />
        </S.Info>
        <ListTime date={date} />
      </S.Wrapper>
    ))
  );
}

export interface DateProps {
  date: string;
  reservations: Reservations;
}

export interface Reservations {
  completed: number;
  confirmed: number;
  pending: number;
}

export interface TimeProps {
  scheduleId: number;
  startTime: string;
  endTime: string;
  count: Type;
}

export interface Type {
  declined: number;
  confirmed: number;
  pending: number;
}

const ListTime = ({ date }: { date: DateProps }) => {
  const [dateList, setDateList] = useState();

  const fetchDate = async (date: DateProps) => {
    const activityId = 144;
    const dateTime = date.date;
    const response = await getMyActivityDate(activityId, dateTime);
    setDateList(response);
  };

  useEffect(() => {
    fetchDate(date);
  }, []);

  return (
    dateList &&
    dateList.map((item: TimeProps, index: number) => (
      <div key={index}>
        <Text $normalType={TextType.Pre40} text="예약 시간" />
        <S.DropDown>
          <Text
            $normalType={TextType.Pre1}
            text={`${item.startTime} ~ ${item.endTime}`}
          />
        </S.DropDown>
        <S.List>
          <Text $normalType={TextType.Pre40} text="예약 내역" />

          <ListCard scheduleId={item.scheduleId} />
        </S.List>
      </div>
    ))
  );
};

const ListCard = ({ scheduleId }: { scheduleId: number }) => {
  const [timeList, setTimeList] = useState();

  const fetchTime = async () => {
    const activityId = 144;
    const response = await getMyActivityTime(activityId, scheduleId);
    setTimeList(response.reservations);
  };

  useEffect(() => {
    fetchTime();
  }, []);

  return (
    timeList &&
    timeList.map((item, index: number) => (
      <S.ListCard key={index}>
        <S.TextWrapper>
          <Text $normalType={TextType.Pre41} text="닉네임" />
          <Text $normalType={TextType.Pre41} text={item.nickname} />
        </S.TextWrapper>
        <S.TextWrapper>
          <Text $normalType={TextType.Pre41} text="인원" />
          <Text $normalType={TextType.Pre41} text={`${item.headCount}명`} />
        </S.TextWrapper>
        <S.ButtonWrapper>
          <PlainButton roundSize="S">승인하기</PlainButton>
          <PlainButton roundSize="S">거절하기</PlainButton>
        </S.ButtonWrapper>
      </S.ListCard>
    ))
  );
};
