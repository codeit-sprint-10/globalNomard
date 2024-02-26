'use client';

import DatePick, { DateType } from '@/(user)/_components/DatePick/DatePick';
import Upload from '@/(user)/_components/Upload/Upload';
import UseInput from '@/(user)/_components/UseInput/UseInput';
import UseSelect from '@/(user)/_components/UseSelect/UseSelect';
import { Schedule } from '@/_api/activities/activities.types';
import { createActivities } from '@/_api/activities/createActivities';
import { AddButton } from '@/_components/Button/AddButton/AddButton';
import { PlainButton } from '@/_components/Button/PlainButton/PlainButton';
import { Text, TextType } from '@/_styles/Text';
import COLORS from '@/_styles/colors';
import { RESPONSIBLE_SIZE } from '@/_styles/constants';
import dayjs from 'dayjs';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

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
  const [imgResult, setImgResult] = useState<string | ArrayBuffer | null>(null);

  const { control, handleSubmit, formState } = useForm<FormValues>({
    mode: 'onChange',
  });

  const onSubmit = async (data: FormValues) => {
    //DatePicker 데이터를 가져옴
    //API를 연결하여 데이터 전송
    const { category, description, price, title } = data;
    const bannerImageUrl = imgResult;

    const reqBody = {
      title,
      category: category || '',
      description,
      price: Number(price),
      address: '서울특별시 강남구 테헤란로 427',
      schedules: reservation,
      bannerImageUrl:
        'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/globalnomad/activity_registration_image/a.png',
    };
    await createActivities(reqBody);
  };

  const onRemove = (date: string) => {
    setReservation(
      reservation.filter((reservation) => reservation.date !== date),
    );
  };

  const handleDatePickSubmit = (data: DateType) => {
    const dateValue = dayjs(data.date).format('YYYY-MM-DD');

    const startTime = data.startTime?.toString().substring(16, 21);
    const endTime = data.endTime?.toString().substring(16, 21);
    const dates = {
      startTime: startTime || '',
      endTime: endTime || '',
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

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const base64Data = reader.result;
        setImgResult(base64Data);
      };
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
          reservation.map(({ startTime, endTime, date }, idx) => (
            <ReservationContainer key={idx}>
              <ReservationDate>{date}</ReservationDate>
              <TimeContainer>
                <ReservationTime>{startTime}</ReservationTime>
                <ReservationTime>{endTime}</ReservationTime>
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
