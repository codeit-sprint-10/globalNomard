import Add from '@/assets/icons/Add';
import Subtract from '@/assets/icons/Subtract';
import { Schedule } from '@/_api/activity/activity.types';
import fetcher from '@/_api/api';
import { PlainButton } from '@/_components/Button/PlainButton/PlainButton';
import COLORS from '@/_styles/colors';
import Text, { TextType } from '@/_styles/Text';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { styled } from 'styled-components';

interface props {
  activityId: string;
  scheduleId: number;
  start: string;
  end: string;
}

function GoodsDate({ activityId, scheduleId, start, end }: props) {
  const [headCount, setHeadCount] = useState(1);

  const AddCount = () => {
    setHeadCount(headCount + 1);
  };

  const SubtractCount = () => {
    if (headCount > 1) {
      setHeadCount(headCount - 1);
    }
  };

  // click handler
  const handleClickReservationBtn = async () => {
    // api call
    const { data } = await fetcher({
      url: `/activities/${activityId}/reservations`,
      method: 'POST',
      data: { scheduleId, headCount },
    });
    console.log({ data });
  };

  return (
    <DatePickContainer>
      <PerToPerson>
        <Text $normalType={TextType.Pre19} text="₩ 1,000 " />/ 인
      </PerToPerson>
      <Calender>
        <Text $normalType={TextType.Sqo42} text="날짜" />
        {/* <StyledDatePicker selected={startDate} onChange={onChange} inline /> */}
      </Calender>
      <Reservation>
        <Text $normalType={TextType.Pre25} text="예약 가능한 시간" />
        <ReservationTime>
          <StartDate>{`${start} ~ ${end}`}</StartDate>
          <EndDate>{`${start} ~ ${end}`}</EndDate>
        </ReservationTime>
      </Reservation>
      <NumberOfPeople>
        <Text $normalType={TextType.Pre9} text="참여 인원 수" />
        <NumberButton>
          <button onClick={AddCount}>
            <Add />
          </button>
          <NumberText>{headCount}</NumberText>
          <button onClick={SubtractCount}>
            <Subtract />
          </button>
        </NumberButton>
        <PlainButton
          style="primary"
          roundSize="S"
          height="56px"
          onClick={handleClickReservationBtn}
        >
          <Text $normalType={TextType.Pre10} text="예약하기" />
        </PlainButton>
        <TotalCount>
          <TotalText>총 합계</TotalText>
          <TotalPrice>{`₩ ${headCount * 1000}`}</TotalPrice>
        </TotalCount>
      </NumberOfPeople>
    </DatePickContainer>
  );
}

export default GoodsDate;

const DatePickContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 38.4rem;
  border: 1px solid ${COLORS.GRAY30};
  border-radius: 1rem;
  padding: 2.4rem;
  overflow: hidden;
  gap: 1.6rem;
`;

const PerToPerson = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
`;

const Calender = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${COLORS.GRAY30};
  padding-top: 1.6rem;
  gap: 1.6rem;
`;

const StyledDatePicker = styled(DatePicker)`
  background-color: transparent;
  color: #707070;
  font-size: 40px;
`;

const ReservationTime = styled.div`
  display: flex;
  gap: 12px;
`;

const StartDate = styled.div`
  display: flex;
  padding: 10px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background-color: ${COLORS.BLACK50};
  color: ${COLORS.WHITE10};
`;

const EndDate = styled.div`
  display: flex;
  padding: 10px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: 1px solid ${COLORS.BLACK50};
  border-radius: 8px;
`;

const Reservation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const NumberOfPeople = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 12px;
  border-top: 1px solid ${COLORS.GRAY30};
  gap: 2.4rem;
`;

const NumberButton = styled.div`
  width: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${COLORS.GRAY30};
  border-radius: 0.6rem;
  border-radius: 6px;
  padding: 10px;
`;

const NumberText = styled.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

const TotalCount = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1.6rem;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
  border-top: 1px solid ${COLORS.GRAY30};
`;

const TotalText = styled.div``;

const TotalPrice = styled.div``;
