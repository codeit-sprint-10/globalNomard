'use client';

import styled from 'styled-components';
import { Text, TextType } from '@/_styles/Text';
import Button from '@/_components/Button/Button';
import { RESPONSIBLE_SIZE } from '@/_styles/constants';
import { useForm } from 'react-hook-form';
import UseInput from '@/(user)/_components/UseInput/UseInput';
import UseSelect from '@/(user)/_components/UseSelect/UseSelect';
import DatePick, { DateType } from '@/(user)/_components/DatePick/DatePick';
import { useState } from 'react';
import COLORS from '@/_styles/colors';

type FormValues = {
  [key: string]: string;
};

interface DateTypes {
  date: string;
  startTime: string | undefined;
  endTime: string | undefined;
}

function Page() {
  //datePicker value state 초기값 빈배열
  const [reservation, setReservation] = useState<DateTypes[]>([]);

  const { control, handleSubmit, formState } = useForm<FormValues>({
    mode: 'onChange',
  });

  const onSubmit = (data: FormValues) => {
    //DatePicker 데이터를 가져옴
    //API를 연결하여 데이터 전송
    console.log(data);
  };

  const handleDatePickSubmit = (data: DateType) => {
    const year = data.date?.getFullYear().toString();
    const month = data.date?.getMonth().toString();
    const date = data.date?.getDate().toString();

    const dateValue = `${year}-${month}-${date}`;
    const startTime = data.startTime?.toString().substring(16, 21);
    const endTime = data.endTime?.toString().substring(16, 21);
    const dates = [
      {
        date: dateValue,
        startTime,
        endTime,
      },
    ];
    // console.log(dateForm);
    // console.log(startTime?.substring(16, 21));
    // console.log(endTime?.substring(16, 21));
    setReservation(reservation.concat(dates));
    //state 관리
  };

  console.log(reservation);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Wrapper>
        <PageHeader>
          <Text $normalType={TextType.Pre22} text="내 체험 등록" />
          <Button.Plain
            style="primary"
            roundSize="S"
            width="12rem"
            height="4.8rem"
            type="submit"
            isNotActive={formState.isValid ? false : true}
          >
            <Text $normalType={TextType.Pre10} text="수정하기" />
          </Button.Plain>
        </PageHeader>
        <UseInput
          type="text"
          placeholder="제목"
          control={control}
          name="title"
        />
        <UseSelect name="category" control={control} />
        <UseInput
          type="textArea"
          placeholder="설명"
          control={control}
          name="description"
        />
        <Text $normalType={TextType.Pre8} text="가격" />
        <UseInput
          type="number"
          placeholder="가격"
          control={control}
          name="price"
        />
        <Text $normalType={TextType.Pre8} text="예약 가능한 시간대" />
        <DatePick onClick={handleDatePickSubmit} />
        {reservation &&
          reservation.map((reservations) => (
            <ReservationContainer>
              <ReservationDate>{reservations.date}</ReservationDate>
              <TimeContainer>
                <ReservationTime>{reservations.startTime}</ReservationTime>
                <ReservationTime>{reservations.endTime}</ReservationTime>
              </TimeContainer>
              <Button.Add style="minus" type="button"></Button.Add>
            </ReservationContainer>
          ))}
      </Wrapper>
    </form>
  );
}

export default Page;

const Wrapper = styled.div`
  width: 79.2rem;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0.8rem;
  border: 1px solid black;

  @media screen and (max-width: ${RESPONSIBLE_SIZE.tablet}) {
    width: 42.9rem;
  }

  @media screen and (max-width: ${RESPONSIBLE_SIZE.mobile}) {
    width: 34.3rem;
  }
`;

const PageHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

const ReservationContainer = styled.div`
  display: flex;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  gap: 2rem;
`;

const ReservationDate = styled.div`
  width: 50rem;
  padding: 18px 16px;
  border-radius: 0.4rem;
  border: 1px solid ${COLORS.GRAY70};
`;

const TimeContainer = styled.div`
  display: flex;
  gap: 1.2rem;
`;
const ReservationTime = styled.div`
  width: 14.8rem;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  border-radius: 0.4rem;
  border: 1px solid ${COLORS.GRAY70};
`;
