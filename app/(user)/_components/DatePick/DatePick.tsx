import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { styled } from 'styled-components';
import { ko } from 'date-fns/esm/locale'; //한국어 설정
import COLORS from '@/_styles/colors';
import { AddButton } from '@/_components/Button/AddButton/AddButton';

interface Props {
  onClick: (data: DateType) => void;
}

export interface DateType {
  date: Date | undefined;
  startTime: Date | undefined;
  endTime: Date | undefined;
}

function DatePick({ onClick }: Props) {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [startTime, setStartTime] = useState<Date>();
  const [endTime, setEndTime] = useState<Date>();

  const date: DateType = {
    date: selectedDate,
    startTime,
    endTime,
  };

  const onDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

  // 시작 시간이 선택되면 해당 시간 적용 및 isSelected를 true, endTime을 null로
  const onStartSelect = (time: Date) => {
    setStartTime(time);
  };

  const onEndSelect = (time: Date) => {
    setEndTime(time);
  };

  return (
    <Wrapper>
      <Container>
        <FlexBox>
          <Text>날짜</Text>
          <DateBox>
            <StyledDatePicker
              dateFormat="yyyy-MM-dd" // 날짜 형태
              locale={ko} //한글
              closeOnScroll={true}
              popperPlacement="bottom-start"
              placeholderText="YY/MM/DD"
              selected={selectedDate}
              onChange={onDateSelect}
            />
          </DateBox>
        </FlexBox>
        <TimeContainer>
          <FlexBox>
            <Text>시작 시간</Text>
            <TimeBox>
              <StyledTimePicker
                selected={startTime}
                onChange={onStartSelect}
                locale={ko}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={30}
                timeCaption="Time"
                dateFormat="hh:mm"
                placeholderText="00 : 00"
              />
            </TimeBox>
          </FlexBox>

          <FlexBox>
            <Text>종료 시간</Text>
            <TimeBox>
              <StyledTimePicker
                selected={endTime}
                onChange={onEndSelect}
                locale={ko}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={30}
                timeCaption="Time"
                dateFormat="hh:mm"
                placeholderText="00 : 00"
              />
            </TimeBox>
          </FlexBox>
        </TimeContainer>
        <FlexBox>
          <AddButton style="plus" type="button" onClick={() => onClick(date)} />
        </FlexBox>
      </Container>
    </Wrapper>
  );
}

export default DatePick;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  gap: 21px;
`;
const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 10px;
`;

const Text = styled.div`
  color: ${COLORS.GRAY80};
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
`;

const TimeContainer = styled.div`
  display: flex;
  gap: 12px;
`;

const DateBox = styled.div`
  width: 370px;
  border: 1px solid ${COLORS.GRAY70};
  border-radius: 4px;
`;

const TimeBox = styled.div`
  width: 147px;
  border: 1px solid ${COLORS.GRAY70};
  border-radius: 4px;
`;

const StyledDatePicker = styled(DatePicker)`
  width: 379px;
  padding: 16px;
  background-color: transparent;
  color: #707070;
`;

const StyledTimePicker = styled(DatePicker)`
  width: 140px;
  padding: 16px;
  background-color: transparent;
  color: #707070;
`;
