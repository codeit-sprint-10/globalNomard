'use client';

import styled from 'styled-components';
import { Text, TextType } from '@/_styles/Text';
import { RESPONSIBLE_SIZE } from '@/_styles/constants';
import { useForm } from 'react-hook-form';
import UseInput from '@/(user)/_components/UseInput/UseInput';
import UseSelect from '@/(user)/_components/UseSelect/UseSelect';
import DatePick, { DateType } from '@/(user)/_components/DatePick/DatePick';
import { useState } from 'react';
import COLORS from '@/_styles/colors';
import Upload from '@/(user)/_components/Upload/Upload';
import { Activities, Schedule } from '@/_api/activities/activities.types';
import { CreateActivities } from '@/_api/activities/createActivities';
import { PlainButton } from '@/_components/Button/PlainButton/PlainButton';
import { AddButton } from '@/_components/Button/AddButton/AddButton';

export type FormValues = {
  title: string;
  category?: string;
  description: string;
  price: number;
  bannerImageUrl?: string;
};

function Page() {
  //datePicker value state 초기값 빈배열
  const [reservation, setReservation] = useState<Schedule[]>([]);
  const [bannerImg, setBannerImg] = useState<string>('');

  const { control, handleSubmit, formState } = useForm<FormValues>({
    mode: 'onChange',
  });

  const onSubmit = async (data: FormValues) => {
    //DatePicker 데이터를 가져옴
    //API를 연결하여 데이터 전송
    const { category, description, price, title } = data;

    const reqBody: Activities = {
      title,
      category: category || '',
      description,
      price,
      address: '서울특별시 강남구 테헤란로 427',
      schedules: reservation,
      bannerImageUrl: bannerImg || '',
    };
    console.log(reqBody);
    await CreateActivities(reqBody);
  };

  const onRemove = (date: string) => {
    setReservation(
      reservation.filter((reservation) => reservation.date !== date),
    );
  };

  const handleDatePickSubmit = (data: DateType) => {
    const year = data.date?.getFullYear().toString();
    const month = data.date?.getMonth().toString();
    const date = data.date?.getDate().toString();

    const dateValue = `${year}-${month}-${date}`;
    const startTime = data.startTime?.toString().substring(16, 21);
    const endTime = data.endTime?.toString().substring(16, 21);
    const dates: Schedule = {
      times: [
        {
          startTime: startTime || '',
          endTime: endTime || '',
        },
      ],
      date: dateValue,
    };

    setReservation(reservation.concat(dates));
    //state 관리
  };

  const handleFilePickSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setBannerImg(imageUrl);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Wrapper>
        <PageHeader>
          <Text $normalType={TextType.Pre22} text="내 체험 등록" />
          <PlainButton
            style="primary"
            roundSize="S"
            width="12rem"
            height="4.8rem"
            type="submit"
            isNotActive={formState.isValid ? false : true}
          >
            <Text $normalType={TextType.Pre10} text="수정하기" />
          </PlainButton>
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
          reservation.map(({ times, date }, idx) => (
            <ReservationContainer>
              <ReservationDate>{date}</ReservationDate>
              <TimeContainer>
                <ReservationTime>{times?.[idx]?.startTime}</ReservationTime>
                <ReservationTime>{times?.[idx]?.endTime}</ReservationTime>
              </TimeContainer>
              <AddButton
                style="minus"
                type="button"
                onClick={() => onRemove(date)}
              ></AddButton>
            </ReservationContainer>
          ))}
        <Text $normalType={TextType.Pre8} text="배너 이미지" />
        <Upload onChange={handleFilePickSubmit} uploadImage={bannerImg} />
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
